import { useState } from 'react'
import clsx from 'clsx'

// components
import Wrapper from '@/components/atoms/Wrapper'
import CarouselSlide from '@/components/molecules/CarouselSlide'

const FitnessClass = () => {
    const [activeTab, setActiveTab] = useState(classes[0].title)
    const [workouts, setWorkouts] = useState<Workout[]>(classes[0].workouts)

    // shows the correct workouts when a tab is clicked
    const tabsClickHandler = (course: Courses) => {
        const { workouts } = classes.filter((item) => item.title === course)[0]
        setWorkouts(workouts)
        setActiveTab(course)
    }
    return (
        <Wrapper variant='main'>
            <h2
                className={clsx(
                    'text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-7xl',
                    'text-center font-bold uppercase text-gray-900'
                )}>
                Our <span className='text-orange-400'>Fitness Class</span>
            </h2>
            <Wrapper variant='section'>
                {/* tabs */}
                <div className='overflow-x-scroll lg:overflow-hidden'>
                    <ul className='flex justify-around gap-6 lg:gap-0'>
                        {classes.map((course, index) => {
                            return (
                                <li
                                    key={index}
                                    className={clsx(
                                        'md:text-lg xl:text-xl 2xl:text-2xl',
                                        'shrink-0 cursor-pointer border-b-4 font-bold uppercase text-gray-500',
                                        'duration-75 hover:text-orange-400',
                                        activeTab === course.title
                                            ? 'border-orange-400 text-orange-400'
                                            : 'border-transparent'
                                    )}
                                    onClick={() => tabsClickHandler(course.title)}>
                                    {course.title}
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <CarouselSlide workouts={workouts} />
            </Wrapper>
        </Wrapper>
    )
}

export default FitnessClass

type Courses = 'cardio' | 'signature class' | 'strength and conditioning' | 'mind and body' | 'cycling'

type Workout = {
    title: string
    description: string
    image: string
}

type FitnessClass = {
    title: Courses
    workouts: Workout[]
}

const classes: FitnessClass[] = [
    {
        title: 'cardio',
        workouts: [
            {
                title: 'Treadmill Running',
                description:
                    'Running on a treadmill is a popular and effective cardio exercise that can be easily done in a gym. Whether you prefer a steady-state jog or interval sprints, the treadmill allows you to control your speed and incline to tailor the intensity of your workout.',
                image: 'treadmill-running.webp',
            },
            {
                title: 'Elliptical Trainer',
                description:
                    'The elliptical trainer offers a low-impact cardio workout that targets multiple muscle groups, including the legs, arms, and core. This machine mimics the motion of running or walking while reducing the stress on your joints, making it an ideal option for those with joint pain or injury.',
                image: 'elliptical-trainer.jpg',
            },
            {
                title: 'Stationary Bike',
                description:
                    'Cycling on a stationary bike is a convenient and effective way to get a cardiovascular workout in the gym. Whether you choose an upright bike or a recumbent bike, cycling provides a low-impact workout that targets the muscles of the legs while also improving cardiovascular fitness. ',
                image: 'stationary-bike.png',
            },
        ],
    },

    {
        title: 'signature class',
        workouts: [
            {
                title: 'HIIT Circuit',
                description:
                    'This signature class features a high-intensity interval training (HIIT) circuit combining various exercises such as burpees, squat jumps, and kettlebell swings. Participants rotate through different stations, performing each exercise at maximum effort for a set time interval, followed by a short rest period.',
                image: 'HIIT-circuit.webp',
            },
            {
                title: 'Power Yoga Flow',
                description:
                    'This signature class blends traditional yoga poses with dynamic movements and flowing sequences to create a challenging and invigorating practice. Participants move through a series of poses, focusing on breath control, alignment, and mindful movement',
                image: 'power-yoga-flow.webp',
            },
            {
                title: 'Functional Training',
                description:
                    'This signature class emphasizes functional movements and exercises that mimic real-life activities to improve strength, stability, and mobility. Participants engage in a variety of exercises using equipment such as dumbbells and TRX suspension trainers.',
                image: 'functional-training.jpg',
            },
        ],
    },
    {
        title: 'strength and conditioning',
        workouts: [
            {
                title: 'Barbell Squats',
                description:
                    'This compound exercise targets multiple major muscle groups, including the quadriceps, hamstrings, glutes, lower back, and core. By performing squats with a barbell, you can effectively strengthen and develop these muscles.',
                image: 'barbell-squats.webp',
            },
            {
                title: 'Deadlifts',
                description:
                    'Deadlifts are a fundamental strength exercise that engages various muscle groups such as the hamstrings, glutes, lower back, upper back, and core. By lifting heavy weights off the ground with proper form, deadlifts promote functional strength and muscular development.',
                image: 'deadlifts.jpg',
            },
            {
                title: 'Pull-ups',
                description:
                    'Pull-ups are a challenging bodyweight exercise that primarily targets the latissimus dorsi, biceps, upper back, and core muscles.  By gradually increasing repetitions and variations, such as wide grip or narrow grip, you can effectively build a strong and well-defined upper body.',
                image: 'pull-ups.jpg',
            },
        ],
    },
    {
        title: 'mind and body',
        workouts: [
            {
                title: 'Yoga',
                description:
                    'Yoga is a mind-body practice that combines physical postures, breathing exercises, and meditation to promote relaxation, flexibility, strength, and mental clarity. Various styles of yoga, such as Hatha, Vinyasa, and Yin, offer a range of benefits and cater to different preferences and fitness levels.',
                image: 'yoga.jpg',
            },
            {
                title: 'Tai Chi',
                description:
                    'Tai Chi is a gentle martial art originating from ancient Chinese tradition, characterized by slow and flowing movements performed with focused attention and deep breathing. This mind-body practice promotes relaxation, balance, flexibility, and coordination while fostering mindfulness and inner peace.',
                image: 'tai-chi.jpg',
            },
            {
                title: 'Pilates',
                description:
                    'Pilates is a low-impact exercise method that focuses on strengthening the core muscles, improving flexibility, and enhancing body awareness and control. Pilates targets the deep stabilizing muscles of the abdomen, back, hips, and pelvis, promoting a strong and balanced body.',
                image: 'pilates.webp',
            },
        ],
    },
    {
        title: 'cycling',
        workouts: [
            {
                title: 'Stationary Bike Training',
                description:
                    'Interval training involves alternating between periods of high-intensity effort and low-intensity recovery. This type of workout improves cardiovascular fitness, increases speed and power, and boosts calorie burning efficiency, making it an excellent exercise for cyclists looking to enhance their performance.',
                image: 'stationary-bike.png',
            },
            {
                title: 'Hill Climbing Simulation',
                description:
                    'Mimicking hill climbs on a stationary bike can help cyclists build strength and endurance for tackling challenging terrain. Hill climbing simulations can improve leg strength, muscular endurance, and mental toughness, preparing cyclists for real-world hill climbs during outdoor rides.',
                image: 'hill-climbing-simulation.jpg',
            },
            {
                title: 'Cadence Drills',
                description:
                    'Cadence refers to the revolutions per minute (RPM) of the pedals while cycling. Cadence drills involve practicing pedaling at different cadence levels to improve efficiency and technique. Cadence drills help cyclists develop leg speed, aerobic capacity, and pedal stroke mechanics, leading to improved performance and reduced risk of injury during rides.',
                image: 'cadence-drills.jpg',
            },
        ],
    },
]
