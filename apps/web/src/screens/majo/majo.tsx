import { Button } from '@shared/components'
import {
    ArrowRight,
    Mail,
    Instagram,
    Linkedin,
    ExternalLink,
    Play,
    Sparkles,
} from 'lucide-react'
import { useEffect, useState, useRef } from 'react'
import logoForDarkBg from '../../assets/images/LOGO_BG_BLACK.png'
import logoForLightBg from '../../assets/images/LOGO_BG_COLOR.png'
import {
    CONTACT_EMAIL,
    LOCATION,
    SOCIAL_LINKS,
    portfolioItems,
    services,
    contactBg,
} from './constants'

// Sections that have light backgrounds (cream)
const LIGHT_SECTIONS = ['services']
// Sections that have colorful backgrounds
const COLORFUL_SECTIONS = ['contact']

export function MajoPage() {
    return (
        <div className="majo-page bg-mahaus-navy min-h-screen overflow-x-hidden">
            <Navbar />
            <HeroSection />
            <ServicesSection />
            <PortfolioSection />
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
                rootMargin: '-80px 0px -80% 0px',
                threshold: 0,
            },
        )

        for (const section of sections) {
            observer.observe(section)
        }

        return () => observer.disconnect()
    }, [])

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
                        {['Services', 'Work', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className={`px-4 py-2 ${textColorMuted} hover:text-mahaus-yellow transition-colors text-sm uppercase tracking-widest`}
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    <Button
                        className="bg-mahaus-red hover:bg-mahaus-yellow hover:text-mahaus-navy text-white transition-all duration-300"
                        asChild
                    >
                        <a href="#contact">Let's Talk</a>
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
            {/* Dynamic background */}
            <div className="absolute inset-0">
                <div
                    className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full border-[3px] border-mahaus-blue/20"
                    style={{
                        transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
                    }}
                />
                <div
                    className="absolute top-1/4 right-1/4 w-48 h-48 rounded-full bg-mahaus-red/10"
                    style={{
                        transform: `translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px)`,
                    }}
                />
                <div
                    className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-mahaus-yellow/20 rotate-45"
                    style={{
                        transform: `rotate(45deg) translate(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px)`,
                    }}
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Portrait - shows first on mobile */}
                    <div className="lg:col-span-5 lg:order-2 flex justify-center lg:justify-end">
                        <div
                            className="relative transition-transform duration-300 ease-out"
                            style={{
                                transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`,
                            }}
                        >
                            {/* Geometric accents */}
                            <div
                                className="absolute -top-6 -left-6 w-48 lg:w-72 h-48 lg:h-72 bg-mahaus-yellow/30 rounded-full blur-sm"
                                style={{
                                    transform: `translate(${mousePos.x * -0.2}px, ${mousePos.y * -0.2}px)`,
                                }}
                            />
                            <div
                                className="absolute -bottom-4 -right-4 w-32 lg:w-48 h-32 lg:h-48 bg-mahaus-red/40"
                                style={{
                                    transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)`,
                                }}
                            />

                            {/* Main portrait */}
                            <div className="relative z-10">
                                <div className="absolute -left-3 top-8 w-1.5 h-24 bg-mahaus-yellow" />
                                <div className="relative overflow-hidden border-4 border-mahaus-cream/10">
                                    <img
                                        src={contactBg}
                                        alt="Maria Jose"
                                        className="w-64 h-80 lg:w-80 lg:h-96 object-cover object-top"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-mahaus-navy/40 via-transparent to-transparent" />
                                </div>
                                <div className="absolute -bottom-2 left-4 flex gap-1.5">
                                    <div className="w-4 h-4 bg-mahaus-red" />
                                    <div className="w-4 h-4 bg-mahaus-yellow rounded-full" />
                                    <div className="w-4 h-4 bg-mahaus-blue" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-7 lg:order-1 space-y-6 lg:space-y-8 text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start gap-3">
                            <Sparkles className="w-4 h-4 text-mahaus-yellow" />
                            <span className="text-mahaus-cream/50 uppercase tracking-[0.2em] text-xs">
                                Social Media Strategist
                            </span>
                        </div>

                        <div className="space-y-1">
                            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-mahaus-cream leading-[0.95]">
                                Hi, I'm{' '}
                                <span className="text-mahaus-yellow">Majo</span>
                            </h1>
                            <p className="text-xl sm:text-2xl lg:text-3xl text-mahaus-cream/70 font-light">
                                I help brands{' '}
                                <span className="text-mahaus-red font-medium">
                                    connect
                                </span>
                                ,{' '}
                                <span className="text-mahaus-blue font-medium">
                                    grow
                                </span>
                                , and{' '}
                                <span className="text-mahaus-yellow font-medium">
                                    thrive
                                </span>{' '}
                                online.
                            </p>
                        </div>

                        <p className="text-mahaus-gray text-base lg:text-lg max-w-lg mx-auto lg:mx-0">
                            From strategy to execution—content creation,
                            community building, and digital branding that
                            delivers real results.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                            <Button
                                size="lg"
                                className="bg-mahaus-yellow text-mahaus-navy hover:bg-mahaus-cream px-8 h-14 text-base font-bold transition-all duration-300 group w-full sm:w-auto"
                                asChild
                            >
                                <a
                                    href="#work"
                                    className="flex items-center justify-center gap-2"
                                >
                                    See My Work
                                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </a>
                            </Button>
                            <a
                                href="#contact"
                                className="text-mahaus-cream/50 hover:text-mahaus-yellow transition-colors text-sm"
                            >
                                or let's chat →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function ServicesSection() {
    return (
        <section
            id="services"
            data-section="services"
            className="relative py-24 lg:py-32 bg-mahaus-cream overflow-hidden scroll-mt-20"
        >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 flex">
                <div className="flex-1 bg-mahaus-red" />
                <div className="flex-1 bg-mahaus-yellow" />
                <div className="flex-1 bg-mahaus-blue" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-mahaus-navy mb-4">
                        What I Do
                    </h2>
                    <p className="text-mahaus-navy/60 max-w-2xl mx-auto">
                        End-to-end social media solutions tailored to your
                        brand's unique voice and goals.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => {
                        const colors = [
                            'bg-mahaus-red',
                            'bg-mahaus-yellow',
                            'bg-mahaus-blue',
                            'bg-mahaus-navy',
                        ]
                        const shapes = [
                            'rounded-full',
                            '',
                            'rounded-full border-4 border-current bg-transparent',
                            'rotate-45',
                        ]
                        return (
                            <div
                                key={service.title}
                                className="group relative bg-white p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <div
                                    className={`w-12 h-12 ${colors[index]} ${shapes[index]} mb-6 transition-transform group-hover:scale-110`}
                                    style={
                                        index === 2
                                            ? {
                                                  borderColor:
                                                      'rgb(62, 108, 169)',
                                              }
                                            : {}
                                    }
                                />
                                <h3 className="text-lg font-bold text-mahaus-navy mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-mahaus-navy/60 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

function PortfolioSection() {
    return (
        <section
            id="work"
            data-section="portfolio"
            className="relative py-24 lg:py-32 bg-mahaus-navy scroll-mt-20"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
                    <div>
                        <span className="text-mahaus-yellow text-sm uppercase tracking-widest mb-2 block">
                            Portfolio
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-mahaus-cream">
                            Brands I've Helped Grow
                        </h2>
                    </div>
                    <p className="text-mahaus-cream/50 max-w-md text-sm lg:text-right">
                        Real results from real partnerships. Here's a glimpse of
                        what we can achieve together.
                    </p>
                </div>

                <div className="space-y-8">
                    {portfolioItems.map((item, index) => (
                        <PortfolioCard
                            key={item.id}
                            item={item}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

function PortfolioCard({
    item,
    index,
}: {
    item: (typeof portfolioItems)[0]
    index: number
}) {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)

    const colorAccents = {
        'mahaus-red': {
            bg: 'bg-mahaus-red',
            text: 'text-mahaus-red',
            border: 'border-mahaus-red/30',
        },
        'mahaus-blue': {
            bg: 'bg-mahaus-blue',
            text: 'text-mahaus-blue',
            border: 'border-mahaus-blue/30',
        },
        'mahaus-yellow': {
            bg: 'bg-mahaus-yellow',
            text: 'text-mahaus-yellow',
            border: 'border-mahaus-yellow/30',
        },
    }

    const accent = colorAccents[item.color as keyof typeof colorAccents]
    const hasVideos = item.videos && item.videos.length > 0
    const hasImages = item.images && item.images.length > 0
    const reversed = index % 2 === 1

    const handlePlayVideo = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    return (
        <div
            className={`group grid lg:grid-cols-2 gap-0 bg-mahaus-cream/5 border ${accent.border} overflow-hidden transition-all duration-500 hover:bg-mahaus-cream/10`}
        >
            {/* Media */}
            <div
                className={`relative aspect-[4/3] lg:aspect-auto lg:min-h-[400px] ${reversed ? 'lg:order-2' : ''}`}
            >
                <div
                    className={`absolute top-0 ${reversed ? 'right-0' : 'left-0'} w-1 h-full ${accent.bg} z-10`}
                />

                {hasVideos && (
                    <div className="relative h-full">
                        {item.videos.length === 1 ? (
                            <div className="relative h-full">
                                <video
                                    ref={videoRef}
                                    src={item.videos[0]}
                                    className="w-full h-full object-cover"
                                    playsInline
                                    muted
                                    loop
                                    preload="metadata"
                                    onClick={handlePlayVideo}
                                />
                                {!isPlaying && (
                                    <button
                                        onClick={handlePlayVideo}
                                        className="absolute inset-0 flex items-center justify-center bg-mahaus-navy/30 hover:bg-mahaus-navy/20 transition-colors"
                                    >
                                        <div
                                            className={`w-16 h-16 ${accent.bg} rounded-full flex items-center justify-center`}
                                        >
                                            <Play className="w-6 h-6 text-white ml-1" />
                                        </div>
                                    </button>
                                )}
                            </div>
                        ) : (
                            <div className="grid grid-cols-2 h-full">
                                {item.videos.slice(0, 2).map((video, idx) => (
                                    <VideoThumbnail
                                        key={idx}
                                        src={video}
                                        accent={accent}
                                    />
                                ))}
                            </div>
                        )}
                        {item.logo && (
                            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-2 rounded shadow-lg z-20">
                                <img
                                    src={item.logo}
                                    alt={`${item.title} logo`}
                                    className="h-8 w-auto object-contain max-w-[100px]"
                                />
                            </div>
                        )}
                    </div>
                )}

                {!hasVideos && hasImages && (
                    <div className="relative h-full">
                        <div className="grid grid-cols-2 h-full">
                            {item.images.slice(0, 2).map((img, idx) => (
                                <div key={idx} className="relative overflow-hidden">
                                    <img
                                        src={img}
                                        alt={`${item.title} work ${idx + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            ))}
                        </div>
                        {item.logo && (
                            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm p-2 rounded shadow-lg">
                                <img
                                    src={item.logo}
                                    alt={`${item.title} logo`}
                                    className="h-8 w-auto object-contain max-w-[100px]"
                                />
                            </div>
                        )}
                    </div>
                )}

                {!hasVideos && !hasImages && item.logo && (
                    <div className="flex items-center justify-center h-full bg-gradient-to-br from-mahaus-navy/40 to-mahaus-navy/60">
                        <div className="bg-white/95 p-8 rounded-lg shadow-xl">
                            <img
                                src={item.logo}
                                alt={`${item.title} logo`}
                                className="h-16 w-auto object-contain"
                            />
                        </div>
                    </div>
                )}
            </div>

            {/* Content */}
            <div
                className={`relative p-6 lg:p-10 flex flex-col justify-center ${reversed ? 'lg:order-1' : ''}`}
            >
                <span className="absolute top-4 right-4 text-6xl lg:text-7xl font-bold text-mahaus-cream/5">
                    {item.id}
                </span>

                <div className="space-y-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-mahaus-cream">
                        {item.title}
                    </h3>

                    <p className="text-mahaus-cream/60 leading-relaxed text-sm lg:text-base">
                        {item.description}
                    </p>

                    <div className={`p-4 bg-mahaus-cream/5 border-l-2 ${accent.border.replace('/30', '')}`}>
                        <p className={`${accent.text} font-medium text-sm`}>
                            {item.results}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                        {item.categories.map((category) => (
                            <span
                                key={category}
                                className="px-3 py-1 bg-mahaus-cream/5 text-mahaus-cream/50 text-xs border border-mahaus-cream/10"
                            >
                                {category}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

function VideoThumbnail({
    src,
    accent,
}: {
    src: string
    accent: { bg: string; text: string; border: string }
}) {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)

    const handlePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    return (
        <div className="relative overflow-hidden">
            <video
                ref={videoRef}
                src={src}
                className="w-full h-full object-cover"
                playsInline
                muted
                loop
                preload="metadata"
                onClick={handlePlay}
            />
            {!isPlaying && (
                <button
                    onClick={handlePlay}
                    className="absolute inset-0 flex items-center justify-center bg-mahaus-navy/30 hover:bg-mahaus-navy/20 transition-colors"
                >
                    <div
                        className={`w-12 h-12 ${accent.bg} rounded-full flex items-center justify-center`}
                    >
                        <Play className="w-5 h-5 text-white ml-0.5" />
                    </div>
                </button>
            )}
        </div>
    )
}

function ContactSection() {
    return (
        <section
            id="contact"
            data-section="contact"
            className="relative py-24 lg:py-32 overflow-hidden scroll-mt-20"
        >
            {/* Colorful background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-mahaus-red" />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-mahaus-yellow" />
                <div className="absolute bottom-0 left-1/4 w-1/4 h-1/2 bg-mahaus-blue" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                <div className="bg-mahaus-navy p-8 lg:p-16">
                    <div className="max-w-2xl mx-auto text-center lg:text-left lg:mx-0">
                        <span className="text-mahaus-yellow text-sm uppercase tracking-widest mb-4 block">
                            Let's Connect
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-mahaus-cream mb-6">
                            Ready to grow your brand?
                        </h2>
                        <p className="text-mahaus-gray text-lg mb-8">
                            Whether you need a complete social media overhaul or
                            strategic support, I'm here to help turn your vision
                            into results.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <Button
                                size="lg"
                                className="bg-mahaus-yellow text-mahaus-navy hover:bg-mahaus-cream px-8 h-14 text-base font-bold"
                                asChild
                            >
                                <a
                                    href={`mailto:${CONTACT_EMAIL}`}
                                    className="flex items-center justify-center"
                                >
                                    <Mail className="mr-2 w-5 h-5" />
                                    {CONTACT_EMAIL}
                                </a>
                            </Button>
                        </div>

                        <div className="flex items-center justify-center lg:justify-start gap-3">
                            <a
                                href={SOCIAL_LINKS.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-11 h-11 bg-mahaus-cream/10 hover:bg-mahaus-red flex items-center justify-center transition-colors"
                            >
                                <Instagram className="w-5 h-5 text-mahaus-cream" />
                            </a>
                            <a
                                href={SOCIAL_LINKS.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-11 h-11 bg-mahaus-cream/10 hover:bg-mahaus-blue flex items-center justify-center transition-colors"
                            >
                                <Linkedin className="w-5 h-5 text-mahaus-cream" />
                            </a>
                            <a
                                href={SOCIAL_LINKS.canva}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-11 h-11 bg-mahaus-cream/10 hover:bg-mahaus-yellow hover:text-mahaus-navy flex items-center justify-center transition-colors"
                            >
                                <ExternalLink className="w-5 h-5 text-mahaus-cream" />
                            </a>
                        </div>

                        <div className="mt-10 pt-8 border-t border-mahaus-cream/10">
                            <p className="text-mahaus-cream/40 text-sm">
                                Based in{' '}
                                <span className="text-mahaus-cream/60">
                                    {LOCATION}
                                </span>{' '}
                                • Working with clients worldwide
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
        <footer className="py-6 bg-mahaus-navy border-t border-mahaus-cream/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <a href="/" className="flex items-center gap-3">
                        <img
                            src={logoForDarkBg}
                            alt="MAHAUS"
                            className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity"
                        />
                    </a>
                    <span className="text-mahaus-cream/30 text-xs">
                        © {new Date().getFullYear()} Maria Jose • MAHAUS Agency
                    </span>
                </div>
            </div>
        </footer>
    )
}
