import clsx from 'clsx'

// components
import Icon from './Icon'

type NavigateButtonProps = {
    className?: string
    variant: 'fill' | 'outline'
    type: 'next' | 'prev'
    onClick?: () => void
}

const NavigateButton = ({ variant, className, type, onClick }: NavigateButtonProps) => {
    return (
        <div
            className={clsx(
                'h-20 w-20',
                'rounded-full font-bold',
                'flex flex-col items-center justify-center',
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
    fill: 'bg-gray-900 text-white',
    outline: 'border-4 border-orange-400 text-orange-400',
}
