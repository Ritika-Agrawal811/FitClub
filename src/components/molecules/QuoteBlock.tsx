import clsx from 'clsx'

// components
import Icon from '@/components/atoms/Icon'
import StrokeText from '@/components/atoms/StrokeText'

type QuoteBlockProps = {
    title: string
    strokeText: string
    quote: string
    className?: string
}

const QuoteBlock: React.FC<QuoteBlockProps> = ({ title, strokeText, quote, className }) => {
    return (
        <div className={clsx('flex flex-col', className)}>
            <h3
                className={clsx(
                    'text-xl xs:text-2xl lg:text-xl 2xl:text-2xl',
                    'bg-orange-400 p-1 text-center font-bold uppercase tracking-wide text-white 2xl:p-2'
                )}>
                {title} <br />
                <StrokeText
                    title={strokeText}
                    className={clsx('text-2xl xs:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl', 'text-nowrap')}
                />
            </h3>
            <p
                className={clsx(
                    'mt-10',
                    'xs:text-lg 2xl:text-xl',
                    'p-2 xs:p-4 sm:p-6 lg:p-4',
                    'flex flex-grow items-center',
                    'relative bg-white bg-opacity-50 text-center font-bold tracking-wide'
                )}>
                {quote}
                {['top-left', 'bottom-right'].map((item, index) => {
                    return (
                        <Icon
                            key={index}
                            type="QUOTES"
                            className={clsx(
                                'h-12 w-12 xs:h-16 xs:w-16 2xl:h-20 2xl:w-20',
                                'absolute fill-orange-600',
                                quotesPositions[item as keyof typeof quotesPositions]
                            )}
                        />
                    )
                })}
            </p>
        </div>
    )
}

export default QuoteBlock

const quotesPositions = {
    'top-left': '-left-6 -top-4 2xl:-left-8 2xl:-top-8',
    'bottom-right': '-bottom-4 -right-4 2xl:-bottom-8 2xl:-right-8 -scale-x-100',
}
