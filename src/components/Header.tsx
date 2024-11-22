import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'
import Link from 'next/link'
import { FaBars, FaSearch } from 'react-icons/fa'
import { ModeToggle } from './mode-toggle'

const Header = () => {
  return (
    <header className="shadow-sm bg-gray-50 py-4 px-6 md:px-16 flex justify-between items-center dark:bg-black">
        <Link href="/">
            <span className='inline-block p-3 max-tn:p-2 rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white'>ShareIt</span>
        </Link>
        <form className=' h-10 pr-2 rounded-sm shadow-sm bg-white flex items-center max-tn:hidden'>
            <input type='search' placeholder='Search' className='h-10  rounded-sm px-2 py-2 text-black bg-white focus:outline-none'/>
             <FaSearch className=''/>
        </form>
        <ul className=' h-10 flex justify-between items-center gap-2 max-sm:hidden max-md:text-sm'>
            <li><Link href="" className='py-2 px-3 hover:text-blue-400 text-blue-600'>Home</Link></li>
            <li><Link href="" className='py-2 px-3 hover:text-blue-400 text-blue-600'>About</Link></li>
            <li><Link href="" className='py-2 px-3 hover:text-blue-400 text-blue-600'>Projects</Link></li>
        </ul>
        <div className='h-10 flex items-center gap-3 max-md:text-sm'>
            <ModeToggle />
            <SignedIn>
                <UserButton></UserButton>
            </SignedIn>
            <SignedOut>
                <SignInButton></SignInButton>
            </SignedOut>
            <FaBars className='w-6 h-4 text-blue-600 hover:cursor-pointer sm:hidden' />
        </div>
        
    </header>
  )
}

export default Header