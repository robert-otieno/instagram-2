import Image from "next/image"
import { HeartIcon, MenuIcon, PaperAirplaneIcon, PlusCircleIcon, SearchIcon, UserGroupIcon } from "@heroicons/react/outline"
import { HomeIcon } from "@heroicons/react/solid"

function Header() {
    return (
        <div>
            <div className="flex justify-between bg-white max-w-6xl mx-5 lg:mx-auto">
                {/* Left */}
                <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
                    <Image src="https://links.papareact.com/ocw" alt="" layout="fill" objectFit="contain" />
                </div>
                <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
                    <Image src="https://links.papareact.com/jjm" alt="" layout="fill" objectFit="contain" />
                </div>

                {/* Middle - Search input field*/}
                <div className="max-w-xs">
                    <div className="relative mt-1 p-3 rounded-md">
                        <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                            <SearchIcon className='h-5 w-5 text-gray-400'/>
                        </div>
                        <input className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black" type="text" placeholder="Search" />
                    </div>
                </div>

                {/* Right */}
                <div className="flex items-center justify-end space-x-4">
                    <HomeIcon className="navBtn"/>
                    <MenuIcon className="h-6 md:hidden cursor-pointer"/>

                    <PaperAirplaneIcon className="navBtn"/>
                    <PlusCircleIcon className="navBtn"/>
                    <UserGroupIcon className="navBtn"/>
                    <HeartIcon className="navBtn"/>

                    <img className="h-10 rounded-full cursor-pointer" src="https://links.papareact.com/ocw" alt="" />
                </div>

            </div>
        </div>
    )
}

export default Header
