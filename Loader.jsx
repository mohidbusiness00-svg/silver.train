export default function Loader() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-coffee-950" role="status" aria-label="Loading">
      <div className="relative">
        <div className="coffee-loader"></div>
        <span className="absolute inset-0 flex items-center justify-center text-2xl">☕</span>
      </div>
      <p className="mt-6 font-display text-lg text-cream-100 animate-fade-in">Brewing something special...</p>
    </div>
  )
}
