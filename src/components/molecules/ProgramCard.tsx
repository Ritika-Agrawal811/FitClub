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
                'pb-14 pt-8',
                'relative bg-gray-900',
                'before:absolute before:-bottom-12 before:-right-12 before:h-24 before:w-24 before:rotate-45 before:bg-white'
            )}>
            <h3 className={clsx('text-2xl ', 'text-center font-medium uppercase tracking-wider text-orange-400')}>
                {title}
            </h3>
            <p className="mt-8 px-6 text-gray-100">{description}</p>
            <div
                className={clsx(
                    'h-24 w-24',
                    'flex items-center justify-center',
                    'absolute -bottom-14 left-1/2 -translate-x-1/2',
                    'mx-auto rounded-full bg-orange-400 outline outline-4 outline-offset-8 outline-orange-600'
                )}>
                <Icon type={icon} className="h-12 w-24 fill-white" />
            </div>
            <span className="absolute -bottom-20 left-3 text-6xl font-bold text-orange-600">0{index + 1}</span>
        </article>
    )
}

export default ProgramCard
