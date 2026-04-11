'use client';

import { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

export type MapMarker = {
  lng: number;
  lat: number;
  title?: string;
  description?: string;
};

type Props = {
  markers: MapMarker[];
  center?: [number, number];
  zoom?: number;
  className?: string;
};

export function MapView({ markers, center, zoom = 12, className }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const isDark = document.documentElement.classList.contains('dark');
    const initialCenter: [number, number] =
      center ?? (markers[0] ? [markers[0].lng, markers[0].lat] : [22.055, 50.583]);

    const map = new maplibregl.Map({
      container: containerRef.current,
      style: isDark
        ? 'https://tiles.openfreemap.org/styles/dark'
        : 'https://tiles.openfreemap.org/styles/positron',
      center: initialCenter,
      zoom,
      attributionControl: { compact: true },
    });

    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-right');

    map.on('load', () => {
      markers.forEach((m) => {
        const el = document.createElement('div');
        el.className = 'pks-marker';
        el.innerHTML = `
          <div class="pks-marker-pin">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M8 6v6"/><path d="M15 6v6"/><path d="M2 12h19.6"/><path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"/><circle cx="7" cy="18" r="2"/><path d="M9 18h5"/><circle cx="16" cy="18" r="2"/>
            </svg>
          </div>
          <div class="pks-marker-pulse"></div>
        `;

        const marker = new maplibregl.Marker({ element: el, anchor: 'bottom' })
          .setLngLat([m.lng, m.lat])
          .addTo(map);

        if (m.title || m.description) {
          const popup = new maplibregl.Popup({ offset: 28, closeButton: false }).setHTML(
            `<div style="padding:4px 2px;font-family:var(--font-inter,system-ui)">
              ${m.title ? `<div style="font-weight:700;font-size:13px;margin-bottom:2px">${m.title}</div>` : ''}
              ${m.description ? `<div style="font-size:11px;color:#64748b">${m.description}</div>` : ''}
            </div>`
          );
          marker.setPopup(popup);
        }
      });

      if (markers.length > 1) {
        const bounds = new maplibregl.LngLatBounds();
        markers.forEach((m) => bounds.extend([m.lng, m.lat]));
        map.fitBounds(bounds, { padding: 80, maxZoom: 11, duration: 0 });
      }
    });

    mapRef.current = map;

    const observer = new MutationObserver(() => {
      const dark = document.documentElement.classList.contains('dark');
      map.setStyle(
        dark
          ? 'https://tiles.openfreemap.org/styles/dark'
          : 'https://tiles.openfreemap.org/styles/positron'
      );
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => {
      observer.disconnect();
      map.remove();
      mapRef.current = null;
    };
  }, [markers, center, zoom]);

  return (
    <>
      <div ref={containerRef} className={className} />
      <style jsx global>{`
        .pks-marker {
          position: relative;
          width: 40px;
          height: 40px;
          cursor: pointer;
        }
        .pks-marker-pin {
          position: absolute;
          inset: 0;
          background: #dc2626;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          display: grid;
          place-items: center;
          color: white;
          box-shadow: 0 6px 16px -4px rgba(220, 38, 38, 0.6), 0 0 0 3px white;
          transition: transform 0.2s;
        }
        .pks-marker-pin svg {
          transform: rotate(45deg);
        }
        .pks-marker:hover .pks-marker-pin {
          transform: rotate(-45deg) scale(1.1);
        }
        .pks-marker-pulse {
          position: absolute;
          left: 50%;
          bottom: -4px;
          width: 12px;
          height: 4px;
          background: rgba(220, 38, 38, 0.3);
          border-radius: 50%;
          transform: translateX(-50%);
          animation: pks-pulse 2s ease-out infinite;
        }
        @keyframes pks-pulse {
          0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.4; }
          50% { transform: translateX(-50%) scale(1.8); opacity: 0.1; }
        }
        .maplibregl-popup-content {
          border-radius: 14px !important;
          box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.25) !important;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }
        .dark .maplibregl-popup-content {
          background: #0f172a !important;
          color: #f1f5f9;
          border-color: rgba(255, 255, 255, 0.1);
        }
        .dark .maplibregl-popup-tip {
          border-top-color: #0f172a !important;
        }
        .maplibregl-ctrl-group {
          border-radius: 14px !important;
          overflow: hidden;
          box-shadow: 0 6px 20px -8px rgba(0, 0, 0, 0.2) !important;
        }
      `}</style>
    </>
  );
}
