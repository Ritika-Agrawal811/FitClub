import clsx from 'clsx'
import { Icons } from '@/components/atoms/Icon'

// components
import Wrapper from '@/components/atoms/Wrapper'
import Button from '@/components/atoms/Button'
import Image from 'next/image'
import Icon from '@/components/atoms/Icon'

const AboutUs = () => {
    return (
        <Wrapper variant="main" className="bg-gray-900">
            <Wrapper variant="section" className={clsx('grid grid-cols-2 gap-20', 'my-0')}>
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
                            'flex items-center gap-6',
                            'px-6 py-3',
                            'w-fit rounded-xl bg-white shadow-xl',
                            'absolute -right-12 bottom-20'
                        )}>
                        <Icon type={Icons.TRAINER} className="h-16 w-16 fill-orange-400" />
                        <p className="text-lg font-bold">
                            Professional <br /> Trainers
                        </p>
                    </div>
                </div>
                <div>
                    <h2 className={clsx('text-5xl', 'font-bold uppercase leading-tight text-white')}>
                        Get Ready To Reach your <span className="text-orange">fitness goal</span>
                    </h2>
                    <p className="mt-6 text-gray-100">
                        We are a gym that is committed to helping poeple reach their fitness goals. We offer a variety
                        of programs and services to fit your needs. Our mission is simple: to empower individuals of all
                        ages and abilities to lead healthier, happier lives. With a team of passionate trainers,
                        state-of-the-art facilities, and a welcoming atmosphere, We are here to support you on your
                        fitness journey every step of the way.
                    </p>
                    <p className="mb-10 mt-6 text-gray-100">
                        We believe that everyone should have access to the benefits of exercise and a healthy body and
                        life. Get to know us better and discover how we can help you unlock your full potential.{' '}
                    </p>
                    <Button label="Request Free Trial" variant="fill" />
                </div>
            </Wrapper>
        </Wrapper>
    )
}

export default AboutUs
