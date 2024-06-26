import { navigation } from '@/constants/data';
import Link from 'next/link';
import Container from './Container';
import Logo from './Logo';

const Footer = () => {
  return (
    <div
    className="bg-[#180735] mt-10 py-2 md:py-10 text-zinc-300"
    >
        <Container
        className="flex flex-col md:flex-row gap-y-2 items-center justify-between"
        >
            <Logo className="text-white" spanClassName="bg-white text-black"/>
            <ul
            className='flex gap-6 items-start hidden md:flex'
            >
                {
                    navigation.map((item) => (
                            <Link
                            href={item?.href}
                            key={item?._id}
                            >
                                <li className='hover:text-white duration-200'>{item?.title}</li>
                            </Link>
                    ))
                }
            </ul>
            <p className="text-right">Join us with @mchdev.com</p>
        </Container>
    </div>
  )
}

export default Footer;