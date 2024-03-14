import AboutUs from '@/components/organisms/AboutUs'
import HeroSection from '@/components/organisms/HeroSection'
import Programs from '@/components/organisms/Programs'
import WhyUs from '@/components/organisms/WhyUs'

export default function Home() {
    return (
        <main>
            <HeroSection />
            <AboutUs />
            <Programs />
            <WhyUs />
        </main>
    )
}
