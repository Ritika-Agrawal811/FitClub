import clsx from 'clsx'

type PlanCardProps = {
    isActive: boolean
    name: string
    points: string[]
    category: string
    price: number
    onClick: () => void
}

const PlanCard: React.FC<PlanCardProps> = ({ name, points, category, price, isActive, onClick }) => {
    return (
        <article
            className={clsx(
                'cursor-pointer',
                'flex items-center justify-between',
                'my-4 p-4',
                'border-b border-white last:border-none',
                'transition-colors duration-150 hover:bg-gray-600',
                isActive ? 'text-white' : 'text-gray-200'
            )}
            onClick={onClick}>
            <div>
                <h3 className="text-4xl font-bold uppercase tracking-wide">{name}</h3>
                <div className={clsx('ml-6 mt-3 flex gap-7', isActive ? 'text-gray-100' : 'text-gray-200')}>
                    {points.map((point, index) => (
                        <p
                            key={index}
                            className={clsx(
                                'text-nowrap text-lg capitalize',
                                'relative',
                                'before:absolute before:-left-4 before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full',
                                isActive ? 'before:bg-gray-100' : 'before:bg-gray-200'
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
                        'relative before:absolute before:top-2 before:h-2 before:w-2  before:rounded-full before:bg-black',
                        'transition duration-150 hover:rotate-20 hover:scale-105',
                        isActive ? 'opacity-100' : 'opacity-0'
                    )}>
                    <span className="uppercase">start from</span>
                    <span className="text-5xl font-bold">${price}</span>
                    <span className="uppercase">/month</span>
                </div>
                <h4 className="text-xl capitalize">{category} plan</h4>
            </div>
        </article>
    )
}

export default PlanCard
