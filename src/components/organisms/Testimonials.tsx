import { useState } from 'react'
import clsx from 'clsx'
import { Direction } from '@/types/common'

// components
import Wrapper from '@/components/atoms/Wrapper'
import TestimonialCard from '@/components/molecules/TestimonialCard'
import NavigateButton from '../atoms/NavigateButton'

const Testimonials = () => {
    const [rotation, setRotation] = useState(0)

    const rotateTestimonialsHandler = (direction: Direction) => {
        setRotation((prev) => (direction === 'next' ? prev - 24 : prev + 24))
    }

    return (
        <Wrapper variant="main" className="pt-0" id="testimonials">
            <Wrapper variant="section" className="w-full">
                <h2 className={clsx('text-6xl', 'text-center font-bold uppercase text-gray-900')}>
                    What <span className="text-6xl text-orange-400">our clients</span> say
                </h2>

                <div className="relative mt-16 h-[710px] overflow-hidden">
                    <div
                        className={clsx(
                            'h-vmax w-vmax rounded-full',
                            'relative left-1/2',
                            'flex items-center justify-center',
                            'transition-transform duration-1000 ease-in-out'
                        )}
                        style={{ transform: `translateX(-50%) rotate(${rotation}deg)` }}>
                        {testimonials.map((testimonial, index) => {
                            return (
                                <div
                                    key={index}
                                    className={clsx('absolute h-full py-2', 'flex flex-col justify-between')}
                                    style={{ transform: `rotate(${24 * (index + 1)}deg)` }}>
                                    <TestimonialCard {...testimonial} />
                                </div>
                            )
                        })}
                    </div>

                    <div className={clsx('absolute left-1/2 top-[60%] -translate-x-1/2', 'flex gap-8')}>
                        {['prev', 'next'].map((direction, index) => (
                            <NavigateButton
                                key={index}
                                variant="fill"
                                type={direction as Direction}
                                onClick={() => rotateTestimonialsHandler(direction as Direction)}
                            />
                        ))}
                    </div>
                </div>
            </Wrapper>
            <Wrapper variant="section">
                <h2
                    className={clsx(
                        'text-10xl',
                        'text-center font-bold uppercase tracking-wide text-gray-900',
                        'flex flex-col'
                    )}>
                    100,000 <span className="text-6xl text-orange-400">Happy members</span>
                </h2>
            </Wrapper>
        </Wrapper>
    )
}

export default Testimonials

const testimonials = [
    {
        name: 'Sarah Johnson',
        age: 28,
        review: 'Joining this gym was the best decision I have made for my health. The trainers are incredibly supportive and motivating!',
        image: 'sarah.jpg',
    },
    {
        name: 'Mark Thompson',
        age: 35,
        review: 'At 35, I am in the best shape of my life, thanks to the personalized workouts and friendly atmosphere at this gym.',
        image: 'mark.png',
    },
    {
        name: 'Emily Rodriguez',
        age: 30,
        review: 'I have never been a gym person until I found this place. Now, I look forward to every session!',
        image: 'emily.jpg',
    },
    {
        name: 'David Smith',
        age: 42,
        review: 'Being a busy professional, finding time for fitness was a challenge. But this gym is flexible schedule made it possible.',
        image: 'david.jpg',
    },
    {
        name: 'Laura Martinez',
        age: 25,
        review: 'The group classes here are so much fun! It feels like working out with friends rather than a chore.',
        image: 'laura.jpg',
    },

    {
        name: 'Michael Brown',
        age: 50,
        review: 'As I entered my 50s, I realized the importance of staying active. This gym has helped me maintain my strength and vitality.',
        image: 'michael.jpg',
    },
    {
        name: 'Jessica Lee',
        age: 31,
        review: "The trainers here genuinely care about your progress and well-being. It's like having a personal cheerleader!",
        image: 'sarah.jpg',
    },
    {
        name: 'Daniel Nguyen',
        age: 29,
        review: "I've achieved fitness milestones I never thought possible, all thanks to the expert guidance and encouragement from this gym.",
        image: 'david.jpg',
    },
    {
        name: 'Amanda Wilson',
        age: 38,
        review: "After having kids, I struggled to get back into shape. But this gym's family-friendly environment made it easier for me to prioritize my health.",
        image: 'laura.jpg',
    },
    {
        name: 'Chris Thompson',
        age: 45,
        review: "At 45, I'm stronger and more confident than ever before. This gym has helped me rediscover my passion for fitness.",
        image: 'mark.png',
    },
    {
        name: 'Sophia Garcia',
        age: 27,
        review: 'The variety of equipment and workout options here keep me motivated to push my limits and achieve my fitness goals.',
        image: 'emily.jpg',
    },
    {
        name: 'Kevin Davis',
        age: 33,
        review: "I've tried many gyms in the past, but none compare to the sense of community and support I've found here.",
        image: 'michael.jpg',
    },
    {
        name: 'Rachel Carter',
        age: 22,
        review: "As a college student, staying active is essential for my overall well-being. This gym's student-friendly rates make it accessible for me.",
        image: 'sarah.jpg',
    },
    {
        name: 'Alex Johnson',
        age: 48,
        review: 'After a health scare, I knew I needed to prioritize my fitness. Joining this gym was a turning point in my journey to better health.',
        image: 'mark.png',
    },
    {
        name: 'Samantha Miller',
        age: 36,
        review: 'This gym has become my second home. The positive atmosphere and encouragement from staff and members keep me coming back for more.',
        image: 'laura.jpg',
    },
]
