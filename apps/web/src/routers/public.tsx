import type { RouteObject } from 'react-router'
import { LandingPage } from '../screens/landing'
import { MajoPage } from '../screens/majo'

// Routes that don't require authentication and are publicly accessible
export const publicRoute: RouteObject = {
    children: [
        {
            path: '/',
            element: <LandingPage />,
        },
        {
            path: '/majo',
            element: <MajoPage />,
        },
    ],
}
