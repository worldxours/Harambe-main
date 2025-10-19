declare module 'canvas-confetti' {
  interface ConfettiOptions {
    particleCount?: number;
    angle?: number;
    spread?: number;
    startVelocity?: number;
    decay?: number;
    ticks?: number;
    gravity?: number;
    drift?: number;
    origin?: { x?: number; y?: number };
    colors?: string[];
    scalar?: number;
    [key: string]: any;
  }

  function confetti(opts?: ConfettiOptions): void;

  export default confetti;
}
