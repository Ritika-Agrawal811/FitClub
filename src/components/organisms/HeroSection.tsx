import clsx from 'clsx'

// components
import Image from 'next/image'
import Button from '@/components/atoms/Button'
import Navbar from '@/components/molecules/Navbar'
import StrokeText from '@/components/atoms/StrokeText'
import HeroStatisticsGroup from '@/components/organisms/HeroStatisticsGroup'

const HeroSection = () => {
    return (
        <header className={clsx('min-h-screen p-8 pb-0', 'flex flex-col', 'bg-texture bg-primary')}>
            <Navbar />
            <section className="grid grow grid-cols-4">
                {/* left section */}
                <section className={clsx('col-span-3', 'flex flex-col')}>
                    {/* the best club label*/}
                    <div
                        className={clsx(
                            'w-fit rounded-full bg-gray-900 uppercase text-white',
                            'mt-20',
                            'py-2 pl-3 pr-5'
                        )}>
                        <p className="flex items-center gap-2">
                            <span className={clsx('rounded-full bg-orange', 'px-3.5 py-2.5')}>
                                The Best Fitness Club
                            </span>
                            in the Town
                        </p>
                    </div>

                    {/* main heading */}
                    <h1 className={clsx('mt-14', 'text-7xl', 'text-wrap font-bold uppercase leading-tight text-white')}>
                        <StrokeText title="Shape" className="mr-4" />
                        Your Ideal Body
                    </h1>

                    {/* intro-line */}
                    <p className="mt-4 text-lg text-gray-100">
                        In here we will help you to shape and build your ideal body and{' '}
                        <span className="text-xl font-medium uppercase text-orange">
                            live up your life to the fullest.
                        </span>
                    </p>

                    <HeroStatisticsGroup />

                    {/* Call to action buttons */}
                    <div className="my-auto flex gap-6 self-start">
                        <Button label="Get Started" variant="fill" />
                        <Button label="Learn More" variant="outline" />
                    </div>
                </section>

                {/* right section */}
                <aside className="relative">
                    <Image
                        src="/hero_image.png"
                        alt=""
                        width="600"
                        height="900"
                        className={clsx('absolute aspect-auto w-full', 'bottom-0', 'z-20')}
                    />

                    <Image
                        src="/hero_image_back.png"
                        alt=""
                        width="200"
                        height="200"
                        className={clsx(
                            'absolute aspect-auto w-4/5',
                            '-left-1/4 top-1/2 -translate-y-1/2',
                            'z-10 -rotate-45'
                        )}
                    />
                </aside>
            </section>
        </header>
    )
}

export default HeroSection
