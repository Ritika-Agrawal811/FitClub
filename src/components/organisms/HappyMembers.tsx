import React from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

// components
import Wrapper from '@/components/atoms/Wrapper'
import CountUp from 'react-countup'
import Image from 'next/image'

const HappyMembers = () => {
    return (
        <Wrapper variant='main' className={clsx('relative h-[500px]', 'flex items-center justify-center')}>
            <h2
                className={clsx(
                    'text-6xl sm:text-8xl md:text-9xl 2xl:text-10xl',
                    'text-center font-bold uppercase tracking-wide text-gray-900',
                    'flex flex-col',
                    'tabular-nums'
                )}>
                {' '}
                <CountUp start={99970} end={100000} duration={5} separator=',' enableScrollSpy={true} />
                <span className='text-3xl text-orange-400 sm:text-5xl 2xl:text-6xl 3xl:text-7xl'>Happy members</span>
            </h2>

            {members.map((item, index) => {
                const { url, left, top } = item
                return (
                    <motion.figure
                        key={index}
                        variants={{
                            animate: {
                                scale: [0, 1],
                                transition: {
                                    duration: 1,
                                    delay: index * 0.5,
                                },
                            },
                        }}
                        whileInView='animate'
                        className={clsx('absolute', index > 3 && 'hidden sm:block')}
                        style={{ left: `${left}%`, top: `${top}%` }}>
                        <Image
                            src={`/testimonials/${url}`}
                            alt=''
                            width={300}
                            height={300}
                            className={clsx('rounded-full object-cover', 'h-16 w-16 2xl:h-20 2xl:w-20')}
                        />
                    </motion.figure>
                )
            })}
        </Wrapper>
    )
}

export default HappyMembers

const members = [
    {
        url: 'michael.jpg',
        left: 25,
        top: 20,
    },
    {
        url: 'david.jpg',
        left: 5,
        top: 65,
    },
    {
        url: 'emily.jpg',
        left: 55,
        top: 75,
    },

    {
        url: 'laura.jpg',
        left: 80,
        top: 20,
    },
    {
        url: 'daniel.jpg',
        left: 50,
        top: 10,
    },
    {
        url: 'sarah.jpg',
        left: 90,
        top: 70,
    },
]
