import clsx from 'clsx'
import { Direction, Variant } from '@/types/common'

// components
import Icon from './Icon'

type NavigateButtonProps = {
    className?: string
    variant: Variant
    type: Direction
    onClick?: () => void
}

const NavigateButton = ({ variant, className, type, onClick }: NavigateButtonProps) => {
    return (
        <div
            className={clsx(
                'h-20 w-20',
                'cursor-pointer rounded-full font-bold',
                'flex flex-col items-center justify-center',
                'relative z-10 overflow-hidden transition duration-300',
                'before:absolute before:left-1/2 before:top-1/2 before:-z-10 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:duration-500',
                'before:h-0 before:w-0 hover:before:h-[120%] hover:before:w-[120%]',
                className,
                navigateButtonVariants[variant]
            )}
            onClick={onClick}>
            <Icon type={type === 'prev' ? 'ARROW_LEFT' : 'ARROW_RIGHT'} className="text-3xl" />
            <span className="uppercase">{type}</span>
        </div>
    )
}

export default NavigateButton

const navigateButtonVariants = {
    fill: 'bg-gray-900 border-2 border-gray-900 text-white hover:text-gray-900 before:bg-white',
    outline: 'border-4 border-orange-400 text-orange-400 hover:border-white hover:text-white before:bg-orange-400',
}
