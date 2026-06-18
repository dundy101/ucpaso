'use client'

import { useState } from 'react'
import PageBanner from '@/components/sections/PageBanner'
import { FadeIn, FadeInSide } from '@/components/motion'
import { Label, Btn } from '@/components/ui'
import { Mail, Instagram, MapPin, Send, ArrowUpRight } from 'lucide-react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Replace with your preferred form handler (Formspree, EmailJS, etc.)
    // For now, shows a success state
    setSubmitted(true)
  }

  return (
    <>
      <PageBanner
        eyebrow="Reach Out"
        title={<>Get in <em className="italic text-[var(--gold-light)]">Touch</em></>}
        sub="Questions, collaborations, or just want to say hello — we'd love to hear from you."
      />

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16">

            {/* Left: contact info */}
            <div>
              <FadeIn>
                <Label>Contact</Label>
                <h2 className="font-display font-medium text-3xl lg:text-4xl text-[var(--text-1)] mt-2 mb-8">
                  Ways to reach us
                </h2>
              </FadeIn>

              <div className="space-y-4">
                {[
                  { icon: Mail, label: 'General Inquiries', value: 'uc.paso17@gmail.com', href: 'mailto:uc.paso17@gmail.com' },
                  { icon: Mail, label: 'Leadership', value: 'rosalepc@mail.uc.edu', href: 'mailto:rosalepc@mail.uc.edu' },
                  { icon: Instagram, label: 'Instagram', value: '@uc_paso', href: 'https://instagram.com/uc_paso' },
                ].map(({ icon: Icon, label, value, href }) => (
                  <FadeIn key={label} delay={0.05}>
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 glass glass-hover rounded-[var(--radius-lg)] p-4 group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-[var(--fog)] flex items-center justify-center flex-shrink-0 group-hover:bg-[rgba(201,160,32,0.1)] transition-colors">
                        <Icon size={15} className="text-[var(--text-3)] group-hover:text-[var(--gold)] transition-colors" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-[var(--text-4)] text-[10px] uppercase tracking-wider">{label}</p>
                        <p className="text-[var(--text-1)] text-sm font-medium group-hover:text-[var(--gold-light)] transition-colors">{value}</p>
                      </div>
                    </a>
                  </FadeIn>
                ))}
              </div>

              {/* Map placeholder */}
              <FadeIn delay={0.2}>
                <div className="mt-6 glass rounded-[var(--radius-lg)] overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--text-4)]">
                    <MapPin size={13} className="text-[var(--gold)]" strokeWidth={1.5} />
                    <span className="text-[var(--text-3)] text-xs">University of Cincinnati, OH</span>
                  </div>
                  {/*
                    TO EMBED A REAL MAP:
                    Replace the div below with a Google Maps embed:
                    <iframe
                      src="https://www.google.com/maps/embed?pb=...YOUR_EMBED_URL..."
                      width="100%" height="200" style={{border:0}} loading="lazy"
                    />
                  */}
                  <div className="relative h-40 bg-[var(--ink-50)] flex items-center justify-center">
                    <div className="text-center">
                      <MapPin size={20} className="text-[var(--text-4)] mx-auto mb-2" strokeWidth={1} />
                      <p className="text-[var(--text-4)] text-xs">University of Cincinnati</p>
                      <p className="text-[var(--text-4)] text-[10px]">Cincinnati, Ohio 45221</p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* GetInvolved CTA */}
              <FadeIn delay={0.25}>
                <div className="mt-6">
                  <Btn
                    href="https://getinvolved.uc.edu"
                    variant="outline"
                    size="md"
                    external
                    className="w-full justify-center"
                  >
                    Join PASO on GetInvolved UC
                    <ArrowUpRight size={13} />
                  </Btn>
                </div>
              </FadeIn>
            </div>

            {/* Right: contact form */}
            <FadeInSide from="right" delay={0.1}>
              <div className="glass rounded-[var(--radius-xl)] p-7 lg:p-9">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                    <div className="w-12 h-12 rounded-full bg-[rgba(201,160,32,0.1)] flex items-center justify-center">
                      <Send size={18} className="text-[var(--gold)]" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display font-medium text-2xl text-[var(--text-1)]">Message sent!</h3>
                    <p className="text-[var(--text-3)] text-sm max-w-xs">
                      Thanks for reaching out. A member of the PASO team will get back to you soon.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name:'', email:'', subject:'', message:'' }) }}
                      className="text-[var(--gold)] text-sm hover:text-[var(--gold-light)] transition-colors"
                    >
                      Send another
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="font-display font-medium text-2xl text-[var(--text-1)] mb-6">Send a Message</h3>
                    {/*
                      NOTE: This form currently shows a success state on submit.
                      To make it functional, integrate with:
                      - Formspree: https://formspree.io
                      - EmailJS: https://emailjs.com
                      - A Next.js API route
                      Replace handleSubmit() with your preferred handler.
                    */}
                    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-[var(--text-3)] text-xs uppercase tracking-wider mb-1.5">
                            Name
                          </label>
                          <input
                            id="name"
                            type="text"
                            required
                            value={form.name}
                            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                            placeholder="Your name"
                            className="w-full h-10 bg-[var(--fog)] border border-[var(--text-4)] rounded-[var(--radius)] px-3 text-sm text-[var(--text-1)] placeholder:text-[var(--text-4)] focus:outline-none focus:border-[rgba(201,160,32,0.4)] transition-colors"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-[var(--text-3)] text-xs uppercase tracking-wider mb-1.5">
                            Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            required
                            value={form.email}
                            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                            placeholder="your@email.com"
                            className="w-full h-10 bg-[var(--fog)] border border-[var(--text-4)] rounded-[var(--radius)] px-3 text-sm text-[var(--text-1)] placeholder:text-[var(--text-4)] focus:outline-none focus:border-[rgba(201,160,32,0.4)] transition-colors"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-[var(--text-3)] text-xs uppercase tracking-wider mb-1.5">
                          Subject
                        </label>
                        <input
                          id="subject"
                          type="text"
                          required
                          value={form.subject}
                          onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                          placeholder="What's this about?"
                          className="w-full h-10 bg-[var(--fog)] border border-[var(--text-4)] rounded-[var(--radius)] px-3 text-sm text-[var(--text-1)] placeholder:text-[var(--text-4)] focus:outline-none focus:border-[rgba(201,160,32,0.4)] transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-[var(--text-3)] text-xs uppercase tracking-wider mb-1.5">
                          Message
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={5}
                          value={form.message}
                          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                          placeholder="Your message..."
                          className="w-full bg-[var(--fog)] border border-[var(--text-4)] rounded-[var(--radius)] px-3 py-2.5 text-sm text-[var(--text-1)] placeholder:text-[var(--text-4)] focus:outline-none focus:border-[rgba(201,160,32,0.4)] transition-colors resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full h-11 rounded-full bg-[var(--gold)] text-[var(--ink)] text-sm font-bold hover:bg-[var(--gold-light)] transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                      >
                        Send Message
                        <Send size={13} strokeWidth={2} />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </FadeInSide>
          </div>
        </div>
      </section>
    </>
  )
}
