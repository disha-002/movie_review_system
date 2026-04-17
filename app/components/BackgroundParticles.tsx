'use client';
import Antigravity from './Antigravity';

export default function BackgroundParticles() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        zIndex: -1,
        pointerEvents: 'auto',
        background: 'linear-gradient(135deg, #65510b 0%, #8d6e1a 50%, #54410b 100%)',
      }}
    >
      <Antigravity
        count={300}
        magnetRadius={6}
        ringRadius={7}
        waveSpeed={1.9}
        waveAmplitude={1}
        particleSize={1.5}
        lerpSpeed={0.05}
        color={'#916f30'}
        autoAnimate={true}
        particleVariance={1}
        rotationSpeed={0}
        depthFactor={1}
        pulseSpeed={3}
        particleShape='capsule'
        fieldStrength={10}
      />
    </div>
  );
}
