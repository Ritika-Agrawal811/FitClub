import AboutUs from '@/components/organisms/AboutUs'
import HeroSection from '@/components/organisms/HeroSection'
import OpeningHours from '@/components/organisms/OpeningHours'
import Programs from '@/components/organisms/Programs'
import WhyUs from '@/components/organisms/WhyUs'
import FitnessClass from '@/components/organisms/FitnessClass'

export default function Home() {
    return (
        <main>
            <HeroSection />
            <AboutUs />
            <Programs />
            <WhyUs />
            <FitnessClass />
            <OpeningHours />
        </main>
    )
}
