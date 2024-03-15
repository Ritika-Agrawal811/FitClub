import clsx from 'clsx'
import { Icons } from '@/components/atoms/Icon'

// components
import Wrapper from '@/components/atoms/Wrapper'
import Button from '@/components/atoms/Button'
import Image from 'next/image'
import Icon from '@/components/atoms/Icon'

const WhyUs = () => {
    return (
        <Wrapper variant="main" className="mt-40">
            <Wrapper variant="section" className={clsx('grid grid-cols-2 gap-20')}>
                <div>
                    <h2 className={clsx('text-5xl', 'font-bold uppercase leading-tight text-gray-900')}>
                        Why choose <span className="text-orange-400">Us?</span>
                    </h2>
                    {reasons.map((reason, index) => {
                        const { heading, description } = reason
                        return (
                            <div key={index} className="mt-6">
                                <h3 className="flex gap-4 text-2xl font-medium">
                                    <Icon type={Icons.TICK} className="h-8 w-8 fill-orange-400" /> {heading}
                                </h3>
                                <p className="mt-2 w-90 text-gray-600">{description}</p>
                            </div>
                        )
                    })}
                    <Button label="Join Today" variant="fill" className="mt-10" />
                </div>
                <div className="relative">
                    <Image
                        src="/girls-doing-yoga.jpg"
                        alt="a person lifting weights"
                        width={500}
                        height={300}
                        className="h-full w-full object-cover"
                    />

                    <div
                        className={clsx(
                            'flex items-center gap-6',
                            'px-6 py-3',
                            'w-fit rounded-xl bg-gray-900 shadow-xl',
                            'absolute -left-24 bottom-14'
                        )}>
                        <Icon type={Icons.HEARTBEAT} className="h-16 w-16 fill-orange-400" />
                        <p className="text-2xl font-bold text-white">
                            70 bpm <br /> <span className="text-lg font-medium">Heart Rate</span>
                        </p>
                    </div>

                    <div
                        className={clsx(
                            'flex items-center gap-4',
                            'px-6 py-3',
                            'w-fit rounded-xl bg-gray-900 shadow-xl',
                            'absolute -right-12 top-14'
                        )}>
                        <Icon type={Icons.FIRE} className="h-14 w-14 fill-orange-400" />
                        <p className="text-2xl font-bold text-white">
                            24% <br /> <span className="text-lg font-medium">Fat Burning</span>
                        </p>
                    </div>
                </div>
            </Wrapper>
        </Wrapper>
    )
}

export default WhyUs

const reasons = [
    {
        heading: 'Personal Training',
        description: 'Our personal trainer can help you create a personalized fitness plan and track your progress',
    },
    {
        heading: 'Expert Trainer',
        description:
            'Our gym is proud to offer a team of highly skilled and certified trainers to help achieve your health and fitness goal',
    },
    {
        heading: 'Flexible Time',
        description:
            'There are many fitness classes that are offered during off-peak hours, such as early morning or late evening',
    },
]
