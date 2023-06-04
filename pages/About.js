import Image from "next/image";

export default function About(){
    return(
        <>
            <section className="py-12 lg:py-32">
                <div className="max-w-[1000px] container mx-auto">
                    <div className="flex flex-col xl:flex-row gap-24">
                        <img alt="Joshrine Agutaya" className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl" src="https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGNvbXB1dGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
                        {/* <Image alt="Joshrine Agutaya" width={50} height={50} src="https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGNvbXB1dGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" /> */}
                        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                            <div className="flex flex-col">
                                {/* <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">Josh</h2> */}
                                <h2 className="text-4xl lg:text-5xl font-medium lg:font-extrabold mb-3">About</h2>
                                {/* <h2 className="text-3xl lg:text-4xl font-medium lg:font-bold mb-3">Josh</h2> */}
                                <p className="mb-4">I'm a full stack developer from Caloocan City specializing in building (and occasionally designing) 
                                   exceptional digital experiences. Currently, I'm focused on building responsive full stack web applications.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}