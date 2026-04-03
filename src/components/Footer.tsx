export default function Footer() {
  return (
    <footer className="border-t border-[#1f1f1f] px-6 py-8">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <p className="font-mono text-xs text-[#64748b]">
          <span className="text-[#22d3ee]">©</span>{" "}
          {new Date().getFullYear()} Kaloyan Donchev
        </p>
        <p className="font-mono text-xs text-[#1f1f1f]">
          Built with Next.js
        </p>
      </div>
    </footer>
  );
}
