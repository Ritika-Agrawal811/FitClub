import clsx from 'clsx'

type ButtonProps = {
    label: string
    onClick?: () => void
    className?: string
    size?: 'small' | 'normal' | 'big'
}

const Button = ({ label, className, onClick, size = 'normal' }: ButtonProps) => {
    return (
        <button
            className={clsx(
                'relative z-10 cursor-pointer overflow-hidden',
                'font-medium capitalize text-white lg:text-lg',
                'before:absolute before:left-1/2 before:top-1/2 before:-z-10 before:h-[120%] before:w-[120%] before:-translate-x-1/2 before:-translate-y-1/2 before:bg-orange-600 before:duration-300',
                'hover:bg-transparent hover:before:rotate-180',
                buttonStyles.size[size],
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
}
