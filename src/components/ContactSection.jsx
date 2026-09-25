import { useRef, useState } from 'react'
import { useReveal } from '../hooks/useReveal'

// A compact callback form: name, mobile, optional email and a short message. `aside` (e.g. FAQs) sits to its left.
export default function ContactSection({
  aside = null,
  sectionId = 'contact',
  formAction = 'send-audit.php',
  heading = 'Find out why you are not ranking.',
  messagePlaceholder = 'e.g. yoursite.com, we want more local enquiries',
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
    // The id sits on the form card, so contact links land on the form even when the FAQs stack above it.
    <section>
      <div className={`wrap${aside ? ' cta-split' : ''}`}>
        {aside}
        <div className="cta-wrap reveal" id={sectionId} ref={ctaRef}>
          <h2>{heading}</h2>
          <form
            className="audit-form"
            id="auditForm"
            action={formAction}
            method="post"
            noValidate
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <div className="is-half">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" autoComplete="name" required maxLength={80} placeholder="Your name" />
            </div>
            <div className="is-half">
              <label htmlFor="phone">Mobile</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                maxLength={20}
                pattern="\+?[0-9 \-]{10,15}"
                title="A mobile number with at least 10 digits, e.g. 98765 43210"
                placeholder="+91 98765 43210"
              />
            </div>
            <div>
              <label htmlFor="email">
                Email <span style={{ fontWeight: 500, textTransform: 'none', letterSpacing: 0 }}>(optional)</span>
              </label>
              <input id="email" name="email" type="email" autoComplete="email" maxLength={120} placeholder="you@company.com" />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={2} required maxLength={1000} placeholder={messagePlaceholder}></textarea>
            </div>
            <div className="hp" aria-hidden="true">
              <label htmlFor="company">Company</label>
              <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
            </div>
            <button className="btn btn-glow" type="submit" id="auditSubmit" disabled={sending}>
              Submit request
              <span className="btn-glow-icon">
                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 13L13 3M13 3H6M13 3v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
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
