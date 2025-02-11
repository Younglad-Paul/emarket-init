import { Link } from 'react-router-dom';
import logo from '../../public/logo.png'

export default function Footer() {
    return (
        <footer className="bg-[#13802AFF] text-white">
            <div className="container mx-auto py-12 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-white">About eMarket</h3>
                        <p className="text-white/80 text-sm">
                            Empowering local businesses through digital innovation and 
                            comprehensive market data solutions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-white">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-white/80 hover:text-white text-sm">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-white/80 hover:text-white text-sm">About Us</Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-white/80 hover:text-white text-sm">Services</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-white/80 hover:text-white text-sm">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-white">Contact Us</h3>
                        <ul className="space-y-2 text-sm text-white/80">
                            <li>Enugu State, Nigeria</li>
                            <li>Phone: +234 XXX XXX XXXX</li>
                            <li>Email: info@enuguemarket.gov.ng</li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-white">Newsletter</h3>
                        <p className="text-sm text-white/80">Stay updated with our latest news</p>
                        <div className="flex gap-2">
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="flex-1 px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-white/20 bg-white/10 text-white placeholder:text-white/50"
                            />
                            <button className="px-4 py-2 bg-white text-[#13802AFF] rounded-lg text-sm hover:bg-white/90 transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-white/80">
                            © {new Date().getFullYear()} Enugu eMarket. All rights reserved.
                        </p>
                        <div className="flex gap-4">
                            <Link to="/privacy" className="text-sm text-white/80 hover:text-white">Privacy Policy</Link>
                            <Link to="/terms" className="text-sm text-white/80 hover:text-white">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}