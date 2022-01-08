import Image from "next/image"
import Wrapper from "./Wrapper"

function Hero() {
    return (
        <div>
            <div className="flex flex-col mt-16">
                <div className="relative h-96 w-screen">
                    <Image src="/image.jpeg" alt="cephas-chapa-software-developer-genius" layout="fill" objectFit="cover"/>
                    <div className="bg-black h-full opacity-30 absolute top-0 w-screen"></div>
                </div>
                <div className="flex bg-[#353b48] py-10 px-5">
                    <div>
                        <h1 className="text-3xl text-[#f5f6fa] font-bold">I'm Cephas Chapa.</h1>
                        <h1 className="text-3xl text-[#f5f6fa] font-bold">A <span className="text-blue-500 font-bold">borderless</span> fullstack software developer.</h1>
    
                        <div className="p-1 w-24 bg-white my-3 rounded-full"></div>
                        <p className="text-white">
                            I enjoy working on challenging projects. I draw my work ethics from Elon Musk, Albert Einstien, Nickola Tesla and my Parents. Im extremely passionate and enjoy working with others.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
