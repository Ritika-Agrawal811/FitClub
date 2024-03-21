import clsx from 'clsx'

type WrapperProps = {
    id?: string
    className?: string
    children: React.ReactNode
    variant: 'main' | 'section'
}

const Wrapper: React.FC<WrapperProps> = ({ children, id, className, variant }) => {
    return (
        <section id={id} className={clsx(wrapperVariants[variant], className)}>
            {children}
        </section>
    )
}

export default Wrapper

const wrapperVariants = {
    main: 'py-10 lg:py-20',
    section: 'my-10 lg:my-16 w-90 3xl:w-85 4xl:w-3/4 5xl:w-3/5 mx-auto',
}
