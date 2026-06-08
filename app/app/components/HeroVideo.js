export default function HeroVideo() {
  return (
    <div className="fixed inset-0 z-0">
      <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-40 blur-[2px]" src="/hero.mp4" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
    </div>
  );
}
