import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-cream text-center px-4">
      <h1 className="font-serif text-6xl font-bold text-burgundy">404</h1>
      <p className="mt-4 text-lg text-charcoal-light">Page not found.</p>
      <Link href="/" className="mt-6 rounded-full bg-burgundy px-6 py-3 font-semibold text-cream transition hover:bg-ember">
        Back to Home
      </Link>
    </div>
  );
}
