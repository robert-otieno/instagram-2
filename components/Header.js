import Image from "next/image"
import { HeartIcon, MenuIcon, PaperAirplaneIcon, PlusCircleIcon, SearchIcon, UserGroupIcon } from "@heroicons/react/outline"
import { HomeIcon } from "@heroicons/react/solid"
import { signIn, signOut, useSession } from "next-auth/react";

import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState)
  const router = useRouter()

  return (
    <div className="header">
      <div className="header__inner">
        {/* Left */}
        {/* Mobile View */}
        <div onClick={() => router.push('/')} className="relative hidden lg:inline-grid w-24 cursor-pointer">
          <Image src="https://links.papareact.com/ocw" alt="" layout="fill" objectFit="contain" className="dark:invert" />
        </div>
        
        {/* Desktop View */}
        <div onClick={() => router.push('/')} className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer dark:invert">
          <Image src="https://links.papareact.com/jjm" alt="" layout="fill" objectFit="contain" />
        </div>

        {/* Middle - Search input field*/}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className='h-5 w-5 text-gray-400' />
            </div>
            <input className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black" type="text" placeholder="Search" />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon onClick={() => router.push('/')} className="navBtn dark:invert" />
          <MenuIcon className="h-6 md:hidden cursor-pointer dark:invert" />

          {session ? (
            <>
              <div className="relative navBtn">
                <PaperAirplaneIcon className="navBtn rotate-45 dark:invert" />
                <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">3</div>
              </div>

              <PlusCircleIcon onClick={() => setOpen(true)} className="navBtn dark:invert" />
              <UserGroupIcon className="navBtn dark:invert" />
              <HeartIcon className="navBtn dark:invert" />

              <img onClick={signOut} className="h-10 w-10 rounded-full cursor-pointer" src={session.user?.image} alt="profile pic" />
            </>
          ) : (
            <button className="dark:text-white" onClick={signIn}>Sign In</button>
          )}
        </div>

      </div>
    </div>
  )
}

export default Header
