import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center">
      <p className="mb-2 font-mono text-sm text-ink-faint">404</p>
      <h1 className="mb-4 font-display text-2xl font-semibold text-ink">Halaman tidak ditemukan</h1>
      <Link to="/" className="text-sm text-hardware hover:underline">
        ← Kembali ke beranda
      </Link>
    </div>
  )
}
