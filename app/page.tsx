'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import {
  achievements,
  experience,
  personalInfo,
  publications,
  skills,
} from './data/content'

function ArrowUpRight() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M8 7h9v9" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="m3 7 7.9 5.26a2 2 0 0 0 2.2 0L21 7M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 10c0 4.5-8 11-8 11S4 14.5 4 10a8 8 0 1 1 16 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.61-3.37-1.18-3.37-1.18-.46-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.68-.1-.26-.45-1.28.1-2.65 0 0 .84-.27 2.75 1.02A9.57 9.57 0 0 1 12 6.84c.85 0 1.7.11 2.5.34 1.91-1.3 2.75-1.03 2.75-1.03.54 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.69-4.57 4.94.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  )
}

function ChatWidget() {
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    const handler = () => setAuthenticated(true)
    document.addEventListener('agent-authenticated', handler)
    return () => document.removeEventListener('agent-authenticated', handler)
  }, [])

  return (
    <div className="fixed bottom-5 right-5 z-50 w-80 rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/10">
      <div id="auth-panel" className="p-4 text-sm text-slate-600" style={{ display: authenticated ? 'none' : 'block' }}>
        <p>Please authenticate using a standard Google profile to authorize Gemini processing quotas:</p>
        <button className="my-custom-btn mt-3 inline-flex items-center gap-2 rounded-lg bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200" onClick={() => (window as any).triggerRecruiterLogin?.()}>Sign In with Google</button>
      </div>
      <div id="custom-chat-window" className="h-96 overflow-y-auto border-t border-slate-200 p-3" />
      <div className="flex gap-2 border-t border-slate-200 p-3">
        <input type="text" id="user-input-node" placeholder="Ask something..." className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-cyan-400" />
        <button className="rounded-lg bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800" onClick={() => {
          const input = document.getElementById('user-input-node') as HTMLInputElement
          const query = input?.value.trim()
          if (query) { (window as any).sendMessageToAgent?.(query); input.value = '' }
        }}>Send</button>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-cyan-200">
      <div className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(148,163,184,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.12)_1px,transparent_1px)] [background-size:46px_46px]" />
        <div className="absolute -right-28 -top-32 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
        <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-5 py-6 sm:px-8">
          <a href="#top" className="text-sm font-semibold tracking-tight text-white">MB<span className="text-cyan-300">.</span></a>
          <div className="flex items-center gap-5 text-sm text-slate-300">
            <a href="#experience" className="transition hover:text-white">Experience</a>
            <a href="#work" className="transition hover:text-white">Work</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </div>
        </nav>

        <section id="top" className="relative mx-auto grid max-w-6xl gap-10 px-5 pb-20 pt-10 sm:px-8 sm:pb-28 md:grid-cols-[1fr_auto] md:items-center">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Machine Learning Engineer · Software Developer</p>
            <h1 className="text-5xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">{personalInfo.name}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">{personalInfo.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <span className="inline-flex items-center gap-2 text-slate-300"><PinIcon />{personalInfo.location}</span>
              <span className="text-slate-600">/</span>
              <span className="font-medium text-cyan-200">Open to impactful engineering opportunities</span>
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center gap-2 rounded-lg bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200">Get in touch <ArrowUpRight /></a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-white/10"><LinkedInIcon /> LinkedIn</a>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-white/10"><GitHubIcon /> GitHub</a>
              <a href={personalInfo.resume} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-white/10">Resume <ArrowUpRight /></a>
            </div>
          </div>
          <div className="mx-auto md:mx-0">
            <div className="relative h-44 w-44 rounded-2xl border border-white/15 bg-slate-800 p-1 shadow-2xl shadow-cyan-950/60 sm:h-52 sm:w-52">
              <Image src="/profile-photo.jpeg" alt="Manthan Bhala" fill sizes="208px" className="rounded-xl object-cover" priority />
            </div>
          </div>
        </section>
      </div>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-[1.2fr_.8fr] md:py-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">Profile</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-4xl">Applied AI that ships.</h2>
          <div className="mt-6 max-w-2xl space-y-4 text-[1.05rem] leading-8 text-slate-600">
            {personalInfo.summary.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
        <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold text-slate-950">What I work on</p>
          <ul className="mt-5 space-y-4">
            <li className="border-l-2 border-cyan-400 pl-4 text-sm leading-6 text-slate-600"><span className="block font-semibold text-slate-900">Search & retrieval</span>Hybrid lexical-semantic discovery systems.</li>
            <li className="border-l-2 border-cyan-400 pl-4 text-sm leading-6 text-slate-600"><span className="block font-semibold text-slate-900">Ranking & recommendations</span>Personalized experiences that lift conversion.</li>
            <li className="border-l-2 border-cyan-400 pl-4 text-sm leading-6 text-slate-600"><span className="block font-semibold text-slate-900">Production ML</span>Practical modeling, evaluation, and iteration.</li>
          </ul>
        </aside>
      </section>

      <section id="skills" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">Capabilities</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">Technical toolkit</h2>
          <div className="mt-9 grid gap-5 md:grid-cols-2">
            {Object.entries(skills).map(([category, items]) => (
              <article key={category} className="rounded-xl border border-slate-200 p-6">
                <h3 className="font-semibold text-slate-950">{category}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((skill) => <span key={skill} className="rounded-md bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700">{skill}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">Experience</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">Building systems with business impact.</h2>
        <div className="mt-9 space-y-5">
          {experience.map((role) => (
            <article key={`${role.company}-${role.title}`} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex flex-col justify-between gap-4 sm:flex-row">
                <div>
                  <h3 className="text-xl font-semibold text-slate-950">{role.title}</h3>
                  <p className="mt-1 font-medium text-cyan-700">{role.company}</p>
                  <p className="mt-2 text-sm text-slate-500">{role.location}</p>
                </div>
                <p className="shrink-0 text-sm font-medium text-slate-500">{role.period}</p>
              </div>
              <ul className="mt-6 space-y-3 border-t border-slate-100 pt-6 text-slate-600">
                {role.responsibilities.map((item) => <li key={item} className="flex gap-3 leading-7"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">Measured impact</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">Work designed to move real metrics.</h2>
              <div className="mt-8 space-y-4">
                {achievements.map((achievement) => <p key={achievement} className="rounded-xl border border-slate-800 bg-white/5 p-5 text-base leading-7 text-slate-200">{achievement}</p>)}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">Selected intellectual property</p>
              <div className="mt-8 divide-y divide-slate-800 border-y border-slate-800">
                {publications.map((publication) => (
                  <article key={publication.name} className="py-5">
                    <p className="text-sm font-semibold text-cyan-200">{publication.name}</p>
                    <p className="mt-2 leading-7 text-slate-300">{publication.level}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
        <div className="rounded-2xl bg-cyan-100 px-6 py-10 sm:px-10 sm:py-12">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-800">Let&apos;s connect</p>
          <div className="mt-3 flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-4xl">Interested in building useful AI together?</h2>
              <p className="mt-3 text-slate-600">I&apos;m based in {personalInfo.location} and welcome relevant opportunities.</p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"><MailIcon /> Email me</a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-cyan-800/30 bg-white/60 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white"><LinkedInIcon /> LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 px-5 py-7 text-center text-sm text-slate-500">© {new Date().getFullYear()} {personalInfo.name}</footer>
      <ChatWidget />
    </main>
  )
}
