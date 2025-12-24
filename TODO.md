# MAHAUS Development TODO

## Auth Integration (Hidden for now)

The authentication system is already set up but hidden from the landing page. When ready to integrate:

### Routes
- `/login` - Login page
- `/sign-up` - Sign up page
- `/reset-password` - Password reset
- `/dashboard` - Authenticated dashboard (protected by AuthBarrier)

### To Enable Auth on Landing
1. Add a "Login" button to the navbar in [landing.tsx](apps/web/src/screens/landing/landing.tsx)
2. Update the Navbar component:
```tsx
<a href="/login" className="text-mahaus-cream/80 hover:text-mahaus-cream">
    Login
</a>
```

### Auth Features Available
- Email/password authentication
- Google OAuth
- Session management with localStorage caching
- Protected routes via `AuthBarrier` component
- Redirect to intended page after login

## Landing Page Improvements

### Contact Form
- Add a contact form to the Contact section
- Integrate with backend API or email service (Resend, SendGrid)

### Case Studies / Portfolio
- Add a portfolio section showcasing client work
- Consider adding a case studies page

### Blog Integration
- Consider adding a blog section for content marketing

## Brand Assets

### Logo
- Replace the placeholder SVG logos in [landing.tsx](apps/web/src/screens/landing/landing.tsx) with actual logo assets
- The brandbook shows a 3D isometric logo - consider using SVG or adding the actual logo files

### Fonts
- Currently using Google Fonts (Anybody, Inter)
- For Geomanist (body font from brandbook), either:
  - Purchase and self-host the font
  - Continue using Inter as fallback (current setup)

## Technical Improvements

### Performance
- Add image optimization
- Consider lazy loading for below-the-fold sections
- Add proper meta images for social sharing

### Animations
- Add scroll-triggered animations
- Consider using Framer Motion for smooth transitions

### Accessibility
- Audit for WCAG compliance
- Ensure proper heading hierarchy
- Test with screen readers

## CMS Integration

The CMS app is available at `apps/cms/` for content management. Consider:
- Adding a services management section
- Team member profiles
- Testimonials
- Blog post management
