'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Menu, X, Mic, Car, Brain, LayoutDashboard, ChevronDown, Instagram, Linkedin, Send } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { BackgroundPathsOverlay } from '@/components/ui/background-paths'
import { Testimonial } from '@/components/ui/testimonial'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { LogoCloud } from '@/components/ui/logo-cloud-3'
import { PulseVoiceRecorder } from '@/components/ui/pulse-voice-recorder'
import { Tabs, type ITab } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
import { TextRevealByWord } from '@/components/ui/text-reveal-by-word'
import { Timeline, type TimelineEntry } from '@/components/ui/timeline'
import { CalendlyModal } from '@/components/ui/calendly-modal'
import TimeLine_01 from '@/components/ui/release-time-line'
import { Tooltip } from '@/components/ui/tooltip'
import { Features } from '@/components/ui/features-8'
import GalleryHoverCarousel from '@/components/ui/gallery-hover-carousel'
import { cn } from '@/lib/utils'

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
}

const HERO_DASHBOARD_TABS: ITab[] = [
  { title: 'Dashboard', value: 'main' },
  { title: 'Sound analytics', value: 'sound' },
  { title: 'Graphs', value: 'graphs' },
]
const HERO_DASHBOARD_IMAGES: Record<string, { src: string; alt: string }> = {
  main: { src: '/apple.png', alt: 'MantAI dashboard' },
  sound: { src: '/sound-dash-details.png', alt: 'Sound analytics - track your car noises' },
  graphs: { src: '/2-home-dash.png', alt: 'Analytics graphs' },
}

export function HeroSection() {
  const [calendlyOpen, setCalendlyOpen] = React.useState(false)
  const [heroDashboardTab, setHeroDashboardTab] = React.useState('main')
  return (
    <>
      <CalendlyModal open={calendlyOpen} onOpenChange={setCalendlyOpen} />
      <HeroHeader onGetStartedClick={() => setCalendlyOpen(true)} />

      <main className="overflow-x-hidden">
        <div
          aria-hidden
          className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
          <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        <section id="home" className="scroll-mt-24 h-screen">
          <div className="relative h-full">
            <BackgroundPathsOverlay className="-z-20 opacity-50" />
            <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
            <div className="mx-auto max-w-7xl px-6 flex flex-col justify-center h-full">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <AnimatedGroup variants={transitionVariants}>
                  <div className="bg-muted group mx-auto flex w-fit items-center gap-2 rounded-full border px-4 shadow-md shadow-black/5 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                    <span className="text-foreground font-medium">
                      Incorporated in Europe
                    </span>

                    <span className="text-foreground text-2xl font-medium">
                      🇪🇺
                    </span>

                  </div>
                  <h1
                    className="mt-8 max-w-4xl mx-auto text-balance font-semibold text-7xl md:text-8xl lg:mt-16 xl:text-[6rem]">
                    Automating the Unpredictable
                  </h1>
                  <p
                    className="mx-auto mt-8 max-w-2xl text-balance text-lg">
                    ASAI Labs develops state-of-the-art computer vision and predictive AI solutions to turn operational bottlenecks into automated, data-driven workflows.
                  </p>
                </AnimatedGroup>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                  <div
                    key={1}
                    className="bg-foreground/10 rounded-[14px] border p-0.5">
                    <Button
                      size="lg"
                      className="rounded-xl px-5 text-base"
                      asChild
                    >
                      <Link href="#projects">
                        <span className="text-nowrap">Explore our Projects</span>
                      </Link>
                    </Button>
                  </div>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="h-11 rounded-xl px-5">
                    <Link
                      href="#tech"
                    >
                      <span className="text-nowrap">Learn About Our Tech</span>
                    </Link>
                  </Button>
                </AnimatedGroup>
              </div>
            </div>
          </div>
        </section >
        <section className="bg-background pt-16">
          <div className="relative mx-auto max-w-3xl px-6">
            <h2 className="mb-5 text-center font-medium text-foreground text-xl tracking-tight md:text-3xl">
              <div className="flex flex-col space-y-2">
                <span className="">Trusted by Leaders</span>
              </div>
            </h2>
            <div className="mx-auto my-5 h-px max-w-sm bg-border [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />

            <LogoCloud logos={logos} />

            <div className="mt-5 h-px bg-border [mask-image:linear-gradient(to_right,transparent,black,transparent)]" />
          </div>
        </section>
        <TimeLine_01 />
        <FomoCtaSection onContactClick={() => setCalendlyOpen(true)} />
        <FaqSection onBookCallClick={() => setCalendlyOpen(true)} />
        <FooterSection />
      </main >
    </>
  )
}

function FomoCtaSection({ onContactClick }: { onContactClick: () => void }) {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <TextRevealByWord
          className="border-t border-border h-[85vh] md:h-[90vh]"
          text="Have a complex operational challenge? Our lab builds custom computer vision and predictive models for enterprise clients. Let's talk about your use case."
          footer={
            <div className="bg-foreground/10 rounded-[14px] border p-0.5">
              <Button size="lg" className="rounded-xl px-6 text-base" onClick={onContactClick}>
                <span className="text-nowrap">Get in Touch</span>
              </Button>
            </div>
          }
        />
      </div>
    </section>
  )
}

const FAQS = [
  {
    q: 'Do your solutions require custom hardware installations?',
    a: 'Rarely. We specialize in software-defined automation. Our computer vision and predictive platforms are designed to run on edge devices, standard smartphones, or integrate seamlessly with your existing infrastructure. Zero expensive retrofits required.',
  },
  {
    q: 'How do you handle data privacy and security?',
    a: 'Privacy by design is our baseline. Our vision models extract geometric and operational data—not personal identities. We utilize enterprise-grade encryption (AES-256), strict GDPR compliance, and process data without storing Personally Identifiable Information (PII).',
  },
  {
    q: 'Are these AI models designed to replace human workforces?',
    a: 'Our philosophy is augmentation, not replacement. We build tools that eliminate tedious, manual bottlenecks—whether that is counting retail inventory or logging fleet compliance—freeing your teams to focus on high-leverage, strategic work.',
  },
  {
    q: 'How does your AI differ from standard operational analytics?',
    a: 'Traditional dashboards tell you what happened yesterday. Our real-time vision systems and predictive models tell you what is happening right now, and what will happen tomorrow—closing the visibility gap between physical operations and digital oversight.',
  },
  {
    q: 'Can your vision models recognize our specific proprietary assets?',
    a: 'Yes. We train custom machine learning models tailored to your exact environment. Whether tracking logistics fleets, artisan retail inventory, or compliance documents, our models achieve surgical precision across diverse, unpredictable conditions.',
  },
  {
    q: 'Can your systems operate in chaotic or low-light environments?',
    a: 'Absolutely. We engineer our solutions for the real world, not just the laboratory. Our systems compensate for poor lighting, overlapping objects, and the beautiful chaos of active industrial or retail floors.',
  },
  {
    q: 'How quickly can an ASAI Labs solution be deployed?',
    a: 'We operate with the agility of a startup and the rigor of an enterprise lab. By leveraging our modular architecture and pre-trained foundation models, we can deploy production-ready pilots in weeks, not years.',
  },
  {
    q: 'Do you take on custom engineering projects for enterprise clients?',
    a: 'Yes. While we have a portfolio of ready-to-deploy platforms, our core strength is partnering with enterprise leaders to engineer bespoke AI solutions for their most complex operational bottlenecks. Get in touch to discuss your specific use case.',
  },
]

function FaqSection({ onBookCallClick }: { onBookCallClick?: () => void }) {
  return (
    <section id="faq" className="scroll-mt-24 bg-gray-50 pb-16 pt-4 md:pb-32 md:pt-6 dark:bg-transparent">
      <div className="mx-auto max-w-3xl lg:max-w-5xl px-6">
        <div className="mb-10 md:mb-14 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground tracking-tight">FAQ</h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            Everything you need to know before you install.
          </p>
        </div>

        <div className="grid gap-3">
          {FAQS.map((item) => (
            <Card key={item.q} className="border-zinc-300/80 bg-zinc-50/80 dark:border-white/10 dark:bg-white/5">
              <CardContent className="p-0">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5">
                    <span className="text-base md:text-lg font-semibold text-foreground">{item.q}</span>
                    <ChevronDown className="size-5 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-6 text-sm md:text-base text-muted-foreground leading-relaxed">
                    {item.a}
                  </div>
                </details>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  )
}


const ErrorTypeTabs = () => {
  const [selectedError, setSelectedError] = React.useState('wheel-hub-bearings');

  const errorTabs: ITab[] = [
    {
      title: 'Wheel Hub Bearings',
      value: 'wheel-hub-bearings',
      tooltip: 'Grinding or rumbling noise that increases with speed'
    },
    {
      title: 'Ball-Joints',
      value: 'ball-joints',
      tooltip: 'Clunking noise when turning or going over bumps'
    },
    {
      title: 'Tensioner Belt',
      value: 'tensioner-belt',
      tooltip: 'High-pitched squealing sound, especially on cold starts'
    },
    {
      title: 'Motor Bearings',
      value: 'motor-bearings',
      tooltip: 'Deep rumbling or grinding noise from the engine'
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Tabs
        selected={selectedError}
        setSelected={setSelectedError}
        tabs={errorTabs}
        variant="primary"
      />
      <div className="mt-8 md:mt-12">
        <PulseVoiceRecorder selectedErrorType={selectedError} />
      </div>
    </div>
  );
};

const HOW_IT_WORKS_TIMELINE: TimelineEntry[] = [
  {
    title: 'Step 1',
    content: (
      <>
        <h4 className="text-lg md:text-xl font-semibold text-black dark:text-white">
          Snap a quick photo
        </h4>
        <p className="mt-2 text-sm md:text-base text-black/80 dark:text-white/80">
          Your staff receives a gentle notification to take a picture of the display cases. No complex hardware installations or clunky scanning wands are required—just a quick photo using any smartphone or tablet.
        </p>
        <div className="mt-6">
          <img
            src="/phone-capture.png"
            alt="Employee taking a photo of a bakery counter"
            className="w-full max-w-3xl rounded-xl object-contain"
          />
        </div>
      </>
    ),
  },
  {
    title: 'Step 2',
    content: (
      <>
        <h4 className="text-lg md:text-xl font-semibold text-black dark:text-white">
          Custom vision AI processes the image
        </h4>
        <p className="mt-2 text-sm md:text-base text-black/80 dark:text-white/80">
          The images are instantly routed to our custom-trained Machine Learning vision model. Designed specifically for bakeries, it effortlessly recognizes overlapping artisan loaves, intricate pastries, and varying tray layouts.
        </p>
        <div className="mt-6">
          <img
            src="/ai-processing.png"
            alt="AI vision model identifying different types of bread"
            className="w-full max-w-3xl rounded-xl object-contain"
          />
        </div>
      </>
    ),
  },
  {
    title: 'Step 3',
    content: (
      <>
        <h4 className="text-lg md:text-xl font-semibold text-black dark:text-white">
          Extract precise fill ratios
        </h4>
        <p className="mt-2 text-sm md:text-base text-black/80 dark:text-white/80">
          The system analyzes the visual data to calculate exact fill ratios for every shelf and basket. It knows immediately what is fully stocked, what is running low, and what has sold out, with clinical precision.
        </p>
        <div className="mt-6">
          <img
            src="/fill-ratio.png"
            alt="Visual overlay showing percentage of counter fill ratios"
            className="w-full max-w-3xl rounded-xl object-contain"
          />
        </div>
      </>
    ),
  },
  {
    title: 'Step 4',
    content: (
      <>
        <h4 className="text-lg md:text-xl font-semibold text-black dark:text-white">
          Manage everything from a sleek dashboard
        </h4>
        <p className="mt-2 text-sm md:text-base text-black/80 dark:text-white/80">
          All extracted data is instantly aggregated into a centralized, minimalist dashboard. Monitor real-time availability, track sales velocity, and reduce end-of-day waste without ever doing a manual count.
        </p>
        <div className="mt-6">
          <img
            src="/test.png"
            alt="Minimalist SaaS dashboard showing bakery inventory analytics"
            className="w-full max-w-3xl rounded-xl object-contain"
          />
        </div>
      </>
    ),
  },
]

const menuItems = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Technology', href: '#savings' },
  { name: 'About Us', href: '#faq' },
  { name: 'Blog', href: '#faq' },
]

const logos = [
  {
    src: "/goraco.png",
    alt: "Goraco Polecam",
    href: "https://goraco-polecam.pl/"
  },
  {
    src: "/lsp.png",
    alt: "LSP Group",
    href: "https://lspgroup.pl"
  },
  {
    src: "/zwc.png",
    alt: "ZWC",
    href: "https://zerowasteconsulting.pl"
  },
  {
    src: "/enata.png",
    alt: "Enata Bread",
    href: "https://enatabread.pl/"
  },
  {
    src: "/cisowianka.png",
    alt: "Naleczow Zdroj",
    href: "https://naleczowzdroj.pl/"
  },
]

const HeroHeader = ({ onGetStartedClick }: { onGetStartedClick?: () => void }) => {
  const [menuState, setMenuState] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState('#home')

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      const sectionIds = ['home', 'how-it-works', 'savings', 'faq']
      let currentId = '#home'
      let minOffset = Number.POSITIVE_INFINITY

      sectionIds.forEach((id) => {
        const el = document.getElementById(id)
        if (!el) return
        const rect = el.getBoundingClientRect()
        const viewportOffset = Math.abs(rect.top - 96) // ~nav height offset

        if (viewportOffset < minOffset && rect.bottom > 96) {
          minOffset = viewportOffset
          currentId = `#${id}`
        }
      })

      setActiveSection(currentId)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <header>
      <nav
        data-state={menuState && 'active'}
        className="fixed z-20 w-full px-2 group">
        <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5')}>
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2">
                <Logo />
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                <Menu className="in-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      onClick={() => setActiveSection(item.href)}
                      className={cn(
                        'relative block rounded-full px-3 py-1 text-muted-foreground duration-150 hover:text-accent-foreground',
                        activeSection === item.href && 'text-foreground',
                      )}>
                      <span className="relative z-10">{item.name}</span>
                      {activeSection === item.href && (
                        <motion.div
                          layoutId="nav-lamp"
                          className="absolute inset-0 -z-0 w-full rounded-full bg-primary/5"
                          initial={false}
                          transition={{
                            type: 'spring',
                            stiffness: 320,
                            damping: 30,
                          }}
                        >
                          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 rounded-t-full">
                            <div className="absolute -left-2 -top-2 h-6 w-12 rounded-full bg-primary/10 blur-lg" />
                            <div className="absolute -top-2 h-4 w-12 rounded-full bg-primary/5 blur-xl" />
                            <div className="absolute left-2 top-0 h-4 w-4 rounded-full bg-primary/10 blur-md" />
                          </div>
                        </motion.div>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        onClick={() => {
                          setActiveSection(item.href)
                          setMenuState(false)
                        }}
                        className={cn(
                          'block duration-150 text-muted-foreground hover:text-accent-foreground',
                          activeSection === item.href && 'text-accent-foreground font-semibold',
                        )}>
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className={cn(isScrolled && 'lg:hidden')}>
                </Button>
                <Button
                  size="sm"
                  className={cn(isScrolled && 'lg:hidden')}
                  onClick={onGetStartedClick}>
                  <span>Contact Us</span>
                </Button>
                <Button
                  size="sm"
                  className={cn(isScrolled ? 'lg:inline-flex' : 'hidden')}
                  onClick={onGetStartedClick}>
                  <span>Contact Us</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

function FooterSection() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 text-zinc-50">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">Automate the unpredictable.</h2>
            <p className="mb-6 text-sm md:text-base text-zinc-400">
              Join our newsletter for the latest insights in enterprise AI, computer vision, and operational automation.
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 pr-12 text-sm text-zinc-50 placeholder:text-zinc-400 outline-none ring-0 transition focus:border-white/20"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-9 w-9 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Solutions</h3>
            <nav className="space-y-2 text-sm text-zinc-300">
              <Link href="https://expo.asailabs.com" className="block transition-colors hover:text-white">
                Exponata AI
              </Link>
              <Link href="#envista" className="block transition-colors hover:text-white">
                Envista AI
              </Link>
              <Link href="#fleet" className="block transition-colors hover:text-white">
                Fleet Inspection
              </Link>
              <Link href="https://dronepass.vercel.app" className="block transition-colors hover:text-white">
                MyCard
              </Link>
              <Link href="https://getmycard.eu" className="block transition-colors hover:text-white">
                DronePass
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <address className="space-y-2 text-sm not-italic text-zinc-300">
              <p>Enterprise Partnerships</p>
              <p>
                Email:{' '}
                <Link href="mailto:hello@asailabs.com" className="underline underline-offset-2">
                  hello@asailabs.com
                </Link>
              </p>
              <p>Support:{' '}
                <Link href="mailto:support@asailabs.com" className="underline underline-offset-2">
                  support@asailabs.com
                </Link>
              </p>
            </address>
          </div>

          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Follow ASAI Labs</h3>
            <div className="mb-6 flex flex-wrap gap-3">
              <Tooltip text="LinkedIn">
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="rounded-full border-white/10 bg-white/5 text-zinc-100 hover:bg-white/10 hover:text-white"
                >
                  <Link
                    href="https://www.linkedin.com/company/asailabs"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
              </Tooltip>
              <Tooltip text="Instagram">
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="rounded-full border-white/10 bg-white/5 text-zinc-100 hover:bg-white/10 hover:text-white"
                >
                  <Link href="https://www.instagram.com/asai_labs/" target="_blank" rel="noreferrer">
                    <Instagram className="h-4 w-4" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                </Button>
              </Tooltip>
            </div>
            <p className="text-sm text-zinc-400">
              Building state-of-the-art computer vision and predictive AI for the physical world.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center md:flex-row">
          <p className="text-sm text-zinc-400">© {new Date().getFullYear()} ASAI Labs. All rights reserved.</p>
          <nav className="flex flex-wrap justify-center gap-4 text-sm text-zinc-300">
            <Link href="#privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#terms" className="transition-colors hover:text-white">
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

const Logo = ({ className }: { className?: string }) => {
  return (
    <span className={cn('text-lg font-semibold tracking-tight', className)}>
      <img className="h-5"
        src="/logo.png"
      />
    </span>
  )
}
