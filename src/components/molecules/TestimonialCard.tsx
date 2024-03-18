import clsx from 'clsx'

// components
import Icon from '@/components/atoms/Icon'
import Image from 'next/image'

type TestimonialCardProps = {
    name: string
    age: number
    review: string
    image: string
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, age, review, image }) => {
    return (
        <article
            className={clsx(
                'bg-texture',
                'h-[310px] w-[300px]',
                'rounded-3xl p-6',
                'flex flex-col justify-between',
                'border-b border-gray-200 shadow-soft'
            )}>
            <p className={clsx('relative', 'text-lg font-bold text-gray-900')}>
                {review}
                <Icon
                    type="QUOTES"
                    className={clsx(
                        'h-16 w-16',
                        '-scale-x-100 -scale-y-100 fill-orange-600',
                        'absolute -bottom-8 -right-6'
                    )}
                />
            </p>

            <div className="flex items-center gap-4">
                <Image
                    src={`/testimonials/${image}`}
                    alt=""
                    width={500}
                    height={300}
                    className="h-16 w-16 rounded-full object-cover"
                />
                <div>
                    <h4 className="font-medium">{name}</h4>
                    <p>{age} years</p>
                </div>
            </div>
        </article>
    )
}

export default TestimonialCard
