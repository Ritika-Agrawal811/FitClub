import clsx from 'clsx'

// components
import Image from 'next/image'
import Button from '@/components/atoms/Button'
import Navbar from '@/components/molecules/Navbar'
import StrokeText from '@/components/atoms/StrokeText'
import HeroStatisticsGroup from '@/components/organisms/HeroStatisticsGroup'

const HeroSection = () => {
    return (
        <header className="bg-texture bg-primary py-4 xl:py-8 4xl:py-14">
            <Navbar />
            <section
                className={clsx(
                    'grid lg:grid-cols-4',
                    'grow',
                    'lg:mt-10 4xl:mt-16',
                    'mx-auto w-90 3xl:w-85 4xl:w-3/4 5xl:w-3/5'
                )}>
                {/* left section */}
                <section className={clsx('col-span-3', 'flex flex-col')}>
                    {/* the best club label*/}
                    <div
                        className={clsx(
                            'w-fit rounded-full bg-gray-900 uppercase text-white',
                            'mt-20',
                            'py-2 pl-3 pr-5'
                        )}>
                        <p className={clsx('flex items-center gap-2', 'text-xs sm:text-sm 2xl:text-base')}>
                            <span className={clsx('rounded-full bg-orange-400', 'p-2 xs:px-3.5 xs:py-2.5')}>
                                The Best Fitness Club
                            </span>
                            in the Town
                        </p>
                    </div>

                    {/* main heading */}
                    <h1
                        className={clsx(
                            'mt-10 sm:mt-14',
                            'text-3xl xs:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl',
                            'text-wrap font-bold uppercase leading-tight text-white'
                        )}>
                        <StrokeText title="Shape" className="mr-4" />
                        Your Ideal Body
                    </h1>

                    {/* intro-line */}
                    <p className={clsx('mt-4 text-gray-100 4xl:mt-6', 'text-sm xl:text-base 2xl:text-lg 4xl:text-xl')}>
                        In here we will help you to shape and build your ideal body and{' '}
                        <span
                            className={clsx(
                                'xl:text-lg 2xl:text-xl 4xl:text-2xl',
                                'font-medium uppercase text-orange-400'
                            )}>
                            live up your life to the fullest.
                        </span>
                    </p>

                    <HeroStatisticsGroup />

                    {/* Call to action buttons */}
                    <div className="mt-10 self-start 4xl:mt-14">
                        <Button label="Find the nearest gym" />
                    </div>
                </section>

                {/* right section */}
                <aside className="relative hidden lg:block">
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
                            '-left-2 top-1/2 -translate-y-1/2 xl:-left-4',
                            'z-10 -rotate-45'
                        )}
                    />
                </aside>
            </section>
        </header>
    )
}

export default HeroSection
