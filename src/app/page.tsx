'use client'

import AboutUs from '@/components/organisms/AboutUs'
import HeroSection from '@/components/organisms/HeroSection'
import Programs from '@/components/organisms/Programs'
import WhyUs from '@/components/organisms/WhyUs'
import FitnessClass from '@/components/organisms/FitnessClass'
import OpeningHours from '@/components/organisms/OpeningHours'
import Plans from '@/components/organisms/Plans'
import Testimonials from '@/components/organisms/Testimonials'

export default function Home() {
    return (
        <main>
            <HeroSection />
            <AboutUs />
            <Programs />
            <WhyUs />
            {/* <FitnessClass /> */}
            {/* <OpeningHours /> */}
            {/* <Plans /> */}
            {/* <Testimonials /> */}
        </main>
    )
}
