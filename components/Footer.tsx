import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full mb-[100px] pb-10 md:mb-5' id='contact'>
        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>
                Ready to take <span className='text-purple-300'>your</span> digital presence to the next level?
            </h1>
            <p className='text-white md:mt-10 my-5 text-center'>Reach out to me today and let's discuss how I can help you acheive your goals.</p>
            <a href="mailto:rhalon7@gmail.com">
                <MagicButton
                    title="Let's get in touch"
                    icon={<FaLocationArrow />}
                    position='right'
                />
            </a>
        </div>

        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2025 Halon Development</p>

            <div className="flex items-center md:gap-3 gap-6">
                {socialMedia.map((profile) => (
                    <div className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg backdrop-filter saturate-180 bg-opacity-75 bg-[var(--black-200)] rounded-lg border border-[var(--black-300)] my-2' key={profile.id}>
                        <img src={profile.img} alt={profile.id} width="20" height="20"/>
                    </div>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer