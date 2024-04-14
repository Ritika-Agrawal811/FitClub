import clsx from 'clsx'
import { IconsList, Position } from '@/types/common'

// components
import Wrapper from '@/components/atoms/Wrapper'
import Button from '@/components/atoms/Button'
import Image from 'next/image'
import Icon from '@/components/atoms/Icon'
import Tag from '@/components/atoms/Tag'

const WhyUs = () => {
    return (
        <Wrapper variant="main">
            <Wrapper variant="section" className={clsx('grid gap-10 lg:grid-cols-2 xl:gap-20')}>
                <div>
                    <h2
                        className={clsx(
                            'text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl 3xl:text-6xl',
                            'font-bold uppercase text-gray-900'
                        )}>
                        Why choose <span className="text-orange-400">Us?</span>
                    </h2>
                    {reasons.map((reason, index) => {
                        const { heading, description } = reason
                        return (
                            <div key={index} className="mt-4 2xl:mt-6 3xl:mt-8">
                                <h3
                                    className={clsx(
                                        'flex gap-4',
                                        'text-lg sm:text-xl md:text-2xl 3xl:text-3xl',
                                        'font-medium'
                                    )}>
                                    <Icon type="TICK" className="h-8 w-8 fill-orange-400" /> {heading}
                                </h3>
                                <p
                                    className={clsx(
                                        'text-gray-600 2xl:w-90',
                                        'mt-2 3xl:mt-4',
                                        'text-sm md:text-base 3xl:text-lg 4xl:text-xl'
                                    )}>
                                    {description}
                                </p>
                            </div>
                        )
                    })}
                    <Button label="Join Today" className="mt-6 2xl:mt-10" />
                </div>
                <div className="relative">
                    <Image
                        src="/girls-doing-yoga.jpg"
                        alt="a person lifting weights"
                        width={500}
                        height={300}
                        className="h-full w-full object-cover"
                    />

                    {tags.map((item, index) => {
                        return (
                            <Tag
                                key={index}
                                {...item}
                                className="bg-gray-900 text-sm text-white xs:text-lg 2xl:text-2xl"
                            />
                        )
                    })}
                </div>
            </Wrapper>
        </Wrapper>
    )
}

export default WhyUs

type Tags = {
    label: string[]
    icon: IconsList
    position: Position
}

const tags: Tags[] = [
    {
        label: ['70 bpm', 'Heart Rate'],
        icon: 'HEARTBEAT',
        position: 'bottom-left',
    },
    {
        label: ['24%', 'Fat Burning'],
        icon: 'FIRE',
        position: 'top-right',
    },
]

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
