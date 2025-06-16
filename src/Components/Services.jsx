import React from 'react';
import { card } from '../Assets/Assets';

const Services = ({id}) => {
    return (
        <div id={id} className="py-18 px-4 md:px-16 space-y-16">
            {/* intro section */}
            <div className="text-center space-y-4">
                <h4 className="inline-block px-2 py-1 rounded-2xl bg-akane-iro text-white">Introduction</h4>
                <h2 className="text-5xl text-kon-iro">Services</h2>
                <h2 className="text-xl font-kiwi-maru-jp text-kon-iro">テキストです</h2>
            </div>
            <div className="w-[85vw] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-8 relative z-10">
                {card.map(({ id, plan, price, detail, feature }) => (
                    <div key={id} className="bg-white text-black border border-kon-iro rounded-3xl shadow-xl p-8 text-center transition-all hover:-translate-y-2 duration-300" >
                        {/* header */}
                        <div className="text-left mb-4">
                            <h1 className="text-kon-iro text-2xl font-bold">{plan}</h1>
                            <p className="text-ainezu text-sm">{detail}</p>
                        </div>
                        {/* price */}
                        <hr className="w-[98%] mx-auto border-t border-kon-iro my-4" />
                        <h4 className="text-akane-iro text-3xl text-left italic font-semibold mb-2">
                            ${price} 
                            <span className="text-base font-normal">/ month</span>
                        </h4>
                        <hr className="w-[98%] mx-auto border-t border-kon-iro my-4" />
                        {/* features */}
                        <div className="text-left mt-4">
                            <h2 className="text-kon-iro text-lg font-semibold mb-2">Features</h2>
                            <ul className="space-y-2">
                                {feature.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                    <span className="w-2.5 h-2.5 bg-kon-iro rounded-full inline-block" />
                                    <span className="text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* button */}
                        <button className="mt-6 px-6 py-2 bg-akane-iro text-white rounded-full font-medium hover:bg-opacity-90 transition">Buy Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services