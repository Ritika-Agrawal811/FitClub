import clsx from 'clsx'
import { IconsList, Position } from '@/types/common'

// components
import Icon from './Icon'

type TagProps = {
    label: string[]
    icon: IconsList
    position: Position
    className: string
}

const Tag: React.FC<TagProps> = ({ label, icon, position, className }) => {
    const [firstLine, secondLine] = label
    return (
        <div
            className={clsx(
                'flex items-center gap-2 xs:gap-4 lg:gap-6',
                'px-3 py-2 sm:px-4 sm:py-3 2xl:px-6',
                'absolute w-fit rounded-xl shadow-xl',
                className,
                positions[position]
            )}>
            <Icon
                type={icon}
                className={clsx('h-10 w-10 xs:h-12 xs:w-12 lg:h-14 lg:w-14 2xl:h-16 2xl:w-16', 'fill-orange-400')}
            />
            <p className="font-bold">
                {firstLine} <br />{' '}
                {secondLine && <span className="text-sm xs:text-base 2xl:text-lg">{secondLine}</span>}
            </p>
        </div>
    )
}

export default Tag

const positions = {
    'bottom-left': 'left-4 sm:left-10 2xl:-left-24 -bottom-4 sm:-bottom-10 2xl:bottom-14',
    'bottom-right': 'right-4 lg:right-8 2xl:-right-12 -bottom-4 xs:bottom-4 lg:-bottom-10 2xl:bottom-20',
    'top-right': 'right-4 sm:right-10 2xl:-right-12 -top-4 sm:-top-10 2xl:top-14',
}
