import React from 'react';
import { detail, image } from '../Assets/Assets';

const About = ({id}) => {
    return (
        <div id={id} className="py-18 px-4 md:px-16 space-y-16">
            {/* intro section */}
            <div className="text-center space-y-4">
                <h4 className="inline-block px-2 py-1 rounded-2xl bg-akane-iro text-white">Introduction</h4>
                <h2 className="text-5xl text-kon-iro">About</h2>
                <h2 className="text-xl font-kiwi-maru-jp text-kon-iro">私について</h2>
            </div>
            {/* main section */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
                <div className="md:w-1/2 space-y-6 text-center md:text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-kon-iro">Lorem ipsum dolor sit amet consectetur.</h1>
                    <p className="text-ainezu text-base sm:text-lg max-w-md mx-auto md:mx-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repudiandae commodi omnis nisi, minima perspiciatis sunt incidunt repellendus quidem blanditiis praesentium odio dolore eos fugiat.</p>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 w-full md:w-1/2">
                    {detail.map(item => (
                        <div key={item.id} className="border border-gray-300 rounded-xl p-6 shadow-sm hover:bg-[#fcf4ff] hover:-translate-y-1 duration-300 ease-in-out cursor-pointer" >
                            <i className={`text-2xl text-kon-iro ${item.icon}`}></i>
                            <h3 className="my-4 font-semibold text-kon-iro">{item.title}</h3>
                            <p className="text-sm text-gray-600">{item.subtitle}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* image section */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {image.map(item => (
                    <div key={item.id} className="relative group overflow-hidden rounded-xl">
                        <img src={item.img} alt="" className="w-full h-80 object-cover transform group-hover:scale-105 transition duration-300 ease-in-out" />
                        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/80 to-transparent transition duration-300 ease-in-out flex flex-col items-center justify-end pb-3 space-y-1">
                            <h3 className="text-white font-semibold text-center">{item.title}</h3>
                            <h6 className="text-white font-light font-kiwi-maru-jp text-center text-sm">{item.title_jp}</h6>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default About;