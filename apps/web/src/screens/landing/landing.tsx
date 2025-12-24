import { Button } from '@shared/components'
import { ArrowRight, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'
import logoForDarkBg from '../../assets/images/LOGO_BG_BLACK.png'
import logoForLightBg from '../../assets/images/LOGO_BG_COLOR.png'
import { CONTACT_EMAIL, LOCATION, SOCIAL_LINKS } from './constants'

// Sections that have light backgrounds (cream)
const LIGHT_SECTIONS = ['manifesto', 'values']
// Sections that have colorful backgrounds (contact section)
const COLORFUL_SECTIONS = ['contact', 'services']

export function LandingPage() {
    return (
        <div className="landing-page bg-mahaus-navy min-h-screen overflow-x-hidden">
            <Navbar />
            <HeroSection />
            <ManifestoSection />
            <ServicesSection />
            <ValuesSection />
            <ProcessSection />
            <ContactSection />
            <Footer />
        </div>
    )
}

function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [isLightBg, setIsLightBg] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Intersection Observer to detect which section is visible at the top
    useEffect(() => {
        const sections = document.querySelectorAll('section[data-section]')
        if (sections.length === 0) return

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        const sectionId =
                            entry.target.getAttribute('data-section')
                        const isLight = sectionId
                            ? LIGHT_SECTIONS.includes(sectionId) ||
                              COLORFUL_SECTIONS.includes(sectionId)
                            : false
                        setIsLightBg(isLight)
                    }
                }
            },
            {
                rootMargin: '-80px 0px -80% 0px', // Check at the navbar position
                threshold: 0,
            },
        )

        for (const section of sections) {
            observer.observe(section)
        }

        return () => observer.disconnect()
    }, [])

    // Dynamic text colors based on background
    const textColor = isLightBg ? 'text-mahaus-navy' : 'text-mahaus-cream'
    const textColorMuted = isLightBg
        ? 'text-mahaus-navy/90'
        : 'text-mahaus-cream/80'
    const bgColor = scrolled
        ? isLightBg
            ? 'bg-mahaus-cream/95 backdrop-blur-md shadow-sm'
            : 'bg-mahaus-navy/95 backdrop-blur-md shadow-lg'
        : isLightBg
            ? 'bg-mahaus-cream/40 backdrop-blur-sm'
            : 'bg-mahaus-navy/20 backdrop-blur-sm'

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bgColor}`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <a href="/" className="group flex items-center gap-3">
                        <img
                            src={isLightBg ? logoForLightBg : logoForDarkBg}
                            alt="MAHAUS"
                            className="h-12 w-auto transition-all duration-300"
                        />
                    </a>

                    <div className="hidden md:flex items-center gap-1">
                        {['Services', 'Process', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className={`px-4 py-2 ${textColorMuted} hover:${textColor} transition-colors text-sm uppercase tracking-widest`}
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    <Button
                        className="bg-mahaus-red hover:bg-mahaus-yellow hover:text-mahaus-navy text-white transition-all duration-300"
                        asChild
                    >
                        <a href="#contact">Start Project</a>
                    </Button>
                </div>
            </div>
        </nav>
    )
}

function HeroSection() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            })
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <section
            data-section="hero"
            className="relative min-h-screen flex items-center overflow-hidden"
        >
            {/* Geometric Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Large circle - top right */}
                <div
                    className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full border-[3px] border-mahaus-blue/30"
                    style={{
                        transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
                    }}
                />
                {/* Filled circle */}
                <div
                    className="absolute top-1/4 right-1/4 w-48 h-48 rounded-full bg-mahaus-red/20"
                    style={{
                        transform: `translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px)`,
                    }}
                />
                {/* Yellow accent */}
                <div
                    className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-mahaus-yellow/30 rotate-45"
                    style={{
                        transform: `rotate(45deg) translate(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px)`,
                    }}
                />
                {/* Blue rectangle */}
                <div
                    className="absolute top-1/2 left-1/4 w-64 h-2 bg-mahaus-blue/40"
                    style={{ transform: `translateX(${mousePos.x * -0.4}px)` }}
                />
                {/* Grid lines */}
                <div className="absolute inset-0 opacity-5">
                    <div
                        className="h-full w-full"
                        style={{
                            backgroundImage: `
                            linear-gradient(to right, #e9d5b6 1px, transparent 1px),
                            linear-gradient(to bottom, #e9d5b6 1px, transparent 1px)
                        `,
                            backgroundSize: '80px 80px',
                        }}
                    />
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                    {/* Left content */}
                    <div className="lg:col-span-7 space-y-8">
                        {/* Overline with geometric accent */}
                        <div className="flex items-center gap-4">
                            <div className="flex gap-1">
                                <div className="w-3 h-3 bg-mahaus-red rounded-full" />
                                <div className="w-3 h-3 bg-mahaus-yellow rounded-full" />
                                <div className="w-3 h-3 bg-mahaus-blue rounded-full" />
                            </div>
                            <span className="text-mahaus-cream/60 uppercase tracking-[0.3em] text-xs">
                                Strategic Creative Agency
                            </span>
                        </div>

                        {/* Main headline - Bauhaus-style typography */}
                        <div className="space-y-2">
                            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-mahaus-cream leading-[0.9] tracking-tight">
                                We Build
                            </h1>
                            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight">
                                <span className="text-mahaus-yellow">
                                    Brands
                                </span>
                                <span className="text-mahaus-cream"> That</span>
                            </h1>
                            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight">
                                <span className="text-mahaus-red">Move</span>
                                <span className="text-mahaus-cream">
                                    {' '}
                                    People
                                </span>
                            </h1>
                        </div>

                        {/* Subtext with geometric divider */}
                        <div className="flex items-start gap-6 max-w-xl">
                            <div className="w-1 h-20 bg-gradient-to-b from-mahaus-yellow to-mahaus-red flex-shrink-0 mt-1" />
                            <p className="text-mahaus-gray text-lg leading-relaxed">
                                Disruptive creativity meets strategic execution.
                                We transform ambitious brands into global
                                movements.
                            </p>
                        </div>

                        {/* CTA */}
                        <div className="flex items-center gap-6 pt-4">
                            <Button
                                size="lg"
                                className="bg-mahaus-red hover:bg-mahaus-yellow hover:text-mahaus-navy text-white px-8 h-14 text-base transition-all duration-300 group whitespace-nowrap"
                                asChild
                            >
                                <a href="#contact" className="flex items-center justify-center gap-2">
                                    Start Your Project
                                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </a>
                            </Button>
                            <a
                                href="#services"
                                className="text-mahaus-cream/60 hover:text-mahaus-cream transition-colors uppercase tracking-widest text-sm"
                            >
                                Explore
                            </a>
                        </div>
                    </div>

                    {/* Right - Logo with dynamic effect */}
                    <div className="lg:col-span-5 relative h-[500px] hidden lg:flex items-center justify-center">
                        <div
                            className="relative w-full max-w-md transition-transform duration-300 ease-out"
                            style={{
                                transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
                            }}
                        >
                            <img
                                src={logoForDarkBg}
                                alt="MAHAUS"
                                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                                style={{
                                    transform: `perspective(1000px) rotateX(${-mousePos.y * 0.5}deg) rotateY(${mousePos.x * 0.5}deg)`,
                                }}
                            />
                            {/* Decorative glow background */}
                            <div className="absolute -inset-20 bg-mahaus-blue/10 blur-[100px] -z-10 rounded-full" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                <div className="w-px h-16 bg-gradient-to-b from-transparent to-mahaus-cream/30" />
                <div className="w-2 h-2 bg-mahaus-cream/30 rounded-full animate-pulse" />
            </div>
        </section>
    )
}

function ManifestoSection() {
    return (
        <section
            data-section="manifesto"
            className="relative py-32 bg-mahaus-cream overflow-hidden"
        >
            {/* Geometric accents */}
            <div className="absolute top-0 left-0 w-1/3 h-2 bg-mahaus-red" />
            <div className="absolute top-0 left-1/3 w-1/3 h-2 bg-mahaus-yellow" />
            <div className="absolute top-0 left-2/3 w-1/3 h-2 bg-mahaus-blue" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left - Large statement */}
                    <div className="relative">
                        <div className="absolute -left-4 top-0 w-1 h-full bg-mahaus-navy" />
                        <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-bold text-mahaus-navy leading-tight">
                            &ldquo;Lasting influence is created where{' '}
                            <span className="text-mahaus-red">strategy</span>,{' '}
                            <span className="text-mahaus-blue">creativity</span>
                            , and{' '}
                            <span className="text-mahaus-yellow inline-block bg-mahaus-navy px-2">
                                people
                            </span>{' '}
                            truly connect.&rdquo;
                        </blockquote>
                    </div>

                    {/* Right - Description with geometric elements */}
                    <div className="relative">
                        <div className="absolute -top-8 -right-8 w-32 h-32 border-4 border-mahaus-navy/10 rounded-full" />
                        <div className="relative z-10 space-y-6">
                            <p className="text-lg text-mahaus-navy/80 leading-relaxed">
                                We are the <strong>catalyst</strong> for
                                ambitious brands seeking global impact. We
                                combine young energy with proven experience,
                                transforming potential into measurable revenue
                                and genuine communities.
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-mahaus-navy flex items-center justify-center">
                                    <ArrowRight className="w-6 h-6 text-mahaus-cream" />
                                </div>
                                <span className="text-mahaus-navy font-bold uppercase tracking-wider text-sm">
                                    Your Growth Partner
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const services = [
    {
        id: '01',
        title: 'Growth',
        subtitle: '& Conversion',
        description:
            'Drive traffic, engagement, and revenue through strategic digital campaigns.',
        items: [
            'Marketing Automation',
            'Paid Media Strategy',
            'Social Management',
            'Analytics & CRO',
        ],
        color: 'mahaus-red',
        shape: 'circle',
    },
    {
        id: '02',
        title: 'Digital',
        subtitle: 'Infrastructure',
        description:
            'Build the platforms and tools needed to scale your business globally.',
        items: [
            'Websites & Apps',
            'E-commerce',
            'Landing Pages',
            'Technical Setup',
        ],
        color: 'mahaus-blue',
        shape: 'square',
    },
    {
        id: '03',
        title: 'Brand',
        subtitle: '& Content',
        description:
            'Create distinctive identities and compelling content that resonates.',
        items: [
            'Brand Strategy',
            'Visual Identity',
            'Video & Photo',
            'Content Creation',
        ],
        color: 'mahaus-yellow',
        shape: 'triangle',
    },
]

function ServicesSection() {
    return (
        <section
            id="services"
            data-section="services"
            className="relative py-32 bg-mahaus-red scroll-mt-20"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section header */}
                <div className="flex items-end justify-between mb-20">
                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-8 h-8 bg-mahaus-navy" />
                            <div className="w-8 h-8 bg-mahaus-yellow rounded-full" />
                            <div className="w-8 h-8 bg-mahaus-blue" />
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-mahaus-cream">
                            What We Do
                        </h2>
                    </div>
                    <div className="hidden lg:block text-right">
                        <span className="text-mahaus-cream/40 text-sm uppercase tracking-widest">
                            Services
                        </span>
                        <div className="w-32 h-px bg-mahaus-cream/20 mt-2" />
                    </div>
                </div>

                {/* Services grid - Bauhaus-inspired asymmetric layout */}
                <div className="space-y-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

function ServiceCard({
    service,
    index,
}: {
    service: (typeof services)[0]
    index: number
}) {
    const isEven = index % 2 === 0

    return (
        <div
            className={`group relative grid lg:grid-cols-12 gap-6 items-stretch ${isEven ? '' : 'lg:text-right'}`}
        >
            {/* Number */}
            <div
                className={`lg:col-span-1 ${isEven ? 'lg:order-1' : 'lg:order-3'}`}
            >
                <span className={`text-8xl font-bold text-mahaus-navy/10 group-hover:text-mahaus-cream/20 transition-colors`}>
                    {service.id}
                </span>
            </div>

            {/* Content card */}
            <div
                className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-2'}`}
            >
                <div className="relative h-full bg-mahaus-navy/40 backdrop-blur-sm border border-mahaus-cream/10 p-8 lg:p-12 group-hover:border-mahaus-cream/30 transition-all duration-500">
                    {/* Shape accent */}
                    <div
                        className={`absolute top-8 ${isEven ? 'right-8' : 'left-8'}`}
                    >
                        {service.shape === 'circle' && (
                            <div
                                className={`w-12 h-12 rounded-full border-4 border-mahaus-yellow`}
                            />
                        )}
                        {service.shape === 'square' && (
                            <div
                                className={`w-12 h-12 border-4 border-mahaus-blue rotate-12`}
                            />
                        )}
                        {service.shape === 'triangle' && (
                            <div className="w-0 h-0 border-l-[24px] border-r-[24px] border-b-[42px] border-l-transparent border-r-transparent border-b-mahaus-cream" />
                        )}
                    </div>

                    <div
                        className={`space-y-6 ${isEven ? '' : 'lg:text-left'}`}
                    >
                        <div>
                            <h3 className="text-3xl lg:text-4xl font-bold text-mahaus-cream">
                                {service.title}
                            </h3>
                            <h3
                                className={`text-3xl lg:text-4xl font-bold text-mahaus-yellow`}
                            >
                                {service.subtitle}
                            </h3>
                        </div>

                        <p className="text-mahaus-cream/70 max-w-md">
                            {service.description}
                        </p>

                        <ul className="flex flex-wrap gap-3">
                            {service.items.map((item) => (
                                <li
                                    key={item}
                                    className="px-4 py-2 bg-mahaus-cream/10 text-mahaus-cream/80 text-sm font-medium border border-mahaus-cream/5"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Visual block */}
            <div
                className={`lg:col-span-4 ${isEven ? 'lg:order-3' : 'lg:order-1'} hidden lg:block`}
            >
                <div
                    className={`h-full bg-mahaus-navy/20 relative overflow-hidden group-hover:bg-mahaus-navy/30 transition-colors duration-500`}
                >
                    <div className={`absolute inset-0 bg-${service.color}/5`} />
                    {/* Geometric pattern */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        {service.shape === 'circle' && (
                            <div
                                className={`w-48 h-48 rounded-full bg-mahaus-yellow/20 group-hover:scale-110 transition-transform duration-500`}
                            />
                        )}
                        {service.shape === 'square' && (
                            <div
                                className={`w-48 h-48 bg-mahaus-blue/20 rotate-45 group-hover:rotate-[60deg] transition-transform duration-500`}
                            />
                        )}
                        {service.shape === 'triangle' && (
                            <div className="w-0 h-0 border-l-[96px] border-r-[96px] border-b-[166px] border-l-transparent border-r-transparent border-b-mahaus-cream/20 group-hover:scale-110 transition-transform duration-500" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

const values = [
    { word: 'Agility', color: 'mahaus-red' },
    { word: 'Experience', color: 'mahaus-blue' },
    { word: 'Creativity', color: 'mahaus-yellow' },
    { word: 'Quality', color: 'mahaus-red' },
    { word: 'Community', color: 'mahaus-blue' },
]

function ValuesSection() {
    return (
        <section
            data-section="values"
            className="relative py-32 bg-mahaus-cream overflow-hidden"
        >
            {/* Background geometric elements */}
            <div className="absolute top-20 left-20 w-64 h-64 border-2 border-mahaus-navy/5 rounded-full" />
            <div className="absolute bottom-20 right-20 w-48 h-48 bg-mahaus-navy/5 rotate-45" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="w-8 h-8 bg-mahaus-red rounded-full" />
                        <div className="w-8 h-8 bg-mahaus-yellow" />
                        <div className="w-0 h-0 border-l-[16px] border-r-[16px] border-b-[28px] border-l-transparent border-r-transparent border-b-mahaus-blue" />
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-mahaus-navy mb-6">
                        Core Values
                    </h2>
                </div>

                {/* Values as large words */}
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                    {values.map((value, index) => (
                        <div key={value.word} className="group relative">
                            <span
                                className={`text-4xl sm:text-5xl lg:text-7xl font-bold text-mahaus-navy opacity-40 hover:opacity-100 transition-opacity cursor-default`}
                            >
                                {value.word}
                            </span>
                            {index < values.length - 1 && (
                                <span
                                    className={`text-4xl sm:text-5xl lg:text-7xl font-bold text-${value.color} mx-2 hidden sm:inline`}
                                >
                                    /
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const processSteps = [
    { num: '01', title: 'Discover', desc: 'Understand your brand DNA' },
    { num: '02', title: 'Strategize', desc: 'Define growth paths' },
    { num: '03', title: 'Create', desc: 'Build distinctive assets' },
    { num: '04', title: 'Launch', desc: 'Execute with precision' },
    { num: '05', title: 'Optimize', desc: 'Measure and improve' },
]

function ProcessSection() {
    return (
        <section
            id="process"
            data-section="process"
            className="relative py-32 bg-mahaus-navy scroll-mt-20"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left - Title */}
                    <div className="lg:sticky lg:top-32 lg:h-fit">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-8 h-8 bg-mahaus-red" />
                            <div className="w-8 h-8 bg-mahaus-yellow rounded-full" />
                            <div className="w-0 h-0 border-l-[16px] border-r-[16px] border-b-[28px] border-l-transparent border-r-transparent border-b-mahaus-blue" />
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-mahaus-cream mb-6">
                            How We{' '}
                            <span className="text-mahaus-yellow">Work</span>
                        </h2>
                        <p className="text-mahaus-gray text-lg max-w-md">
                            A proven methodology that transforms brand potential
                            into measurable results, step by step.
                        </p>
                    </div>

                    {/* Right - Steps */}
                    <div className="space-y-0">
                        {processSteps.map((step) => (
                            <div
                                key={step.num}
                                className="group relative border-l-2 border-mahaus-cream/10 pl-8 py-8 hover:border-mahaus-yellow transition-colors"
                            >
                                {/* Step indicator */}
                                <div className="absolute left-0 top-8 w-4 h-4 -translate-x-[9px] bg-mahaus-navy border-2 border-mahaus-cream/20 group-hover:border-mahaus-yellow group-hover:bg-mahaus-yellow transition-all" />

                                <div className="flex items-start gap-6">
                                    <span className="text-5xl font-bold text-mahaus-cream/10 group-hover:text-mahaus-yellow/20 transition-colors">
                                        {step.num}
                                    </span>
                                    <div>
                                        <h3 className="text-2xl font-bold text-mahaus-cream mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-mahaus-gray">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

function ContactSection() {
    return (
        <section
            id="contact"
            data-section="contact"
            className="relative py-32 overflow-hidden scroll-mt-20"
        >
            {/* Background - Geometric composition */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-mahaus-red" />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-mahaus-yellow" />
                <div className="absolute bottom-0 left-1/4 w-1/4 h-1/2 bg-mahaus-blue" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                <div className="bg-mahaus-navy p-12 lg:p-20">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-mahaus-cream mb-6">
                            Ready to{' '}
                            <span className="text-mahaus-yellow">Build</span>{' '}
                            Something?
                        </h2>
                        <p className="text-mahaus-gray text-lg mb-8">
                            Let&apos;s discuss how we can transform your brand
                            into a movement. We&apos;re selective about our
                            partnerships because your success is our reputation.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                size="lg"
                                className="bg-mahaus-yellow text-mahaus-navy hover:bg-mahaus-cream px-8 h-14 text-base font-bold"
                                asChild
                            >
                                <a
                                    href={`mailto:${CONTACT_EMAIL}`}
                                    className="flex items-center justify-center whitespace-nowrap"
                                >
                                    <Mail className="mr-2 w-5 h-5" />
                                    {CONTACT_EMAIL}
                                </a>
                            </Button>
                        </div>

                        <div className="mt-12 pt-8 border-t border-mahaus-cream/10">
                            <p className="text-mahaus-cream/40 text-sm uppercase tracking-widest">
                                Based in {LOCATION} — Working Globally
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function Footer() {
    return (
        <footer className="py-8 bg-mahaus-navy border-t border-mahaus-cream/10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-6">
                        <a href="/" className="group flex items-center gap-3">
                            <img
                                src={logoForDarkBg}
                                alt="MAHAUS"
                                className="h-8 w-auto opacity-80 group-hover:opacity-100 transition-opacity"
                            />
                        </a>
                        <span className="text-mahaus-cream/40 text-sm">
                            &copy; {new Date().getFullYear()} MAHAUS
                        </span>
                    </div>

                    <div className="flex items-center gap-6">
                        <a
                            href={SOCIAL_LINKS.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-mahaus-cream/40 hover:text-mahaus-cream transition-colors text-sm uppercase tracking-widest"
                        >
                            Instagram
                        </a>
                        <a
                            href={SOCIAL_LINKS.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-mahaus-cream/40 hover:text-mahaus-cream transition-colors text-sm uppercase tracking-widest"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
