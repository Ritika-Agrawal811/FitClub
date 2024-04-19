import clsx from 'clsx'
import { motion } from 'framer-motion'

// components
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/atoms/Button'

const linkVariant = {
    rest: {
        y: 0,
        transition: {
            duration: 0.35,
        },
    },
    hover: {
        y: '-100%',
        transition: {
            duration: 0.35,
        },
    },
}

const Navbar = () => {
    return (
        <nav>
            <div className={clsx('flex items-center justify-between', 'mx-auto w-90 3xl:w-85 4xl:w-3/4 5xl:w-3/5')}>
                <Link href='/'>
                    <Image
                        src='/logo.png'
                        alt='fitclub logo'
                        width={332}
                        height={88}
                        className='aspect-auto w-40 xl:w-48'
                    />
                </Link>
                <div className='hidden items-center gap-8 lg:flex'>
                    <ul className='flex gap-8'>
                        {navLinks.map((link) => {
                            const { label, url } = link
                            return (
                                <motion.li
                                    key={label}
                                    initial='rest'
                                    animate='rest'
                                    whileHover='hover'
                                    className={clsx('text-lg font-medium text-white', 'overflow-hidden')}>
                                    <Link href={url}>
                                        <motion.span
                                            variants={linkVariant}
                                            data-content={label}
                                            className={clsx(
                                                'relative block before:absolute before:-bottom-7 before:text-orange-400 before:content-[attr(data-content)]'
                                            )}>
                                            {label}
                                        </motion.span>
                                    </Link>
                                </motion.li>
                            )
                        })}
                    </ul>
                    <Button label='join now' size='small' />
                </div>
            </div>
        </nav>
    )
}

export default Navbar

const navLinks = [
    {
        label: 'About Us',
        url: '#about-us',
    },
    {
        label: 'Programs',
        url: '#programs',
    },
    {
        label: 'Plans',
        url: '#plans',
    },
    {
        label: 'Testimonials',
        url: '#testimonials',
    },
]
