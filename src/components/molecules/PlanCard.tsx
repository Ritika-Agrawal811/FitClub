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
                'flex flex-col items-center justify-between gap-6 lg:flex-row',
                'my-2 p-4 2xl:my-4 3xl:px-6 3xl:py-8',
                'border-b border-white last:border-none',
                'transition-colors duration-150 hover:bg-gray-600',
                isActive ? 'text-white' : 'text-gray-200'
            )}
            onClick={onClick}>
            <div className='flex flex-col items-center lg:items-start'>
                <h3
                    className={clsx(
                        'text-xl xs:text-2xl sm:text-3xl 2xl:text-4xl 3xl:text-5xl',
                        'text-center font-bold uppercase tracking-wide lg:text-left'
                    )}>
                    {name}
                </h3>
                <div
                    className={clsx(
                        'ml-6 mt-3',
                        'flex flex-col gap-2 xs:flex-row xs:flex-wrap xs:gap-x-7 ',
                        isActive ? 'text-gray-100' : 'text-gray-200'
                    )}>
                    {points.map((point, index) => (
                        <p
                            key={index}
                            className={clsx(
                                'sm:text-lg lg:text-base 2xl:text-lg 3xl:text-xl',
                                'relative text-nowrap capitalize',
                                'before:absolute before:-left-4 before:top-1/2 before:h-2 before:w-2 before:-translate-y-1/2 before:rounded-full',
                                isActive ? 'before:bg-gray-100' : 'before:bg-gray-200'
                            )}>
                            {point}
                        </p>
                    ))}
                </div>
            </div>
            <div className={clsx('flex flex-col 2xl:flex-row', 'items-center gap-6')}>
                <div
                    className={clsx(
                        'h-32 w-32 2xl:h-36 2xl:w-36',
                        'rotate-12 rounded-full border-4 border-gray-100 bg-orange-400 text-white',
                        'flex flex-col items-center justify-center',
                        'relative before:absolute before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-black',
                        'transition duration-150 hover:rotate-20 hover:scale-105',
                        isActive ? 'grayscale-0' : 'grayscale'
                    )}>
                    <span className='text-xs uppercase 2xl:text-sm'>start from</span>
                    <span className='text-4xl font-bold 2xl:text-5xl'>${price}</span>
                    <span className='text-xs uppercase 2xl:text-sm'>/month</span>
                </div>
                <h4 className={clsx('text-2xl lg:text-lg 2xl:text-xl 3xl:text-2xl', 'text-center capitalize')}>
                    {category} plan
                </h4>
            </div>
        </article>
    )
}

export default PlanCard
