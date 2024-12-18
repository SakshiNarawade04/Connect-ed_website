import React from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='bg-gradient-to-r from-[#D3D9BE] via-[#B5B998] to-[#919470] p-4'>
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="text-black text-2xl font-bold">CONNECT-ED</div>

                {/* Mobile Toggle Button */}
                <div className="md:hidden">
                    <button className="text-black" onClick={toggleMenu}>
                        <svg
                            fill='none'
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            viewBox='0 0 24 24'
                            className='w-6 h-6'
                        >
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

                {/* Desktop Menu */}
                <ul className='hidden md:flex space-x-6'>
                    <li>
                        <button className='text-black font-bold hover:bg-[#B5B998] px-4 py-2 rounded'>
                            Home
                        </button>
                    </li>
                    <li>
                        <button className='text-black font-bold hover:bg-[#B5B998] px-4 py-2 rounded'>
                            About
                        </button>
                    </li>
                    <li>
                        <button className='text-black font-bold hover:bg-[#B5B998] px-4 py-2 rounded'>
                            Testimonials
                        </button>
                    </li>
                    <li>
                        <button className='text-black font-bold hover:bg-[#B5B998] px-4 py-2 rounded'>
                            Services
                        </button>
                    </li>
                    <li>
                        <button className='text-black font-bold hover:bg-[#B5B998] px-4 py-2 rounded'>
                            Contact
                        </button>
                    </li>
                </ul>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <ul className='flex flex-col items-end md:hidden mt-4 space-y-2 bg-[#B5B998] p-4 rounded'>
                    <li className='py-2'>
                        <button className='text-black font-bold hover:bg-[#919470] px-4 py-2 rounded'>
                            Home
                        </button>
                    </li>
                    <li className='py-2'>
                        <button className='text-black font-bold hover:bg-[#919470] px-4 py-2 rounded'>
                            About
                        </button>
                    </li>
                    <li className='py-2'>
                        <button className='text-black font-bold hover:bg-[#919470] px-4 py-2 rounded'>
                            Testimonials
                        </button>
                    </li>
                    <li className='py-2'>
                        <button className='text-black font-bold hover:bg-[#919470] px-4 py-2 rounded'>
                            Services
                        </button>
                    </li>
                    <li className='py-2'>
                        <button className='text-black font-bold hover:bg-[#919470] px-4 py-2 rounded'>
                            Contact
                        </button>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
