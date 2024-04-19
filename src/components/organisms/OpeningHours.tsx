import clsx from 'clsx'

// components
import Image from 'next/image'
import Wrapper from '@/components/atoms/Wrapper'
import QuoteBlock from '@/components/molecules/QuoteBlock'

const OpeningHours = () => {
    return (
        <Wrapper
            variant='main'
            className={clsx(
                'relative',
                'before:absolute before:inset-0 before:-z-10 before:opacity-50',
                'before:bg-gradient-to-t before:from-gray-500'
            )}>
            <Image
                src='/gym-equipment.jpg'
                alt=''
                width={1000}
                height={500}
                className={clsx('absolute left-0 top-0 -z-20', 'h-full w-full object-cover', 'opacity-80 grayscale')}
            />
            <Wrapper variant='section' className={clsx('grid lg:grid-cols-3', 'gap-10 lg:gap-6 xl:gap-10 2xl:gap-16')}>
                {quotes.map((quote, index) => {
                    return <QuoteBlock key={index} {...quote} />
                })}

                <div
                    className={clsx(
                        'p-6',
                        'border-8 border-orange-600',
                        'outline outline-8 outline-orange-600',
                        'bg-gray-900 bg-opacity-50',
                        'flex flex-col items-center justify-center gap-4',
                        'text-white lg:col-start-2 lg:row-start-1'
                    )}>
                    <h3 className='text-2xl font-medium uppercase tracking-wide'>Opening Hours</h3>
                    <p>From Monday To Friday</p>
                    <p className='text-2xl font-bold'>
                        8 <sup>AM</sup> - 8 <sup>PM</sup>
                    </p>
                    <hr className='h-px w-1/2' />
                    <p>Saturday and Sunday</p>
                    <p className='text-2xl font-bold'>
                        7 <sup>AM</sup> - 9 <sup>PM</sup>
                    </p>
                </div>
            </Wrapper>
        </Wrapper>
    )
}

export default OpeningHours

const quotes = [
    {
        title: 'Keep your body',
        strokeText: 'fit and strong',
        quote: 'Strive to keep your body fit and strong, for it is the vessel that carries your dreams forward.',
    },
    {
        title: 'Unleash',
        strokeText: 'YOUR POTENTIAL',
        quote: ' Your body can withstand almost anything. It is your mind you have to convince.',
        className: 'row-start-3 lg:row-start-1 lg:col-start-3',
    },
]
