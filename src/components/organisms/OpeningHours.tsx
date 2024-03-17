import clsx from 'clsx'

// components
import Image from 'next/image'
import Wrapper from '@/components/atoms/Wrapper'
import StrokeText from '@/components/atoms/StrokeText'
import Icon from '@/components/atoms/Icon'

const OpeningHours = () => {
    return (
        <Wrapper
            variant="main"
            className={clsx(
                'relative',
                'before:absolute before:inset-0 before:-z-10 before:opacity-50',
                'before:bg-gradient-to-t before:from-orange-400'
            )}>
            <Image
                src="/gym-equipment.jpg"
                alt=""
                width={1000}
                height={500}
                className={clsx('absolute left-0 top-0 -z-20', 'h-full w-full object-cover', 'opacity-90 grayscale')}
            />
            <Wrapper variant="section" className="grid grid-cols-3">
                <div>
                    <h3 className={clsx('text-2xl', 'font-bold uppercase tracking-wide text-white')}>
                        Keep your body <br />
                        <StrokeText title="fit and strong" className="text-4xl" />
                    </h3>
                    <p
                        className={clsx(
                            'ml-6 mt-10',
                            'relative w-80',
                            'bg-white bg-opacity-50 p-4 text-xl font-bold tracking-wide'
                        )}>
                        <Icon
                            type="QUOTES"
                            className={clsx('h-28 w-28', 'fill-orange-600', 'absolute -left-20 -top-10')}
                        />
                        Strive to keep your body fit and strong, for it is the vessel that carries your dreams forward.
                        <Icon
                            type="QUOTES"
                            className={clsx(
                                'h-28 w-28',
                                '-scale-x-100 fill-orange-600',
                                'absolute -bottom-14 -right-4'
                            )}
                        />
                    </p>
                </div>
                <div
                    className={clsx(
                        'p-6',
                        'border-8 border-orange-600',
                        'outline outline-8 outline-orange-600',
                        'bg-gray-900 bg-opacity-50',
                        'flex flex-col items-center justify-center gap-4',
                        'text-white'
                    )}>
                    <h3 className="text-2xl font-medium uppercase tracking-wide">Opening Hours</h3>
                    <p>From Monday To Friday</p>
                    <p className="text-2xl font-bold">
                        8 <sup>AM</sup> - 8 <sup>PM</sup>
                    </p>
                    <hr className="h-px w-1/2" />
                    <p>Saturday and Sunday</p>
                    <p className="text-2xl font-bold">
                        7 <sup>AM</sup> - 9 <sup>PM</sup>
                    </p>
                </div>
                <div className="flex items-center justify-end">
                    <div>
                        <h3 className={clsx('text-2xl', 'font-bold uppercase tracking-wide text-white')}>
                            Unleash <br />
                            <StrokeText title="YOUR POTENTIAL" className="text-4xl" />
                        </h3>
                        <p
                            className={clsx(
                                'ml-6 mt-10',
                                'relative w-80',
                                'bg-white bg-opacity-50 p-4 text-xl font-bold tracking-wide'
                            )}>
                            <Icon
                                type="QUOTES"
                                className={clsx('h-28 w-28', 'fill-orange-600', 'absolute -left-20 -top-10')}
                            />
                            Your body can withstand almost anything. It is your mind you have to convince.
                            <Icon
                                type="QUOTES"
                                className={clsx(
                                    'h-28 w-28',
                                    '-scale-x-100 fill-orange-600',
                                    'absolute -bottom-16 -right-10'
                                )}
                            />
                        </p>
                    </div>
                </div>
            </Wrapper>
        </Wrapper>
    )
}

export default OpeningHours
