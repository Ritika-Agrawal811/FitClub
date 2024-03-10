import clsx from 'clsx'

type ButtonProps = {
    label: string
    onClick?: () => void
    variant: 'outline' | 'fill'
    size?: 'small' | 'normal' | 'big'
}

const Button = ({ variant, label, onClick, size = 'normal' }: ButtonProps) => {
    return (
        <button
            className={clsx(
                'cursor-pointer capitalize',
                'text-lg font-medium text-white',
                buttonStyles.size[size],
                buttonStyles.variant[variant]
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
        fill: 'bg-orange',
        outline: 'border-2 border-orange',
    },
}
