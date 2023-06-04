"use client"

import React, { useState, useEffect } from "react"

import { navigation } from "./data"
import Link from "next/link"

export default function Navbar(){
    const [text, setText] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', ()=> {
            return window.scrollY > 50 ? setText(true) : setText(false)
        });
    })

    return(
        <nav>
            <ul className="flex space-x-8 capitalize text-[15px]">
                {
                    navigation.map((item, index) => {
                        return (
                            <li className={`${text ? 'text-[#323232]' : 'text-[#323232]'} hover:text-accent cursor-pointer`} key={index}>
                                <Link href={item.href} className="transition-all duration-300">
                                    {item.name}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}