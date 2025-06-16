import React from 'react';
import { detail, photo } from '../Assets/Assets';

const Home = ({id}) => {
    return (
        <div id={id} className="py-18 px-8 md:px-16 gap-y-6 min-h-[90vh]">
            <div className="flex flex-col md:flex-row items-center justify-between relative mb-16">
                {/* text section */}
                <div className="md:w-1/2 text-center md:text-left space-y-6 z-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-kon-iro">
                        Lorem ipsum dolor sit amet consectetur.{' '}
                        <span className="text-akane-iro underline decoration-wavy">lorem</span> lorem
                    </h1>
                    <p className="text-gray-600 text-lg max-w-md mx-auto md:mx-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repudiandae commodi omnis nisi, minima perspiciatis sunt incidunt repellendus quidem blanditiis praesentium odio dolore eos fugiat.</p>
                    <button className="btn-primary">Explore now</button>
                </div>
                {/* image section */}
                <div className="md:w-1/2 mt-10 md:mt-0 grid grid-cols-2 grid-rows-2 gap-4 relative z-10">
                    <img src={photo.japan_img2} alt="Place 1" className="col-span-2 rounded-2xl shadow-lg object-cover h-64 w-full" />
                    <img src={photo.japan_img1} alt="Place 2" className="rounded-2xl shadow-lg object-cover h-40 w-full" />
                    <img src={photo.japan_img5} alt="Place 3" className="rounded-2xl shadow-lg object-cover h-40 w-full" />
                </div>
            </div>
            {/* detail section */}
            <div className="w-[80vw] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4 relative z-10">
                {detail.map(item => (
                    <div key={item.id} className="text-black border-b-4 border-transparent hover:border-akane-iro pb-6 transition-all hover:-translate-y-1 duration-500">
                        <p className="text-ainezu italic mb-2">" {item.subtitle} "</p>
                        <h1 className="text-kon-iro text-xl">{item.title}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
