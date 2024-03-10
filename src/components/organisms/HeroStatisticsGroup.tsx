import clsx from 'clsx'

// components
import StatCard from '@/components/molecules/StatCard'

const HeroStatisticsGroup = () => {
    return (
        <div className={clsx('flex gap-10', 'mt-10')}>
            {statistics.map((stat, index) => {
                return <StatCard key={index} {...stat} />
            })}
        </div>
    )
}

export default HeroStatisticsGroup

const statistics = [
    {
        statCount: 140,
        title: 'expert coaches',
    },
    {
        statCount: 978,
        title: 'members joined',
    },
    {
        statCount: 50,
        title: 'fitness programs',
    },
]
