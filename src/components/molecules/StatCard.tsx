import clsx from 'clsx'

type StatCardProps = {
    statCount: number
    title: string
}

const StatCard: React.FC<StatCardProps> = ({ statCount, title }) => {
    return (
        <article className={clsx('w-1/5', 'flex flex-col items-center gap-2', 'border border-white', 'py-4')}>
            <h4 className="text-4xl font-bold text-orange">
                {statCount}
                <span className="text-white">+</span>
            </h4>
            <p className="uppercase text-gray-100">{title}</p>
        </article>
    )
}

export default StatCard
