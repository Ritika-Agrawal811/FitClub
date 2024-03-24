import clsx from 'clsx'

// components
import Wrapper from '@/components/atoms/Wrapper'
import Image from 'next/image'
import NavigateButton from '@/components/atoms/NavigateButton'

const FitnessClass = () => {
    return (
        <Wrapper variant="main">
            <h2
                className={clsx(
                    'text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-7xl',
                    'text-center font-bold uppercase text-gray-900'
                )}>
                Our <span className="text-orange-400">Fitness Class</span>
            </h2>
            <Wrapper variant="section">
                <ul className="hidden justify-around lg:flex">
                    {tabs.map((tab, index) => {
                        return (
                            <li
                                key={index}
                                className={clsx(
                                    'text-lg xl:text-xl 2xl:text-2xl',
                                    'font-bold uppercase text-gray-500'
                                )}>
                                {tab}
                            </li>
                        )
                    })}
                </ul>

                <section className={clsx('mt-14', 'grid grid-cols-6', 'gap-6 xl:gap-10')}>
                    <figure className="col-span-6 lg:col-span-3">
                        <Image
                            src="/person-lifting-weights.png"
                            alt="a person lifting weights"
                            width={500}
                            height={300}
                            className="h-full w-full border-8 border-orange-600 object-cover"
                        />
                    </figure>

                    <div className={clsx('col-span-6 sm:col-span-4 lg:col-span-2', 'flex items-center')}>
                        <div>
                            <h3
                                className={clsx(
                                    'text-2xl sm:text-3xl 2xl:text-4xl 3xl:text-5xl',
                                    'font-bold uppercase text-gray-900'
                                )}>
                                Bodypump
                            </h3>
                            <p className={clsx('my-4 text-gray-600', 'text-sm xs:text-base xl:text-lg 3xl:text-xl')}>
                                This barbell exercise targets all of your major muscles based on the rep effect, this
                                proven formula will train your muscles using lights to moderate weights for high rep
                                exercises which is a secret to developing atheltic muscles
                            </p>

                            <Image
                                src="/testimonials/sarah.jpg"
                                alt=""
                                width={500}
                                height={300}
                                className="h-16 w-16 rounded-full object-cover"
                            />
                        </div>
                    </div>
                    <div
                        className={clsx(
                            'col-span-6 sm:col-span-2 lg:col-span-1',
                            'p-3 lg:p-0',
                            'flex flex-row-reverse items-center justify-center gap-6 sm:flex-col',
                            'rounded-xl md:rounded-3xl',
                            'bg-gray-900'
                        )}>
                        <NavigateButton variant="outline" className="lg:-mt-8" type="next" />
                        <h3
                            className={clsx(
                                'text-xl lg:text-base xl:text-lg 2xl:text-2xl',
                                'font-medium uppercase text-white'
                            )}>
                            Bodycombat
                        </h3>
                    </div>
                </section>
            </Wrapper>
        </Wrapper>
    )
}

export default FitnessClass

const tabs = ['cardio', 'Signature Class', 'Strength and Conditioning', 'Mind and Body', 'Cycling']
