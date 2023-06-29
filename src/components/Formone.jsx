import Image from 'next/image'
import React from 'react'

const Formone = () => {
    return (
        <div className='bg-white mt-4 mx-4 p-4 rounded-lg flex flex-col gap-2'>
            <div className="">
                <p className='font-semibold text-[22px]'>Form title</p>
                <p>Sed tortor, sed velit ridiculus ipsum pharetra lacus odio gravida augue enim.</p>
            </div>
            <div className="flex gap-2">
                <div className="flex gap-1 p-1 w-fit border border-amber-600 bg-amber-200">
                    <Image className='bg-white' src="/images/english.png" alt='endlish' height={25} width={25} />
                    <p>English</p>
                </div>
                <div className="flex gap-1 p-1 w-fit border border-neutral-300">
                    <Image className='' src="/images/turkish.png" alt='endlish' height={25} width={25} />
                    <p>Turkish</p>
                </div>
            </div>
        </div>
    )
}

export default Formone