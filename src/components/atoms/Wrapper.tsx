import clsx from 'clsx'

type WrapperProps = {
    className?: string
    children: React.ReactNode
    variant: 'main' | 'section'
}

const Wrapper: React.FC<WrapperProps> = ({ children, className, variant }) => {
    return <section className={clsx(wrapperVariants[variant], className)}>{children}</section>
}

export default Wrapper

const wrapperVariants = {
    main: 'py-28',
    section: 'my-20 w-90 mx-auto',
}
