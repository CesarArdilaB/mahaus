import { Button } from '@shared/components'
import {
    ArrowRight,
    Mail,
    Instagram,
    Linkedin,
    ExternalLink,
} from 'lucide-react'
import { useEffect, useState } from 'react'
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
const LIGHT_SECTIONS = ['about', 'services']
// Sections that have colorful backgrounds
const COLORFUL_SECTIONS = ['contact']

export function MajoPage() {
    return (
        <div className="majo-page bg-mahaus-navy min-h-screen overflow-x-hidden">
            <Navbar />
            <HeroSection />
            <AboutSection />
            <PortfolioSection />
            <ServicesSection />
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
                        {['Portfolio', 'Services', 'Contact'].map((item) => (
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
                        <a href="#contact">Let's Connect</a>
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
                <div
                    className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full border-[3px] border-mahaus-blue/30"
                    style={{
                        transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
                    }}
                />
                <div
                    className="absolute top-1/4 right-1/4 w-48 h-48 rounded-full bg-mahaus-red/20"
                    style={{
                        transform: `translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px)`,
                    }}
                />
                <div
                    className="absolute bottom-1/3 right-1/3 w-32 h-32 bg-mahaus-yellow/30 rotate-45"
                    style={{
                        transform: `rotate(45deg) translate(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px)`,
                    }}
                />
                <div
                    className="absolute top-1/2 left-1/4 w-64 h-2 bg-mahaus-blue/40"
                    style={{ transform: `translateX(${mousePos.x * -0.4}px)` }}
                />
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
                    <div className="lg:col-span-8 space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="flex gap-1">
                                <div className="w-3 h-3 bg-mahaus-red rounded-full" />
                                <div className="w-3 h-3 bg-mahaus-yellow rounded-full" />
                                <div className="w-3 h-3 bg-mahaus-blue rounded-full" />
                            </div>
                            <span className="text-mahaus-cream/60 uppercase tracking-[0.3em] text-xs">
                                Social Media Manager
                            </span>
                        </div>

                        <div className="space-y-2">
                            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-mahaus-cream leading-[0.9] tracking-tight">
                                Maria Jose
                            </h1>
                            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight">
                                <span className="text-mahaus-yellow">
                                    Growing
                                </span>
                                <span className="text-mahaus-cream">
                                    {' '}
                                    Brands
                                </span>
                            </h1>
                            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight">
                                <span className="text-mahaus-red">Online</span>
                            </h1>
                        </div>

                        <div className="flex items-start gap-6 max-w-xl">
                            <div className="w-1 h-20 bg-gradient-to-b from-mahaus-yellow to-mahaus-red flex-shrink-0 mt-1" />
                            <p className="text-mahaus-gray text-lg leading-relaxed">
                                Strategic social media management, creative
                                content creation, and community building that
                                transforms your digital presence into real
                                business results.
                            </p>
                        </div>

                        <div className="flex items-center gap-6 pt-4">
                            <Button
                                size="lg"
                                className="bg-mahaus-red hover:bg-mahaus-yellow hover:text-mahaus-navy text-white px-8 h-14 text-base transition-all duration-300 group whitespace-nowrap"
                                asChild
                            >
                                <a
                                    href="#portfolio"
                                    className="flex items-center justify-center gap-2"
                                >
                                    View Portfolio
                                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </a>
                            </Button>
                            <a
                                href="#contact"
                                className="text-mahaus-cream/60 hover:text-mahaus-cream transition-colors uppercase tracking-widest text-sm"
                            >
                                Get in Touch
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-4 relative h-[500px] hidden lg:flex items-center justify-center">
                        <div
                            className="relative w-full max-w-md transition-transform duration-300 ease-out"
                            style={{
                                transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`,
                            }}
                        >
                            {/* Bauhaus-style geometric frame composition */}
                            <div className="relative">
                                {/* Background geometric shapes */}
                                <div
                                    className="absolute -top-6 -left-6 w-72 h-72 bg-mahaus-yellow/40 rounded-full"
                                    style={{
                                        transform: `translate(${mousePos.x * -0.2}px, ${mousePos.y * -0.2}px)`,
                                    }}
                                />
                                <div
                                    className="absolute -bottom-4 -right-4 w-48 h-48 bg-mahaus-red/50"
                                    style={{
                                        transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)`,
                                    }}
                                />
                                <div
                                    className="absolute top-1/2 -right-8 w-24 h-24 border-4 border-mahaus-blue rounded-full"
                                    style={{
                                        transform: `translate(${mousePos.x * 0.6}px, ${mousePos.y * 0.6}px)`,
                                    }}
                                />

                                {/* Main portrait container with geometric clipping */}
                                <div className="relative z-10">
                                    {/* Yellow accent bar */}
                                    <div className="absolute -left-4 top-8 w-2 h-32 bg-mahaus-yellow" />

                                    {/* Portrait with border frame */}
                                    <div className="relative overflow-hidden border-4 border-mahaus-cream/20">
                                        <img
                                            src={contactBg}
                                            alt="Maria Jose"
                                            className="w-80 h-96 object-cover object-top"
                                        />
                                        {/* Color overlay accents */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-mahaus-blue/10 via-transparent to-mahaus-red/10" />
                                    </div>

                                    {/* Bottom decorative elements */}
                                    <div className="absolute -bottom-3 left-4 flex gap-2">
                                        <div className="w-6 h-6 bg-mahaus-red" />
                                        <div className="w-6 h-6 bg-mahaus-yellow rounded-full" />
                                        <div className="w-6 h-6 bg-mahaus-blue" />
                                    </div>

                                    {/* Blue accent line */}
                                    <div className="absolute -right-3 bottom-16 w-16 h-1 bg-mahaus-blue" />
                                </div>

                                {/* Floating accent square */}
                                <div
                                    className="absolute -top-4 right-8 w-12 h-12 border-2 border-mahaus-yellow rotate-12"
                                    style={{
                                        transform: `rotate(12deg) translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                <div className="w-px h-16 bg-gradient-to-b from-transparent to-mahaus-cream/30" />
                <div className="w-2 h-2 bg-mahaus-cream/30 rounded-full animate-pulse" />
            </div>
        </section>
    )
}

function AboutSection() {
    return (
        <section
            data-section="about"
            className="relative py-32 bg-mahaus-cream overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-1/3 h-2 bg-mahaus-red" />
            <div className="absolute top-0 left-1/3 w-1/3 h-2 bg-mahaus-yellow" />
            <div className="absolute top-0 left-2/3 w-1/3 h-2 bg-mahaus-blue" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="absolute -left-4 top-0 w-1 h-full bg-mahaus-navy" />
                        <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-bold text-mahaus-navy leading-tight">
                            Transforming{' '}
                            <span className="text-mahaus-red">brands</span> into{' '}
                            <span className="text-mahaus-blue">thriving</span>{' '}
                            <span className="text-mahaus-yellow inline-block bg-mahaus-navy px-2">
                                communities
                            </span>
                        </blockquote>
                    </div>

                    <div className="relative">
                        <div className="absolute -top-8 -right-8 w-32 h-32 border-4 border-mahaus-navy/10 rounded-full" />
                        <div className="relative z-10 space-y-6">
                            <p className="text-lg text-mahaus-navy/80 leading-relaxed">
                                With experience managing brands across{' '}
                                <strong>Latin America</strong> and globally, I
                                specialize in creating authentic connections
                                between brands and their audiences through
                                strategic content and community engagement.
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-mahaus-navy flex items-center justify-center">
                                    <ArrowRight className="w-6 h-6 text-mahaus-cream" />
                                </div>
                                <span className="text-mahaus-navy font-bold uppercase tracking-wider text-sm">
                                    Results-Driven Approach
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function PortfolioSection() {
    return (
        <section
            id="portfolio"
            data-section="portfolio"
            className="relative py-32 bg-mahaus-navy scroll-mt-20"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-end justify-between mb-20">
                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-8 h-8 bg-mahaus-red" />
                            <div className="w-8 h-8 bg-mahaus-yellow rounded-full" />
                            <div className="w-8 h-8 bg-mahaus-blue" />
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-mahaus-cream">
                            Portfolio
                        </h2>
                    </div>
                    <div className="hidden lg:block text-right">
                        <span className="text-mahaus-cream/40 text-sm uppercase tracking-widest">
                            Selected Work
                        </span>
                        <div className="w-32 h-px bg-mahaus-cream/20 mt-2" />
                    </div>
                </div>

                {/* Stacked full-width cards */}
                <div className="space-y-16">
                    {portfolioItems.map((item, index) => (
                        <PortfolioCard
                            key={item.id}
                            item={item}
                            reversed={index % 2 === 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

function PortfolioCard({
    item,
    reversed,
}: {
    item: (typeof portfolioItems)[0]
    reversed: boolean
}) {
    const accentClasses = {
        'mahaus-red': 'bg-mahaus-red',
        'mahaus-blue': 'bg-mahaus-blue',
        'mahaus-yellow': 'bg-mahaus-yellow',
    }

    const borderClasses = {
        'mahaus-red': 'border-mahaus-red/30',
        'mahaus-blue': 'border-mahaus-blue/30',
        'mahaus-yellow': 'border-mahaus-yellow/30',
    }

    const hasVideos = item.videos && item.videos.length > 0
    const hasImages = item.images && item.images.length > 0

    return (
        <div
            className={`group relative grid lg:grid-cols-2 gap-0 bg-mahaus-navy/30 border ${borderClasses[item.color as keyof typeof borderClasses]} overflow-hidden`}
        >
            {/* Media Section */}
            <div
                className={`relative min-h-[300px] lg:min-h-[400px] ${reversed ? 'lg:order-2' : ''}`}
            >
                {/* Color accent bar */}
                <div
                    className={`absolute top-0 ${reversed ? 'right-0' : 'left-0'} w-1 h-full ${accentClasses[item.color as keyof typeof accentClasses]} z-10`}
                />

                {/* Video content */}
                {hasVideos && (
                    <div className="relative h-full">
                        {item.videos.length === 1 ? (
                            <video
                                src={item.videos[0]}
                                className="w-full h-full object-cover"
                                controls
                                muted
                                playsInline
                                preload="metadata"
                            />
                        ) : (
                            <div className="grid grid-cols-2 h-full">
                                {item.videos.slice(0, 2).map((video, idx) => (
                                    <div
                                        key={idx}
                                        className="relative overflow-hidden"
                                    >
                                        <video
                                            src={video}
                                            className="w-full h-full object-cover"
                                            controls
                                            muted
                                            playsInline
                                            preload="metadata"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                        {/* Logo overlay for videos */}
                        {item.logo && (
                            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-2 rounded shadow-lg z-10">
                                <img
                                    src={item.logo}
                                    alt={`${item.title} logo`}
                                    className="h-8 w-auto object-contain max-w-[120px]"
                                />
                            </div>
                        )}
                    </div>
                )}

                {/* Image content */}
                {!hasVideos && hasImages && (
                    <div className="relative h-full">
                        <div className="grid grid-cols-2 h-full">
                            {item.images.slice(0, 2).map((img, idx) => (
                                <div
                                    key={idx}
                                    className="relative overflow-hidden"
                                >
                                    <img
                                        src={img}
                                        alt={`${item.title} work ${idx + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-mahaus-navy/20 group-hover:bg-transparent transition-colors" />
                                </div>
                            ))}
                        </div>
                        {/* Logo overlay for images */}
                        {item.logo && (
                            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm p-2 rounded shadow-lg">
                                <img
                                    src={item.logo}
                                    alt={`${item.title} logo`}
                                    className="h-8 w-auto object-contain max-w-[120px]"
                                />
                            </div>
                        )}
                    </div>
                )}

                {/* Fallback: Logo only */}
                {!hasVideos && !hasImages && item.logo && (
                    <div className="flex items-center justify-center h-full bg-gradient-to-br from-mahaus-navy/50 to-mahaus-navy/80">
                        <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-xl">
                            <img
                                src={item.logo}
                                alt={`${item.title} logo`}
                                className="h-20 w-auto object-contain max-w-[200px]"
                            />
                        </div>
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div
                className={`relative p-8 lg:p-12 flex flex-col justify-center ${reversed ? 'lg:order-1' : ''}`}
            >
                {/* Number accent */}
                <div className="absolute top-6 right-6">
                    <span className="text-7xl lg:text-8xl font-bold text-mahaus-cream/5">
                        {item.id}
                    </span>
                </div>

                <div className="relative space-y-6">
                    <h3 className="text-3xl lg:text-4xl font-bold text-mahaus-cream">
                        {item.title}
                    </h3>

                    <p className="text-mahaus-cream/70 leading-relaxed">
                        {item.description}
                    </p>

                    <div className="pt-4 border-t border-mahaus-cream/10">
                        <p className="text-mahaus-yellow font-medium">
                            {item.results}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                        {item.categories.map((category) => (
                            <span
                                key={category}
                                className="px-3 py-1.5 bg-mahaus-cream/10 text-mahaus-cream/70 text-xs font-medium border border-mahaus-cream/10"
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

function ServicesSection() {
    return (
        <section
            id="services"
            data-section="services"
            className="relative py-32 bg-mahaus-cream overflow-hidden scroll-mt-20"
        >
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
                        Services
                    </h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            className="group text-center p-6 hover:bg-mahaus-navy/5 transition-colors"
                        >
                            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                {index === 0 && (
                                    <div className="w-12 h-12 bg-mahaus-red rounded-full" />
                                )}
                                {index === 1 && (
                                    <div className="w-12 h-12 bg-mahaus-yellow" />
                                )}
                                {index === 2 && (
                                    <div className="w-12 h-12 border-4 border-mahaus-blue rounded-full" />
                                )}
                                {index === 3 && (
                                    <div className="w-0 h-0 border-l-[24px] border-r-[24px] border-b-[42px] border-l-transparent border-r-transparent border-b-mahaus-navy" />
                                )}
                            </div>
                            <h3 className="text-xl font-bold text-mahaus-navy mb-2">
                                {service.title}
                            </h3>
                            <p className="text-mahaus-navy/70 text-sm">
                                {service.description}
                            </p>
                        </div>
                    ))}
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
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-mahaus-red" />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-mahaus-yellow" />
                <div className="absolute bottom-0 left-1/4 w-1/4 h-1/2 bg-mahaus-blue" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                <div className="bg-mahaus-navy p-12 lg:p-20">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-mahaus-cream mb-6">
                            Let's{' '}
                            <span className="text-mahaus-yellow">Work</span>{' '}
                            Together
                        </h2>
                        <p className="text-mahaus-gray text-lg mb-8">
                            Ready to grow your brand's social media presence?
                            Let's discuss how I can help transform your digital
                            strategy into measurable results.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
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

                        <div className="flex items-center gap-4">
                            <a
                                href={SOCIAL_LINKS.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-mahaus-cream/10 hover:bg-mahaus-cream/20 flex items-center justify-center transition-colors"
                            >
                                <Instagram className="w-5 h-5 text-mahaus-cream" />
                            </a>
                            <a
                                href={SOCIAL_LINKS.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-mahaus-cream/10 hover:bg-mahaus-cream/20 flex items-center justify-center transition-colors"
                            >
                                <Linkedin className="w-5 h-5 text-mahaus-cream" />
                            </a>
                            <a
                                href={SOCIAL_LINKS.canva}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-mahaus-cream/10 hover:bg-mahaus-cream/20 flex items-center justify-center transition-colors"
                            >
                                <ExternalLink className="w-5 h-5 text-mahaus-cream" />
                            </a>
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
                            &copy; {new Date().getFullYear()} Maria Jose -
                            MAHAUS
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
