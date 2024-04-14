import clsx from 'clsx'

type StatCardProps = {
    statCount: number
    title: string
}

const StatCard: React.FC<StatCardProps> = ({ statCount, title }) => {
    return (
        <article
            className={clsx(
                'w-full md:w-1/4 xl:w-1/5',
                'flex flex-col items-center gap-2 4xl:gap-4',
                'border border-white',
                'py-3 lg:py-4 4xl:py-6'
            )}>
            <h4 className={clsx('text-2xl lg:text-3xl xl:text-4xl 4xl:text-5xl', 'font-bold text-orange-400')}>
                {statCount}
                <span className="text-white">+</span>
            </h4>
            <p className={clsx('uppercase text-gray-100', 'text-sm xl:text-base 4xl:text-lg')}>{title}</p>
        </article>
    )
}

export default StatCard
