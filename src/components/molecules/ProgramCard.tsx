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
                'mx-auto sm:w-full',
                'pb-14 pt-8 md:pb-20 lg:pb-16',
                'relative bg-gray-900',
                'before:absolute before:bg-white before:clip-right-triangle',
                'before:-bottom-1 before:-right-1 before:h-24 before:w-24'
            )}>
            <h3
                className={clsx(
                    'text-xl md:text-2xl 2xl:text-2xl',
                    'text-center font-medium uppercase tracking-wider text-orange-400'
                )}>
                {title}
            </h3>
            <p className={clsx('mt-8 px-6 text-gray-100', 'text-sm md:text-base 3xl:text-lg')}>{description}</p>
            <div
                className={clsx(
                    'h-20 w-20 md:h-24 md:w-24',
                    'flex items-center justify-center',
                    'absolute -bottom-14 left-1/2 -translate-x-1/2',
                    'mx-auto rounded-full bg-orange-400 outline outline-4 outline-offset-8 outline-orange-600'
                )}>
                <Icon type={icon} className="h-10 w-20 fill-white md:h-12 md:w-20" />
            </div>
            <span
                className={clsx(
                    'absolute -bottom-16 xs:-bottom-20 sm:-bottom-16 md:-bottom-20',
                    'left-2 xs:left-4 sm:left-2 lg:left-10 xl:left-16 2xl:left-3',
                    'text-5xl xs:text-6xl sm:text-5xl md:text-6xl',
                    'font-bold text-orange-600'
                )}>
                0{index + 1}
            </span>
        </article>
    )
}

export default ProgramCard
