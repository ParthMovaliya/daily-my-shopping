import React from 'react'
import { BiHomeAlt } from "react-icons/bi"
import { BsListNested } from "react-icons/bs"
import { AiOutlineUnorderedList } from "react-icons/ai"
import { CiSettings } from "react-icons/ci"
import Image from 'next/image'
const Nav = () => {
    return (
        <div className='bg-neutral-900 px-[30px] my-auto'>
            <div className="text-white flex justify-between items-center flex-row  h-[55px]">
                <div className="flex gap-6">
                    <div className="flex gap-1 items-center cursor-pointer">
                        <BiHomeAlt />
                        <p>Home</p>
                    </div>
                    <div className="flex gap-1 items-center cursor-pointer">
                        <AiOutlineUnorderedList />
                        <p>Contents</p>
                    </div>
                    <div className="flex gap-1 items-center cursor-pointer">
                        <BsListNested />
                        <p>Categories</p>
                    </div>
                    <div className="flex gap-1 items-center cursor-pointer">
                        <CiSettings />
                        <p>Settings</p>
                    </div>
                </div>
                <div className="flex p-1 bg-white text-black rounded-full items-center gap-1 h-9 cursor-pointer">
                    <Image src="/images/profile.png" alt='profile' height={30} width={30} />
                    <p>İsmail İhsan Bülbül</p>
                </div>
            </div>
        </div>
    )
}

export default Nav