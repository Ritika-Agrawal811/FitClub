import clsx from 'clsx'
import { useState } from 'react'

// components
import Wrapper from '@/components/atoms/Wrapper'
import StrokeText from '../atoms/StrokeText'
import PlanCard from '../molecules/PlanCard'

const Plans = () => {
    const [activePlan, setActivePlan] = useState<ActivePlan>('basic')
    return (
        <Wrapper variant='main' id='plans'>
            <Wrapper variant='section' className={clsx('bg-texture bg-primary', 'py-1 pt-16', 'rounded-3xl')}>
                <h2
                    className={clsx(
                        'text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-7xl',
                        'text-center font-bold uppercase text-white'
                    )}>
                    Choose Your <StrokeText title='Best plan' />
                </h2>

                <div className={clsx('rounded-3xl bg-primary', 'p-2 sm:p-4 xl:p-6', 'mx-auto w-90', 'my-10 lg:my-16')}>
                    {plans.map((plan, index) => {
                        return (
                            <PlanCard
                                key={index}
                                isActive={plan.category === activePlan}
                                {...plan}
                                onClick={() => setActivePlan(plan.category)}
                            />
                        )
                    })}
                </div>
            </Wrapper>
        </Wrapper>
    )
}

export default Plans

type ActivePlan = 'basic' | 'professional' | 'advanced'

type Plans = {
    name: string
    points: string[]
    category: ActivePlan
    price: number
}

const plans: Plans[] = [
    {
        name: 'starter fitness program',
        points: ['2 Days in a week', '01 sweatshirt', '01 bottle of protein'],
        category: 'basic',
        price: 79,
    },
    {
        name: 'beginner fitness program',
        points: ['3 Days in a week', '01 sweatshirt', '01 bottle of protein', 'access to videos'],
        category: 'professional',
        price: 99,
    },
    {
        name: 'beginner fitness program',
        points: ['5 Days in a week', '01 sweatshirt', '01 bottle of protein', 'access to videos', 'and more'],
        category: 'advanced',
        price: 129,
    },
]
