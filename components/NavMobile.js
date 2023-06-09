"use client"

import React, { useState } from "react";

// @heroicons/react
// npm i @heroicons/react@v1
import { XIcon } from "@heroicons/react/outline";
import { MenuAlt3Icon } from "@heroicons/react/outline";

// framer motion
import { motion } from "framer-motion";

// react-scroll
import { Link } from "react-scroll";

import { navigation } from "./data";
import Socials from "./Socials";

export default function NavMobile(){
    const [isOpen, setIsOpen] = useState(false)

    // framer motion variants
    const circleVariants = {
        hidden: {
            scale: 0
        },
        visible: {
            scale: 180,
            transition: {
                type: 'spring',
                stiffness: 160,
                damping: 60,

            }
        }
    }

    const ulVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.1,
            },
        },
    }

    return(
        <>
            <nav className="relative">
                <div onClick={() => setIsOpen(true)} className="cursor-pointer text-black">
                    <MenuAlt3Icon className="w-8 h-8" />
                </div>

                {/* circles */}
                <motion.div variants={circleVariants} initial='hidden' animate={isOpen ? 'visible' : 'hidden'} className="w-4 h-4 rounded-full bg-[#111111] fixed top-0 right-0">
                    
                </motion.div>

                {/* menu */}
                <motion.ul variants={ulVariants} animate={isOpen ? 'visible' : ''} className={`${isOpen ? 'right-0' : '-right-full'} fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}>
                    {/* close button */}
                    <div onClick={() => setIsOpen(false)} className="cursor-pointer absolute top-8 right-5">
                        <XIcon className="w-8 h-8" />
                    </div>
                    {
                        navigation.map((item, index) => {
                            return (
                                <li key={index} className="mb-8">
                                    <Link to={item.href} smooth={true} duration={500} offset={-70} className="text-xl cursor-pointer capitalize">
                                        {item.name}
                                    </Link>
                                </li>
                            )
                        })
                    }

                </motion.ul>
            </nav>
        </>
    )
}