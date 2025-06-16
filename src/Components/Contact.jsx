import React from 'react';

const Contact = ({id}) => {
    return (
        <div id={id} className="w-full min-h-screen text-black py-18 px-6 md:px-24 rounded-2xl">
            {/* intro section */}
            <div className="text-center space-y-4 mb-20">
                <h4 className="inline-block px-2 py-1 rounded-2xl bg-akane-iro text-white">Introduction</h4>
                <h2 className="text-5xl text-kon-iro">Contact Us</h2>
                <h2 className="text-xl font-kiwi-maru-jp text-kon-iro">テキストです</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* contact into */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-semibold text-akane-iro">Get in Touch</h2>
                    <p className="text-ainezu">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iusto quidem aut cumque expedita animi impedit, non reprehenderit illo labore autem accusamus asperiores suscipit sint sunt reiciendis! Earum, qui perspiciatis.</p>
                    <div className="space-y-4 text-sm">
                        {/* email */}
                        <div>
                            <div className="flex items-center space-x-4">
                                <i className="fa-solid fa-envelope text-2xl text-white p-3 rounded-full bg-kon-iro"></i>
                                <div>
                                    <span className="block font-bold text-kon-iro">Email</span>
                                    <span>contact@example.com</span>
                                </div>
                            </div>
                            <hr className="mt-4 border-kon-iro/30" />
                        </div>
                        {/* phone */}
                        <div>
                            <div className="flex items-center space-x-4">
                                <i className="fa-solid fa-phone text-2xl text-white p-3 rounded-full bg-kon-iro"></i>
                                <div>
                                    <span className="block font-bold text-kon-iro">Phone</span>
                                    <span>+66 1234 5678</span>
                                </div>
                            </div>
                            <hr className="mt-4 border-kon-iro/30" />
                        </div>
                        {/* address */}
                        <div>
                            <div className="flex items-center space-x-4">
                                <i className="fa-solid fa-map-location-dot text-2xl text-white p-3 rounded-full bg-kon-iro"></i>
                                <div>
                                    <span className="block font-bold text-kon-iro">Address</span>
                                    <span>123 ถนนสายตัวอย่าง, เขตตัวอย่าง, กรุงเทพฯ 10000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* contact form */}
                <form className="rounded-2xl p-8 space-y-6 shadow-[4px_4px_16px_#d1d3d0,_-8px_-8px_16px_#ffffff]">
                    <div>
                        <label className="block text-sm font-medium text-kon-iro">Name</label>
                        <input type="text" className="w-full mt-1 p-2 border border-ainezu rounded-md focus:outline-none focus:ring-2 focus:ring-kon-iro" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-kon-iro">Email</label>
                        <input type="email" className="w-full mt-1 p-2 border border-ainezu rounded-md focus:outline-none focus:ring-2 focus:ring-kon-iro" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-kon-iro">Subject</label>
                        <input type="text" className="w-full mt-1 p-2 border border-ainezu rounded-md focus:outline-none focus:ring-2 focus:ring-kon-iro" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-kon-iro">Message</label>
                        <textarea rows="4" className="w-full mt-1 p-2 border border-ainezu rounded-md focus:outline-none focus:ring-2 focus:ring-kon-iro"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-akane-iro text-white py-2 rounded-md hover:bg-opacity-90 transition">Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default Contact