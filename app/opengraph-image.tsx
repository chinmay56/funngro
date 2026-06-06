import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Funngro - Earn While You Learn';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0ea5e9 0%, #d946ef 100%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(255,255,255,0.12)',
            borderRadius: '32px',
            padding: '60px 80px',
            border: '1px solid rgba(255,255,255,0.3)',
          }}
        >
          <div style={{ fontSize: 72, fontWeight: 900, color: '#fff', marginBottom: 16 }}>
            Funngro
          </div>
          <div style={{ fontSize: 36, color: 'rgba(255,255,255,0.9)', marginBottom: 24 }}>
            Earn While You Learn
          </div>
          <div style={{ fontSize: 22, color: 'rgba(255,255,255,0.75)', textAlign: 'center', maxWidth: 700 }}>
            70 lakh young Indians earning with India&apos;s biggest brands
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
