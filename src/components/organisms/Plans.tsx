import clsx from 'clsx'
import { useState } from 'react'

// components
import Wrapper from '@/components/atoms/Wrapper'
import StrokeText from '../atoms/StrokeText'
import PlanCard from '../molecules/PlanCard'

type ActivePlan = 'basic' | 'professional' | 'advanced'

const Plans = () => {
    const [activePlan, setActivePlan] = useState<ActivePlan>('basic')
    return (
        <Wrapper variant="main" id="plans">
            <div className={clsx('bg-texture bg-primary', 'py-1 pt-16', 'mx-auto w-90 rounded-3xl')}>
                <h2 className={clsx('text-6xl', 'text-center font-bold uppercase text-white')}>
                    Choose Your <StrokeText title="Best plan" />
                </h2>

                <Wrapper variant="section" className="rounded-3xl bg-primary p-6">
                    {plans.map((plan, index) => {
                        return (
                            <PlanCard
                                key={index}
                                isActive={plan.category === activePlan}
                                {...plan}
                                onClick={() => setActivePlan(plan.category as ActivePlan)}
                            />
                        )
                    })}
                </Wrapper>
            </div>
        </Wrapper>
    )
}

export default Plans

const plans = [
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
