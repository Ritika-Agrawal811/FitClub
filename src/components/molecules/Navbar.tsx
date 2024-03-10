import clsx from 'clsx'

// components
import Image from 'next/image'
import Link from 'next/link'
import Button from '../atoms/Button'

const Navbar = () => {
    return (
        <nav className={clsx('w-full', 'flex items-center justify-between')}>
            <Link href="/">
                <Image src="/logo.png" alt="fitclub logo" width={332} height={88} className="aspect-auto w-48" />
            </Link>
            <div className="flex items-center gap-8">
                <ul className="flex gap-8">
                    {navLinks.map((link) => {
                        return (
                            <li
                                key={link}
                                className={clsx(
                                    'text-lg',
                                    'text-white',
                                    'transition-colors duration-100 hover:text-orange-400'
                                )}>
                                <Link href="">{link}</Link>
                            </li>
                        )
                    })}
                </ul>
                <Button label="join now" variant="fill" size="small" />
            </div>
        </nav>
    )
}

export default Navbar

const navLinks = ['Home', 'About Us', 'Programs', 'Plans', 'Testimonials']
