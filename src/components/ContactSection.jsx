import { useRef, useState } from 'react'
import { useReveal } from '../hooks/useReveal'

export default function ContactSection({
  sectionId = 'contact',
  formAction = 'send-audit.php',
  eyebrow = '/04 — Next',
  heading = 'Find out why you are not ranking.',
  description = 'Send your URL. You get a short audit covering technical issues, the keywords you are missing, and what we would fix first. No cost. No pitch deck.',
  messagePlaceholder = 'e.g. local SEO, product pages, blog traffic',
  submitLabel = 'Request a free SEO audit',
  successMessage = 'Thanks. We will send the audit shortly.',
}) {
  const ctaRef = useReveal()
  const formRef = useRef(null)
  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState({ type: '', text: '' })

  async function handleSubmit(e) {
    e.preventDefault()
    const form = formRef.current
    setStatus({ type: '', text: '' })
    if (!form.reportValidity()) return

    setSending(true)
    setStatus({ type: '', text: 'Sending…' })
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      const data = await res.json()
      if (res.ok && data && data.ok) {
        setStatus({ type: 'ok', text: data.message || successMessage })
        form.reset()
      } else {
        setStatus({ type: 'err', text: (data && data.error) || 'Could not send. Please try again.' })
      }
    } catch {
      setStatus({ type: 'err', text: 'Network error. Check the page is on Hostinger with send-audit.php uploaded.' })
    } finally {
      setSending(false)
    }
  }

  return (
    <section id={sectionId}>
      <div className="wrap">
        <div className="cta-wrap reveal" ref={ctaRef}>
          <p className="num">{eyebrow}</p>
          <h2>{heading}</h2>
          <p>{description}</p>
          <form
            className="audit-form"
            id="auditForm"
            action={formAction}
            method="post"
            noValidate
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" autoComplete="name" required maxLength={80} placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" required maxLength={120} placeholder="you@company.com" />
            </div>
            <div>
              <label htmlFor="website">Website URL</label>
              <input id="website" name="website" type="url" inputMode="url" required maxLength={200} placeholder="https://your-site.com" />
            </div>
            <div>
              <label htmlFor="message">
                What should we look at first? <span style={{ fontWeight: 500, textTransform: 'none', letterSpacing: 0 }}>(optional)</span>
              </label>
              <textarea id="message" name="message" maxLength={1000} placeholder={messagePlaceholder}></textarea>
            </div>
            <div className="hp" aria-hidden="true">
              <label htmlFor="company">Company</label>
              <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            <button className="btn btn-primary" type="submit" id="auditSubmit" disabled={sending}>
              {submitLabel}
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 13L13 3M13 3H6M13 3v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <p className={`form-status${status.type ? ` ${status.type}` : ''}`} id="formStatus" role="status" aria-live="polite">
              {status.text}
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
