import clsx from 'clsx'

type PlanCardProps = {
    plan: {
        name: string
        points: string[]
        category: string
    }
}

const PlanCard: React.FC<PlanCardProps> = ({ plan }) => {
    const { name, points, category } = plan
    return (
        <article
            className={clsx(
                'flex items-center justify-between',
                'text-white',
                'py-8',
                'border-b border-white last:border-none'
            )}>
            <div>
                <h3 className="text-4xl font-bold uppercase tracking-wide">{name}</h3>
                <div className="ml-6 mt-3 flex gap-7 text-gray-100">
                    {points.map((point, index) => (
                        <p
                            key={index}
                            className={clsx(
                                'text-nowrap text-lg capitalize',
                                'relative',
                                'before:absolute before:-left-4 before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full before:bg-gray-100'
                            )}>
                            {point}
                        </p>
                    ))}
                </div>
            </div>
            <div className="flex items-center gap-6">
                <div
                    className={clsx(
                        'h-36 w-36',
                        'rotate-12 rounded-full border-4 border-gray-100 bg-orange-400 text-white',
                        'flex flex-col items-center justify-center',
                        'relative before:absolute before:top-2 before:h-2 before:w-2  before:rounded-full before:bg-black'
                    )}>
                    <span className="uppercase">start from</span>
                    <span className="text-5xl font-bold">$99</span>
                    <span className="uppercase">/month</span>
                </div>
                <h4 className="text-xl">{category}</h4>
            </div>
        </article>
    )
}

export default PlanCard
