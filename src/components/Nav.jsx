import React, { useState } from 'react'
import { BiHomeAlt, BiMenuAltRight } from "react-icons/bi"
import { AiOutlineUnorderedList } from "react-icons/ai"
import { CgMenu } from "react-icons/cg"
import { IoMdClose } from "react-icons/io"
import { CiSettings } from "react-icons/ci"
import Image from 'next/image'
import { motion } from "framer-motion"

const Nav = () => {
    const [menu, setMenu] = useState(false);
    const [profile, setProfile] = useState(false);
    return (
        <div className='bg-neutral-900 px-[30px] '>
            <div className="text-white flex justify-between items-center flex-row h-[55px]">
                <div className=" gap-6 hidden md:flex">
                    <div className="flex gap-1 items-center cursor-pointer">
                        <BiHomeAlt />
                        <p>Home</p>
                    </div>
                    <div className="flex gap-1 items-center cursor-pointer">
                        <AiOutlineUnorderedList />
                        <p>Contents</p>
                    </div>
                    <div className="flex gap-1 items-center cursor-pointer">
                        <BiMenuAltRight />
                        <p>Categories</p>
                    </div>
                    <div className="flex gap-1 items-center cursor-pointer">
                        <CiSettings />
                        <p>Settings</p>
                    </div>
                </div>
                <div className="flex md:hidden">
                    <div className="flex gap-1 items-center cursor-pointer duration-150" onClick={() => { setMenu(menu => !menu) }}>
                        {
                            !menu ? <div className='text-white flex items-center gap-1'>
                                <CgMenu />
                                <p>Menu</p>
                            </div>
                                : <div className='text-white flex items-center gap-1'>
                                    <IoMdClose />
                                    <p>Close</p>
                                </div>
                        }
                        {
                            menu &&
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className=''>
                                <div className="absolute left-8 top-12 bg-green-950/70 border-2 border-white backdrop-blur-md text-white py-2 px-4 rounded-lg  gap-4 p-8 flex flex-col">
                                    <div className="flex gap-1 items-center cursor-pointer">
                                        <BiHomeAlt />
                                        <p>Home</p>
                                    </div>
                                    <div className="flex gap-1 items-center cursor-pointer">
                                        <AiOutlineUnorderedList />
                                        <p>Contents</p>
                                    </div>
                                    <div className="flex gap-1 items-center cursor-pointer">
                                        <BiMenuAltRight />
                                        <p>Categories</p>
                                    </div>
                                    <div className="flex gap-1 items-center cursor-pointer">
                                        <CiSettings />
                                        <p>Settings</p>
                                    </div>
                                </div>
                            </motion.div>
                        }
                    </div>
                </div>
                <div className="relative">
                    <div className="hidden sm:flex  p-1 bg-white text-black rounded-full items-center gap-1 h-9 cursor-pointer">
                        <Image src="/images/profile.png" alt='profile' height={30} width={30} />
                        <p className='hidden sm:flex' >İsmail İhsan Bülbül</p>
                    </div>
                    <div className="flex sm:hidden items-center justify-center">
                        <Image className='p-1 bg-white rounded-full ' src="/images/profile.png" alt='profile' height={40} width={40} onClick={() => setProfile(profile => !profile)} />
                    </div>
                    {
                        profile && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute bg-black/70 backdrop-blur-lg w-max right-0 p-1 top-12 z-10 border border-white rounded-md">İsmail İhsan Bülbül</motion.div>
                    }
                </div>
            </div>
        </div >
    )
}

export default Nav