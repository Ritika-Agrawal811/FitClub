import clsx from 'clsx'
import { Icons } from '../atoms/Icon'

// components
import Wrapper from '@/components/atoms/Wrapper'
import StrokeText from '@/components/atoms/StrokeText'
import ProgramCard from '@/components/molecules/ProgramCard'

const Programs = () => {
    return (
        <Wrapper
            variant="main"
            className={clsx('h-[18em] xs:h-[16em] sm:h-[18em] lg:h-[26em] 2xl:h-[30em]', 'bg-texture bg-primary')}
            id="programs">
            <h2
                className={clsx(
                    'text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-7xl',
                    'text-center font-bold uppercase text-white'
                )}>
                Explore Our <StrokeText title="Programs" />
            </h2>

            <Wrapper
                variant="section"
                className={clsx('grid md:grid-cols-2 2xl:grid-cols-4', 'gap-x-12 gap-y-32 2xl:gap-8')}>
                {programs.map((program, index) => {
                    return <ProgramCard key={index} index={index} {...program} />
                })}
            </Wrapper>
        </Wrapper>
    )
}

export default Programs

const programs = [
    {
        title: 'Strength Training',
        description:
            "Our Strength Training program is designed to help you build muscle, increase strength, and improve overall fitness. Whether you're a beginner or an experienced lifter, our expert trainers will guide you through personalized workouts tailored to your goals and fitness level.",
        icon: Icons.DUMBBELL,
    },

    {
        title: 'Cardio Training',
        description:
            "Elevate your fitness journey with our Cardio Training program. Experience the exhilaration of high-energy workouts designed to boost your endurance, torch calories, and enhance cardiovascular health. Join us now and let's stride towards a healthier, happier you.",
        icon: Icons.RUNNING_MAN,
    },
    {
        title: 'Fat Burning',
        description:
            'Welcome to our Fat Burning program, where we ignite your metabolism and sculpt your body into its leanest form. Say goodbye to stubborn fat and hello to a fitter, more confident you.  Embrace the fire within and join us on this transformative path to a healthier lifestyle.',
        icon: Icons.FIRE,
    },
    {
        title: 'Health Fitness',
        description:
            'Embark on a holistic journey to wellness with our Health Fitness program. Discover the power of balanced nutrition, mindful movement, and mental well-being as we guide you towards optimal health. Join our community and unlock the secrets to living a fulfilling life.',
        icon: Icons.HEARTBEAT,
    },
]
