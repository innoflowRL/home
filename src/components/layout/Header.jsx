// import React, { useState, useEffect } from "react";
// import logo3 from '../../assets/logo3.png';

// const navLinks = [
// 	{ label: "About", href: "#about" },
// 	{ label: "Services", href: "#services" },
// 	{ label: "Projects", href: "#projects" },
// 	{ label: "Contact", href: "#contact" }
// ];

// export default function Header() {
// 	const [scrolled, setScrolled] = useState(false);
// 	const [mobileMenu, setMobileMenu] = useState(false);

// 	useEffect(() => {
// 		const onScroll = () => setScrolled(window.scrollY > 50);
// 		window.addEventListener("scroll", onScroll, { passive: true });
// 		return () => window.removeEventListener("scroll", onScroll);
// 	}, []);

// 	return (
// 			<header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
// 				<div className="max-w-7xl mx-auto px-6 py-4">
// 				<div className="flex items-center justify-between">
// 					{/* Logo */}
// 					<a href="/" className="flex items-center space-x-3">
// 					<img src={logo3} alt="IFRL Logo" className="w-10 h-10 rounded-lg object-contain" />
// 					<div>
// 						<h1 className="heading-font text-dark-blue font-semibold text-xl">IFRL</h1>
// 						<p className="text-slate-600 text-xs">Research Labs</p>
// 					</div>
// 				</a>

// 				{/* Desktop Navigation */}
// 				<nav className="hidden md:flex items-center space-x-6">
// 					{navLinks.map(({ label, href }) => (
// 							<a
// 								key={label}
// 								href={href}
// 								className={`heading-font transition-colors duration-200 ${
// 									scrolled ? 'text-slate-700 hover:text-dark-blue' : 'text-white hover:text-cyan'
// 								}`}
// 								onClick={(e) => { e.currentTarget.blur(); }}
// 							>
// 								{label}
// 							</a>
// 						))}
// 					</nav>

// 					{/* CTA Button */}
// 					<div className="hidden md:block">
// 						<a
// 							href="#contact"
// 							className={`px-6 py-3 font-semibold rounded-lg transform hover:scale-105 transition-all duration-200 shadow-md ${
// 								scrolled ? 'bg-cyan text-white hover:bg-cyan/80' : 'bg-white text-dark-blue hover:bg-white/90'
// 							}`}
// 						>
// 							Enquire Now
// 						</a>
// 					</div>

// 					{/* Mobile Menu Button */}
// 					<button
// 						onClick={() => setMobileMenu(!mobileMenu)}
// 						className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors duration-200"
// 						aria-label="Toggle menu"
// 					>
// 						<div className="w-6 h-6 flex flex-col justify-center items-center">
// 							<span className={`block w-5 h-0.5 bg-slate-700 transition-all duration-300 ${mobileMenu ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
// 							<span className={`block w-5 h-0.5 bg-slate-700 transition-all duration-300 ${mobileMenu ? 'opacity-0' : 'opacity-100'}`}></span>
// 							<span className={`block w-5 h-0.5 bg-slate-700 transition-all duration-300 ${mobileMenu ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
// 						</div>
// 					</button>
// 				</div>

// 				{/* Mobile Menu */}
// 				<div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileMenu ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
// 					<div className="pt-4 pb-2 space-y-2">
// 						{navLinks.map(({ label, href }) => (
// 							<a
// 								key={label}
// 								href={href}
// 								className="block px-4 py-3 text-slate-700 hover:text-dark-blue hover:bg-slate-50 rounded-lg heading-font transition-all duration-200"
// 								onClick={(e) => { setMobileMenu(false); e.currentTarget.blur(); }}
// 							>
// 								{label}
// 							</a>
// 						))}
// 						<div className="pt-4">
// 							<a
// 								href="#contact"
// 								className="block px-4 py-3 bg-cyan text-white font-semibold text-center rounded-lg hover:bg-cyan/80 transition-colors duration-200"
// 							>
// 								Enquire Now
// 							</a>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</header>
// 	);
// }
