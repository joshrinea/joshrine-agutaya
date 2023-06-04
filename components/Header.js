"use client"

import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import NavMobile from "./NavMobile";
import Socials from "./Socials";

import Image from 'next/image'
import Link from "next/link";

import Logo from "../assets/joshrinea-logo.png"

export default function Header(){
    const [header, setHeader] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', ()=> {
            return window.scrollY > 50 ? setHeader(true) : setHeader(false)
        });
    })

    return(
        <>
            <header className={`${header ? 'bg-[#FFFFFF] shadow-md h-20 text-[#323232]' : 'h-24 text-[#323232]'} flex items-center fixed top-0 w-full z-10 transition-all duration-300`}>
                <div className="max-w-[1000px] container mx-auto h-full flex items-center justify-between">
                    <Link href="#">
                        {/* <Image src={Logo} width={50} height={50} alt="Logo" /> */}
                        <p className="text-2xl font-bold">Joshrinea.</p>
                    </Link>
                    <div className="hidden lg:block">
                        <Navbar />
                    </div>
                    <div className="hidden lg:block">
                        <Socials />
                    </div>
                    <div className="lg:hidden">
                        <NavMobile />
                    </div>
                </div>
            </header>
        </>
    )
}