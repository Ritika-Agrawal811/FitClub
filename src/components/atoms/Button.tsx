import clsx from 'clsx'
import { Variant } from '@/types/common'

type ButtonProps = {
    label: string
    onClick?: () => void
    className?: string
    variant: Variant
    size?: 'small' | 'normal' | 'big'
}

const Button = ({ variant, label, className, onClick, size = 'normal' }: ButtonProps) => {
    return (
        <button
            className={clsx(
                'relative cursor-pointer',
                'text-lg font-medium capitalize text-white',
                'z-10 overflow-hidden transition duration-300',
                'before:absolute before:left-1/2 before:top-1/2 before:-z-10 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:duration-500',
                'before:h-0 before:w-0 hover:before:h-[120%] hover:before:w-[120%]',
                buttonStyles.size[size],
                buttonStyles.variant[variant],
                className
            )}
            onClick={onClick}>
            {label}
        </button>
    )
}

export default Button

const buttonStyles = {
    size: {
        small: 'px-6 py-2',
        normal: 'px-8 py-3',
        big: 'px-10 py-3.5',
    },
    variant: {
        fill: 'bg-orange-600 border-2 border-orange-600 hover:text-orange-600 before:bg-white',
        outline: 'border-2 border-orange-400 before:bg-orange-400',
    },
}
