'use client';
import HeroVideo from '../components/HeroVideo';

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center">
      <HeroVideo />
      <div className="z-10 text-center">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">SHLOK SINGH</h1>
        <p className="text-blue-400 mt-4 tracking-widest uppercase">Mechanical Engineering Student | DSEU</p>
      </div>
    </main>
  );
}
