import React, {
    ReactNode,
    Suspense
} from 'react'
import { Preloader } from 'components/preloader'

interface RouterContentProps {
    children: ReactNode
}

export const RouterContent = ({ children }: RouterContentProps) => {
    return <Suspense fallback={<Preloader />}>{children}</Suspense>
}
