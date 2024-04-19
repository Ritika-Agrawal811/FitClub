import { useState } from 'react'
import clsx from 'clsx'

// components
import Image from 'next/image'
import NavigateButton from '@/components/atoms/NavigateButton'

type Workout = {
    title: string
    description: string
    image: string
}

type CarouselSlideProps = {
    workouts: Workout[]
}

const CarouselSlide: React.FC<CarouselSlideProps> = ({ workouts }) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
    const { title, description, image } = workouts[currentSlideIndex]

    // set next slide index and hence get its workout title
    const nextSlideIndex = (currentSlideIndex + 1) % workouts.length
    const nextWorkout = workouts[nextSlideIndex].title

    // handle the current slide index when "next" button is clicked
    const showNextSlideHandler = () => {
        setCurrentSlideIndex((prev) => (prev + 1) % workouts.length)
    }

    return (
        <section className={clsx('mt-6 lg:mt-14', 'grid grid-cols-6', 'gap-6 xl:gap-10')}>
            <figure className='relative col-span-6 lg:col-span-3 lg:h-[25em] 3xl:h-[32em]'>
                <Image
                    src={`/fitness_classes/${image}`}
                    alt='a person lifting weights'
                    width={500}
                    height={300}
                    className={clsx('h-full w-full object-cover lg:absolute', 'border-8 border-orange-600')}
                />
            </figure>

            <div className={clsx('col-span-6 sm:col-span-4 lg:col-span-2', 'flex flex-col justify-evenly')}>
                <div>
                    <h3
                        className={clsx(
                            'text-xl xs:text-2xl sm:text-3xl 3xl:text-5xl',
                            'font-bold uppercase text-gray-900'
                        )}>
                        {title}
                    </h3>
                    <p className={clsx('my-4 text-gray-600', 'text-sm xs:text-base xl:text-lg 3xl:text-xl')}>
                        {description}
                    </p>
                </div>

                <div className='flex items-center gap-4'>
                    {workouts.map((item, index) => {
                        return (
                            <Image
                                key={index}
                                src={`/fitness_classes/${item.image}`}
                                alt=''
                                width={500}
                                height={300}
                                className={clsx(
                                    'h-16 w-16 rounded-full object-cover 3xl:h-18 3xl:w-18',
                                    'cursor-pointer shadow-xl transition duration-150',
                                    currentSlideIndex === index
                                        ? 'h-18 w-18 border-4 border-orange-600 3xl:h-20 3xl:w-20'
                                        : 'opacity-70'
                                )}
                                onClick={() => setCurrentSlideIndex(index)}
                            />
                        )
                    })}
                </div>
            </div>
            <div
                className={clsx(
                    'col-span-6 sm:col-span-2 lg:col-span-1',
                    'p-3 lg:p-0',
                    'flex flex-row-reverse items-center justify-center gap-6 sm:flex-col',
                    'rounded-xl md:rounded-3xl',
                    'bg-gray-900'
                )}>
                <NavigateButton
                    variant='outline'
                    className='shrink-0 lg:-mt-8'
                    type='next'
                    onClick={showNextSlideHandler}
                />
                <h3
                    className={clsx(
                        'text-base xl:text-lg 3xl:text-xl',
                        'text-center font-medium uppercase text-white lg:px-2'
                    )}>
                    {nextWorkout}
                </h3>
            </div>
        </section>
    )
}

export default CarouselSlide
