import React from 'react';

const Footer = () => {
    return (
        <div className="bg-kon-iro text-white py-10 px-6 md:px-20 mt-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* logo info */}
                <div>
                    <h1 className="text-2xl font-bold font-kiwi-maru-jp text-gofun-iro mb-2">マイブランド</h1>
                    <p className="text-sm text-ainezu">Making things simple, elegant and useful. Let's connect.</p>
                </div>
                {/* nav link */}
                <div>
                    <h2 className="text-lg font-semibold text-gofun-iro mb-4">Quick Links</h2>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="#home" className="hover:underline">Home</a>
                        </li>
                        <li>
                            <a href="#about" className="hover:underline">About</a>
                        </li>
                        <li>
                            <a href="#services" className="hover:underline">Services</a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                {/* social media */}
                <div>
                    <h2 className="text-lg font-semibold text-gofun-iro mb-4">Follow Us</h2>
                    <div className="flex gap-4 text-xl">
                        <a href="#" className="hover:text-akane-iro"><i className="fab fa-facebook-f" /></a>
                        <a href="#" className="hover:text-akane-iro"><i className="fab fa-twitter" /></a>
                        <a href="#" className="hover:text-akane-iro"><i className="fab fa-instagram" /></a>
                        <a href="#" className="hover:text-akane-iro"><i className="fab fa-github" /></a>
                    </div>
                </div>
            </div>
            {/* copyright */}
            <hr className="my-8 border-ainezu" />
            <p className="text-center text-sm text-ainezu">© 2025 Nevinas. All rights reserved.</p>
        </div>
    );
}

export default Footer