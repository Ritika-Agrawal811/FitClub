import React from 'react'
import clsx from 'clsx'
import { IconsList } from '@/types/common'

// components
import Icon from '@/components/atoms/Icon'

type ProgramCardProps = {
    title: string
    description: string
    icon: IconsList
    index: number
}

const ProgramCard: React.FC<ProgramCardProps> = ({ title, description, icon, index }) => {
    return (
        <article
            className={clsx(
                'mx-auto sm:w-90 md:w-full',
                'pb-14 pt-8 sm:pb-20',
                'relative bg-gray-900',
                'before:absolute before:bg-white before:clip-right-triangle',
                'before:-bottom-1 before:-right-1 before:h-24 before:w-24'
            )}>
            <h3
                className={clsx(
                    'text-xl sm:text-2xl lg:text-3xl 2xl:text-2xl',
                    'text-center font-medium uppercase tracking-wider text-orange-400'
                )}>
                {title}
            </h3>
            <p className={clsx('mt-8 px-6 text-gray-100', 'text-sm sm:text-base lg:text-lg 2xl:text-base 3xl:text-lg')}>
                {description}
            </p>
            <div
                className={clsx(
                    'h-20 w-20 sm:h-24 sm:w-24',
                    'flex items-center justify-center',
                    'absolute -bottom-14 left-1/2 -translate-x-1/2',
                    'mx-auto rounded-full bg-orange-400 outline outline-4 outline-offset-8 outline-orange-600'
                )}>
                <Icon type={icon} className="h-10 w-20 fill-white sm:h-12 sm:w-24" />
            </div>
            <span
                className={clsx(
                    'absolute -bottom-20 md:-bottom-24 2xl:-bottom-20',
                    'left-4 sm:left-20 md:left-4 lg:left-10 xl:left-16 2xl:left-3',
                    'text-5xl sm:text-6xl lg:text-7xl 2xl:text-6xl',
                    'font-bold text-orange-600'
                )}>
                0{index + 1}
            </span>
        </article>
    )
}

export default ProgramCard
