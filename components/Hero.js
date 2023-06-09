import Image from "next/image";
import Model from "../assets/images/shen.png"

export default function Hero() {
    return (
        <>
            {/* <section className="py-12 lg:py-32 ">
                <div className="container mx-auto">Hero</div>
            </section> */}
            {/* <section className="w-full h-screen bg-[#FFFFFF]">
                <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                    <p className="text-[#716d6a]">Hi, my name is</p>
                    <h1 className="text-4xl sm:text-7xl font-bold text-[#0B0C10]">Joshrine Agutaya</h1>
                    <h2 className="text-4xl sm:text-7xl font-bold text-[#323232]">Full stack developer.</h2>
                    <p className="text-[#716d6a] py-4 max-w-[700px]">
                        I'm a full stack developer from Caloocan City specializing in building (and occasionally designing)
                        exceptional digital experiences. Currently, I'm focused on building responsive full stack web applications.
                    </p>
                    <div>
                        <button className="group relative h-12 w-40 overflow-hidden bg-[#FAFAFA] text-lg shadow">
                            <div className="absolute inset-0 w-3 bg-[#323232] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                            <span className="relative text-[#323232] group-hover:text-white">Resume</span>
                        </button>
                    </div>
                </div>
            </section> */}
            <section id="home" className="lg:h-[85vh] flex items-center bg-[#FFFFFF] lg:bg-[#FFFFFF] lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden">
                <div className="container mx-auto h-full max-w-[1000px]">
                    <div className="flex items-center h-full mt-8">
                        <div className="flex-1 flex flex-col items-center lg:items-start">
                            <p className="text-[#716d6a]">Hi, my name is</p>
                            <h1 className="text-4xl sm:text-7xl font-bold text-[#0B0C10]">Joshrine Agutaya</h1>
                            <h2 className="text-4xl sm:text-7xl font-bold text-[#323232]">Full stack developer.</h2>
                            <p className="text-[#716d6a] py-4 max-w-[700px]">
                                I'm a full stack developer from Caloocan City specializing in building (and occasionally designing)
                                exceptional digital experiences. Currently, I'm focused on building responsive full stack web applications.
                            </p>
                            <div>
                                <button className="group relative h-12 w-40 overflow-hidden bg-[#FAFAFA] text-lg shadow">
                                    <div className="absolute inset-0 w-3 bg-[#323232] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                                    <span className="relative text-[#323232] group-hover:text-white">Resume</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}