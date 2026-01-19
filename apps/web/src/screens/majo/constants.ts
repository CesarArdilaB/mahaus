// Maria Jose Social Media Manager - Portfolio Page Constants

export const CONTACT_EMAIL = 'm@mahaus.agency'
export const LOCATION = 'Colombia'

export const SOCIAL_LINKS = {
    instagram: 'https://instagram.com/mariajose_smm',
    linkedin: 'https://linkedin.com/in/mariajose-smm',
    canva: 'https://mariajose-socialmediamanager.my.canva.site',
} as const

// Profile/Hero images
export { default as majoPortrait } from '../../assets/images/majo/majo-portrait.jpg'
export { default as servicesBg } from '../../assets/images/majo/services-bg.jpg'
export { default as contactBg } from '../../assets/images/majo/contact-bg.jpg'

// Client logos
import cafePazLogo from '../../assets/images/majo/cafe-paz-logo.png'
import upsidersLogo from '../../assets/images/majo/upsiders-logo.png'
import nearsolLogo from '../../assets/images/majo/nearsol-logo.png'
import cxpertsLogo from '../../assets/images/majo/cxperts-logo.png'
import exotermicaLogo from '../../assets/images/majo/exotermica-logo.png'

// Upsiders content (Instagram mockups)
import upsiders1 from '../../assets/images/majo/upsiders-1.png'
import upsiders2 from '../../assets/images/majo/upsiders-2.png'

// Exotérmica artwork (album/event designs)
import exotermicaArtwork1 from '../../assets/images/majo/exotermica-artwork-1.png'
import exotermicaArtwork2 from '../../assets/images/majo/exotermica-artwork-2.png'
import exotermicaArtwork3 from '../../assets/images/majo/exotermica-artwork-3.png'
import exotermicaArtwork4 from '../../assets/images/majo/exotermica-artwork-4.png'

// Exotérmica event photos available in assets/images/majo/exotermica-*.jpg

// Videos
import video1 from '../../assets/images/majo/video-1.mp4'
import video2 from '../../assets/images/majo/video-2.mp4'
import video3 from '../../assets/images/majo/video-3.mp4'
import video4 from '../../assets/images/majo/video-4.mp4'

export const portfolioItems = [
    {
        id: '01',
        title: 'Café Paz',
        description:
            "Launched a specialty coffee brand, developing a social media strategy for Instagram and TikTok. Created video and photography content to showcase the brand's essence and managed DM inquiries.",
        results:
            'Grew account by 300 organic followers from December 2024 to February 2025, converting to 10-15 sales monthly',
        categories: [
            'Social Media Management',
            'Content Creation',
            'Photography',
        ],
        color: 'mahaus-red',
        logo: cafePazLogo,
        images: [],
        videos: [video1, video2],
    },
    {
        id: '02',
        title: 'Upsiders',
        description:
            'Full social media and community management across Instagram, LinkedIn, Facebook, TikTok, and YouTube. Built and nurtured a global community focused on mindset growth, professional development, and networking.',
        results:
            '+3,676 reactions • 1,686 comments • 336 posts managed • 108 peak daily active members',
        categories: ['Social Media', 'Community', 'Content Strategy'],
        color: 'mahaus-blue',
        logo: upsidersLogo,
        images: [upsiders1, upsiders2],
        videos: [],
    },
    {
        id: '03',
        title: 'NEARSOL',
        description:
            'Designed and managed multi-format content for Instagram, Facebook, TikTok, LinkedIn, and Google My Business. Developed graphic materials and implemented digital branding strategies.',
        results: 'Comprehensive digital branding across all platforms',
        categories: ['Graphic Design', 'Social Media', 'Digital Branding'],
        color: 'mahaus-red',
        logo: nearsolLogo,
        images: [],
        videos: [video3],
    },
    {
        id: '04',
        title: 'Exotérmica',
        description:
            'Led visual conceptualization for musical launches, crafting graphics and branding. Developed and executed creative digital campaigns and supported event branding.',
        results: 'Successful creative campaigns for musical launches',
        categories: ['Graphic Design', 'Event Branding', 'Digital Campaigns'],
        color: 'mahaus-blue',
        logo: exotermicaLogo,
        images: [
            exotermicaArtwork1,
            exotermicaArtwork2,
            exotermicaArtwork3,
            exotermicaArtwork4,
        ],
        videos: [],
    },
    {
        id: '05',
        title: 'CXPERTS',
        description:
            'Managed Mexico and LATAM accounts for Instagram, TikTok, and YouTube. Developed sales campaign focused on client acquisition. Handled complete content creation including video, photography, and graphic design.',
        results:
            'Full-service content creation and regional social media management',
        categories: [
            'Social Media Management',
            'Content Creation',
            'Video Production',
        ],
        color: 'mahaus-yellow',
        logo: cxpertsLogo,
        images: [],
        videos: [video4],
    },
]

export const services = [
    {
        title: 'Social Media Management',
        description:
            'Strategic planning and daily management across all major platforms',
    },
    {
        title: 'Content Creation',
        description:
            'Video, photography, and graphic design that tells your story',
    },
    {
        title: 'Community Management',
        description:
            'Building engaged communities that grow your brand organically',
    },
    {
        title: 'Digital Branding',
        description: 'Cohesive visual identity across all digital touchpoints',
    },
]
