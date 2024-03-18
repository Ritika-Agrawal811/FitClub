import clsx from 'clsx'
import { Icons } from '../atoms/Icon'

// components
import Wrapper from '@/components/atoms/Wrapper'
import StrokeText from '@/components/atoms/StrokeText'
import ProgramCard from '@/components/molecules/ProgramCard'

const Programs = () => {
    return (
        <Wrapper variant="main" className={clsx('h-[475px]', 'bg-texture bg-primary')} id="programs">
            <h2 className={clsx('text-6xl', 'text-center font-bold uppercase text-white')}>
                Explore Our <StrokeText title="Programs" />
            </h2>

            <Wrapper variant="section" className="grid grid-cols-4 gap-8">
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
