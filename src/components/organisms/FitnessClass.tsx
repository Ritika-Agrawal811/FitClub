import clsx from 'clsx'

// components
import Wrapper from '@/components/atoms/Wrapper'
import Image from 'next/image'
import NavigateButton from '@/components/atoms/NavigateButton'

const FitnessClass = () => {
    return (
        <Wrapper variant="main" className="pt-0">
            <h2 className={clsx('text-6xl', 'text-center font-bold uppercase text-gray-900')}>
                Our <span className="text-orange-400">Fitness Class</span>
            </h2>
            <Wrapper variant="section">
                <ul className="flex justify-around">
                    {tabs.map((tab, index) => {
                        return (
                            <li key={index} className="text-2xl font-bold uppercase text-gray-500">
                                {tab}
                            </li>
                        )
                    })}
                </ul>

                <section className={clsx('mt-14', 'grid grid-cols-6 gap-10')}>
                    <figure className="col-span-3">
                        <Image
                            src="/person-lifting-weights.png"
                            alt="a person lifting weights"
                            width={500}
                            height={300}
                            className="h-full w-full border-8 border-orange-600 object-cover"
                        />
                    </figure>

                    <div className={clsx('col-span-2', 'flex items-center')}>
                        <div>
                            <h3 className="text-4xl font-bold uppercase text-gray-900">Bodypump</h3>
                            <p className="my-4 text-gray-600">
                                This barbell exercise targets all of your major muscles based on the rep effect, this
                                proven formula will train your muscles using lights to moderate weights for high rep
                                exercises which is a secret to developing atheltic muscles
                            </p>

                            {/* <Image
                                src="/t-image1.png"
                                alt=""
                                width={500}
                                height={300}
                                className="h-16 w-16 rounded-full"
                            /> */}
                        </div>
                    </div>
                    <div className={clsx('rounded-3xl bg-gray-900', 'flex flex-col items-center justify-center gap-6')}>
                        <NavigateButton variant="outline" className="-mt-8 " type="next" />
                        <h3 className="text-2xl font-medium uppercase text-white">Bodycombat</h3>
                    </div>
                </section>
            </Wrapper>
        </Wrapper>
    )
}

export default FitnessClass

const tabs = ['cardio', 'Signature Class', 'Strength and Conditioning', 'Mind and Body', 'Cycling']
