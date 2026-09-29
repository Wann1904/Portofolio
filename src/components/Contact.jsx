import { useState } from 'react'
import SectionHeading from './SectionHeading'
import { site } from '../data/site'

function ContactLink({ href, label, value }) {
  if (!value) return null
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className="flex items-center justify-between rounded-md border border-base-line px-4 py-3 text-sm text-ink-soft transition-colors hover:border-ink-faint hover:text-ink"
    >
      <span className="font-mono text-xs text-ink-faint">{label}</span>
      <span>{value}</span>
    </a>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || 'website visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <SectionHeading
        id="contact-heading"
        title="Contact"
        description="Terbuka untuk diskusi, kolaborasi, atau sekadar ngobrol soal repair dan development."
        accent="neutral"
      />

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-3">
          <ContactLink href={site.github} label="GitHub" value={site.github?.replace('https://', '')} />
          <ContactLink href={`mailto:${site.email}`} label="Email" value={site.email} />
          <ContactLink
            href={site.linkedin}
            label="LinkedIn"
            value={site.linkedin ? site.linkedin.replace('https://', '') : ''}
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-1.5 block text-xs text-ink-faint">
              Nama
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-md border border-base-line bg-base-panel px-3 py-2 text-sm text-ink outline-none focus:border-hardware"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1.5 block text-xs text-ink-faint">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-md border border-base-line bg-base-panel px-3 py-2 text-sm text-ink outline-none focus:border-hardware"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-xs text-ink-faint">
              Pesan
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={form.message}
              onChange={handleChange}
              className="w-full rounded-md border border-base-line bg-base-panel px-3 py-2 text-sm text-ink outline-none focus:border-hardware"
            />
          </div>
          <button
            type="submit"
            className="rounded-md bg-hardware px-5 py-2.5 text-sm font-medium text-base"
          >
            Send Message
          </button>
          <p className="text-xs text-ink-faint">
            Form ini membuka aplikasi email Anda dengan pesan sudah terisi. Untuk pengiriman
            langsung tanpa membuka email client, hubungkan form ini ke layanan seperti Formspree
            atau backend Anda sendiri.
          </p>
        </form>
      </div>
    </section>
  )
}
