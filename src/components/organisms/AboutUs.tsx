import clsx from 'clsx'

// components
import Wrapper from '@/components/atoms/Wrapper'
import Button from '@/components/atoms/Button'
import Image from 'next/image'
import Icon from '@/components/atoms/Icon'

const AboutUs = () => {
    return (
        <Wrapper variant="main" className="bg-gray-900" id="about-us">
            <Wrapper variant="section" className={clsx('grid gap-10 lg:grid-cols-2 xl:gap-20', 'my-0')}>
                <div className="relative">
                    <Image
                        src="/person-lifting-weights.png"
                        alt="a person lifting weights"
                        width={500}
                        height={300}
                        className="h-full w-full object-cover"
                    />

                    <div
                        className={clsx(
                            'flex items-center gap-2 xs:gap-4 lg:gap-6',
                            'px-4 py-3 2xl:px-6',
                            'w-fit rounded-xl bg-white shadow-xl',
                            'absolute -bottom-4 right-4 xs:bottom-4 lg:-bottom-10 lg:right-8 2xl:-right-12 2xl:bottom-20'
                        )}>
                        <Icon
                            type="TRAINER"
                            className={clsx(
                                'h-10 w-10 xs:h-12 xs:w-12 lg:h-14 lg:w-14 2xl:h-16 2xl:w-16',
                                'fill-orange-400'
                            )}
                        />
                        <p className="text-sm font-bold xs:text-base 2xl:text-lg">
                            Professional <br /> Trainers
                        </p>
                    </div>
                </div>
                <div>
                    <h2
                        className={clsx(
                            'text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-6xl',
                            'font-bold uppercase text-white'
                        )}>
                        Get Ready To Reach your <span className="text-orange-400">fitness goal</span>
                    </h2>
                    <p className={clsx('mt-6 text-gray-100 4xl:mt-8', 'text-sm md:text-base 3xl:text-lg 4xl:text-xl')}>
                        We are a gym that is committed to helping poeple reach their fitness goals. We offer a variety
                        of programs and services to fit your needs. Our mission is simple: to empower individuals of all
                        ages and abilities to lead healthier, happier lives. With a team of passionate trainers,
                        state-of-the-art facilities, and a welcoming atmosphere, We are here to support you on your
                        fitness journey every step of the way.
                    </p>
                    <p className={clsx('mt-6 text-gray-100 4xl:mt-8', 'text-sm md:text-base 3xl:text-lg 4xl:text-xl')}>
                        We believe that everyone should have access to the benefits of exercise and a healthy body and
                        life. Get to know us better and discover how we can help you unlock your full potential.{' '}
                    </p>
                    <Button label="Request Free Trial" variant="fill" className="mt-10 4xl:mt-12" />
                </div>
            </Wrapper>
        </Wrapper>
    )
}

export default AboutUs
