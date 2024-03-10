import clsx from 'clsx'

type StrokeTextProps = {
    title: string
    className?: string
}

const StrokeText: React.FC<StrokeTextProps> = ({ title, className }) => {
    return <span className={clsx('font-arial tracking-wider text-transparent stroke-text', className)}>{title}</span>
}

export default StrokeText
