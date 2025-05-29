import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const navLinks = [
  'Home',
  'Services',
  'Portfolio',
  'Team',
  'About Us',
  'Connect',
  'Contact'
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-[#10162A] min-h-screen text-white font-sans">
      {/* Header */}
      <header className="w-full fixed top-0 left-0 z-50 bg-[#0B1020] border-b border-[#23263A] drop-shadow-[0_2px_8px_rgba(255,126,63,0.25)]">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl drop-shadow-[0_0_8px_#FF7E3F]">🛠️</span>
            <span className="text-xl font-bold text-[#FF7E3F] tracking-wide drop-shadow-[0_0_8px_#FF7E3F]">CodeForge</span>
          </div>
          {/* Navigation */}
          <nav className="hidden md:flex gap-7 text-gray-300 font-medium">
            {navLinks.map(link => (
              <a
                key={link}
                href={`#${link.replace(/\s+/g, '').toLowerCase()}`}
                className="hover:text-[#FF7E3F] transition-colors duration-200 drop-shadow-[0_0_6px_#FF7E3F]"
              >
                {link}
              </a>
            ))}
          </nav>
          {/* Placeholder for animated constellation icon */}
          <div className="w-10 h-10 border border-[#23263A] rounded-lg flex items-center justify-center">
            <span className="text-[#FF7E3F] drop-shadow-[0_0_8px_#FF7E3F]">✦</span>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen pt-32 pb-16 relative overflow-hidden">
        {/* Stars background (placeholder) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Можно добавить кастомный canvas или SVG для анимации звёзд */}
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-6xl md:text-7xl font-extrabold text-[#FFB088] drop-shadow-[0_0_16px_#FF7E3F] mb-6 text-center">CodeForge</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 text-center max-w-2xl drop-shadow-[0_0_8px_#FF7E3F]">
            Crafting Digital Excellence: Bots, Apps & Web Solutions
          </p>
          <div className="flex gap-6">
            <a href="#portfolio" className="bg-[#FF7E3F] hover:bg-[#ff965f] text-white font-semibold px-8 py-3 rounded-lg text-lg shadow transition-all duration-300 drop-shadow-[0_0_8px_#FF7E3F] hover:translate-y-[-4px] transition-transform">
              View Portfolio
            </a>
            <a href="#contact" className="border border-[#FF7E3F] text-[#FF7E3F] hover:bg-[#FF7E3F] hover:text-white font-semibold px-8 py-3 rounded-lg text-lg transition-all duration-300 drop-shadow-[0_0_8px_#FF7E3F] hover:translate-y-[-4px] transition-transform">
              Contact Us
            </a>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="max-w-7xl mx-auto py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-2 drop-shadow-[0_0_1px_#FF7E3F]/10">Our Services</h2>
        <div className="flex justify-center mb-12">
          <span className="block w-16 h-1 bg-[#FF7E3F] rounded"></span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 1 */}
          <div className="bg-[#181E36] rounded-xl p-7 shadow transition-all duration-300 flex flex-col items-start hover:drop-shadow-[0_0_12px_#FF7E3F] hover:translate-y-[-4px] transition-transform">
            <span className="text-3xl mb-4">🤖</span>
            <h3 className="text-xl font-bold mb-2">Custom Chatbots & AI</h3>
            <p className="text-gray-300">Intelligent conversational AI solutions tailored to enhance customer engagement and automate support.</p>
          </div>
          {/* 2 */}
          <div className="bg-[#181E36] rounded-xl p-7 shadow transition-all duration-300 flex flex-col items-start hover:drop-shadow-[0_0_12px_#FF7E3F] hover:translate-y-[-4px] transition-transform">
            <span className="text-3xl mb-4">🌐</span>
            <h3 className="text-xl font-bold mb-2">Web Development</h3>
            <p className="text-gray-300">Modern, responsive websites and web applications built with cutting-edge technologies and frameworks.</p>
          </div>
          {/* 3 */}
          <div className="bg-[#181E36] rounded-xl p-7 shadow transition-all duration-300 flex flex-col items-start hover:drop-shadow-[0_0_12px_#FF7E3F] hover:translate-y-[-4px] transition-transform">
            <span className="text-3xl mb-4">📱</span>
            <h3 className="text-xl font-bold mb-2">Mobile Applications</h3>
            <p className="text-gray-300">Cross-platform mobile apps delivering seamless user experiences across iOS and Android devices.</p>
          </div>
          {/* 4 */}
          <div className="bg-[#181E36] rounded-xl p-7 shadow transition-all duration-300 flex flex-col items-start hover:drop-shadow-[0_0_12px_#FF7E3F] hover:translate-y-[-4px] transition-transform">
            <span className="text-3xl mb-4">⚙️</span>
            <h3 className="text-xl font-bold mb-2">API Integrations</h3>
            <p className="text-gray-300">Seamless third-party integrations and custom API development for enhanced system connectivity and functionality.</p>
          </div>
          {/* 5 */}
          <div className="bg-[#181E36] rounded-xl p-7 shadow transition-all duration-300 flex flex-col items-start hover:drop-shadow-[0_0_12px_#FF7E3F] hover:translate-y-[-4px] transition-transform">
            <span className="text-3xl mb-4">↩️</span>
            <h3 className="text-xl font-bold mb-2">Automation Tools</h3>
            <p className="text-gray-300">Custom automation solutions to streamline workflows, reduce manual tasks, and increase operational efficiency.</p>
          </div>
          {/* 6 */}
          <div className="bg-[#181E36] rounded-xl p-7 shadow transition-all duration-300 flex flex-col items-start hover:drop-shadow-[0_0_12px_#FF7E3F] hover:translate-y-[-4px] transition-transform">
            <span className="text-3xl mb-4">🛡️</span>
            <h3 className="text-xl font-bold mb-2">Maintenance & Support</h3>
            <p className="text-gray-300">Ongoing technical support and maintenance ensuring your applications remain secure, updated, and performing optimally.</p>
          </div>
        </div>
      </section>
      {/* Portfolio Section */}
      <section id="portfolio" className="max-w-7xl mx-auto py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-2 drop-shadow-[0_0_1px_#FF7E3F]/10">Our Portfolio</h2>
        <div className="flex justify-center mb-12">
          <span className="block w-16 h-1 bg-[#FF7E3F] rounded"></span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 1 */}
          <div className="bg-[#181E36] rounded-xl p-7 shadow flex flex-col items-start transition-all duration-300 hover:drop-shadow-[0_0_12px_#FF7E3F] hover:translate-y-[-4px] transition-transform">
            <h3 className="text-xl font-bold mb-2">E-Commerce AI Assistant</h3>
            <p className="text-gray-300 mb-4">Intelligent chatbot for online retail with product recommendations and order tracking capabilities.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-[#23263A] text-[#FFB088] px-3 py-1 rounded text-xs font-semibold">Python</span>
              <span className="bg-[#23263A] text-[#FFB088] px-3 py-1 rounded text-xs font-semibold">TensorFlow</span>
              <span className="bg-[#23263A] text-[#FFB088] px-3 py-1 rounded text-xs font-semibold">React</span>
              <span className="bg-[#23263A] text-[#FFB088] px-3 py-1 rounded text-xs font-semibold">Node.js</span>
            </div>
            <a href="#" className="flex items-center gap-2 text-[#FF7E3F] font-semibold hover:underline mt-auto transition hover:drop-shadow-[0_0_10px_#FF7E3F]">
              <span className="text-lg">&#x1F5C3;</span> View on GitHub
            </a>
          </div>
          {/* 2 */}
          <div className="bg-[#181E36] rounded-xl p-7 shadow flex flex-col items-start transition-all duration-300 hover:drop-shadow-[0_0_12px_#FF7E3F] hover:translate-y-[-4px] transition-transform">
            <h3 className="text-xl font-bold mb-2">FinTech Dashboard</h3>
            <p className="text-gray-300 mb-4">Real-time financial analytics platform with advanced data visualization and reporting features.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-[#23263A] text-[#FFB088] px-3 py-1 rounded text-xs font-semibold">React</span>
              <span className="bg-[#23263A] text-[#FFB088] px-3 py-1 rounded text-xs font-semibold">D3.js</span>
              <span className="bg-[#23263A] text-[#FFB088] px-3 py-1 rounded text-xs font-semibold">Express</span>
              <span className="bg-[#23263A] text-[#FFB088] px-3 py-1 rounded text-xs font-semibold">PostgreSQL</span>
            </div>
            <a href="#" className="flex items-center gap-2 text-[#FF7E3F] font-semibold hover:underline mt-auto transition hover:drop-shadow-[0_0_10px_#FF7E3F]">
              <span className="text-lg">&#x1F5C3;</span> View on GitHub
            </a>
          </div>
          {/* 3 */}
          <div className="bg-[#181E36] rounded-xl p-7 shadow flex flex-col items-start transition-all duration-300 hover:drop-shadow-[0_0_12px_#FF7E3F] hover:translate-y-[-4px] transition-transform">
            <h3 className="text-xl font-bold mb-2">Fitness Tracking App</h3>
            <p className="text-gray-300 mb-4">Cross-platform mobile application for workout tracking, nutrition monitoring, and progress analytics.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-[#23263A] text-[#FFB088] px-3 py-1 rounded text-xs font-semibold">Flutter</span>
              <span className="bg-[#23263A] text-[#FFB088] px-3 py-1 rounded text-xs font-semibold">Dart</span>
              <span className="bg-[#23263A] text-[#FFB088] px-3 py-1 rounded text-xs font-semibold">Firebase</span>
              <span className="bg-[#23263A] text-[#FFB088] px-3 py-1 rounded text-xs font-semibold">MLKit</span>
            </div>
            <a href="#" className="flex items-center gap-2 text-[#FF7E3F] font-semibold hover:underline mt-auto transition hover:drop-shadow-[0_0_10px_#FF7E3F]">
              <span className="text-lg">&#x1F5C3;</span> View on GitHub
            </a>
          </div>
          {/* 4 */}
          <div className="bg-[#181E36] rounded-xl p-7 shadow flex flex-col items-start md:col-span-1 col-span-3 transition-all duration-300 hover:drop-shadow-[0_0_12px_#FF7E3F] hover:translate-y-[-4px] transition-transform">
            <h3 className="text-xl font-bold mb-2">Supply Chain Automation</h3>
            <p className="text-gray-300 mb-4">Automated inventory management system with predictive analytics and real-time supply chain optimization.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-[#23263A] text-[#FFB088] px-3 py-1 rounded text-xs font-semibold">Python</span>
              <span className="bg-[#23263A] text-[#FFB088] px-3 py-1 rounded text-xs font-semibold">Django</span>
              <span className="bg-[#23263A] text-[#FFB088] px-3 py-1 rounded text-xs font-semibold">Redis</span>
              <span className="bg-[#23263A] text-[#FFB088] px-3 py-1 rounded text-xs font-semibold">Docker</span>
            </div>
            <a href="#" className="flex items-center gap-2 text-[#FF7E3F] font-semibold hover:underline mt-auto transition hover:drop-shadow-[0_0_10px_#FF7E3F]">
              <span className="text-lg">&#x1F5C3;</span> View on GitHub
            </a>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section id="team" className="max-w-7xl mx-auto py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-2 drop-shadow-[0_0_1px_#FF7E3F]/10">Our Team</h2>
        <div className="flex justify-center mb-12">
          <span className="block w-16 h-1 bg-[#FF7E3F] rounded"></span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-[#181E36] rounded-xl py-10 flex flex-col items-center shadow transition-all duration-300 hover:drop-shadow-[0_0_12px_#FF7E3F] hover:translate-y-[-4px] transition-transform">
            <span className="text-3xl md:text-4xl font-extrabold text-[#FF7E3F] mb-2">50+</span>
            <span className="text-gray-300 text-center">Projects Delivered</span>
          </div>
          <div className="bg-[#181E36] rounded-xl py-10 flex flex-col items-center shadow transition-all duration-300 hover:drop-shadow-[0_0_12px_#FF7E3F] hover:translate-y-[-4px] transition-transform">
            <span className="text-3xl md:text-4xl font-extrabold text-[#FF7E3F] mb-2">100%</span>
            <span className="text-gray-300 text-center">Client Satisfaction</span>
          </div>
          <div className="bg-[#181E36] rounded-xl py-10 flex flex-col items-center shadow transition-all duration-300 hover:drop-shadow-[0_0_12px_#FF7E3F] hover:translate-y-[-4px] transition-transform">
            <span className="text-3xl md:text-4xl font-extrabold text-[#FF7E3F] mb-2">24/7</span>
            <span className="text-gray-300 text-center">Support Available</span>
          </div>
          <div className="bg-[#181E36] rounded-xl py-10 flex flex-col items-center shadow transition-all duration-300 hover:drop-shadow-[0_0_12px_#FF7E3F] hover:translate-y-[-4px] transition-transform">
            <span className="text-3xl md:text-4xl font-extrabold text-[#FF7E3F] mb-2">5+</span>
            <span className="text-gray-300 text-center">Years Experience</span>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-center mb-6 text-gray-200">Core Technologies</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {['Python','JavaScript','React','Node.js','Flutter','Django','PostgreSQL','MongoDB','AWS','Docker','TensorFlow','GraphQL'].map(tech => (
            <span key={tech} className="bg-[#181E36] text-[#FF7E3F] px-6 py-2 rounded font-semibold text-base shadow border border-[#23263A] transition-all duration-300 hover:drop-shadow-[0_0_10px_#FF7E3F] hover:translate-y-[-4px] transition-transform">
              {tech}
            </span>
          ))}
        </div>
      </section>
      {/* About Section */}
      <section id="aboutus" className="max-w-4xl mx-auto py-20 px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-2 drop-shadow-[0_0_1px_#FF7E3F]/10">About Us</h2>
        <div className="flex justify-center mb-8">
          <span className="block w-16 h-1 bg-[#FF7E3F] rounded"></span>
        </div>
        <p className="text-gray-300 text-lg mb-10">We are CodeForge, a constellation of talented developers united like the stars of the blacksmith.<br/>Just as ancient smiths forged powerful tools under the night sky, we craft digital solutions guided by the creativity and precision of our cosmic inspiration. Our team draws strength from the constellation of the blacksmith, channeling its energy into every project we deliver.</p>
        {/* SVG-плейсхолдер созвездия */}
        <div className="flex justify-center mb-10">
          <svg width="220" height="120" viewBox="0 0 220 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="60" r="5" fill="#FF7E3F" />
            <circle cx="60" cy="30" r="4" fill="#FFD166" />
            <circle cx="110" cy="40" r="6" fill="#FF7E3F" />
            <circle cx="170" cy="60" r="5" fill="#FFD166" />
            <circle cx="200" cy="100" r="4" fill="#FF7E3F" />
            <circle cx="140" cy="100" r="4" fill="#FFD166" />
            <rect x="105" y="35" width="10" height="10" fill="none" stroke="#FF7E3F" strokeWidth="2" />
            <rect x="165" y="55" width="10" height="10" fill="none" stroke="#FF7E3F" strokeWidth="2" />
            <polyline points="30,60 60,30 110,40 170,60 200,100 140,100 110,40" stroke="#FF7E3F" strokeWidth="2" fill="none" />
          </svg>
        </div>
        <p className="text-gray-300 text-lg">Like the blacksmith who shapes metal with fire and hammer, we transform concepts into functional digital experiences through code and creativity. Our connection to this celestial pattern reminds us that true craftsmanship requires both technical precision and artistic vision.</p>
      </section>
      {/* Connect Section */}
      <section id="connect" className="max-w-5xl mx-auto py-20 px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-2 drop-shadow-[0_0_1px_#FF7E3F]/10">Connect With Us</h2>
        <div className="flex justify-center mb-8">
          <span className="block w-16 h-1 bg-[#FF7E3F] rounded"></span>
        </div>
        <p className="text-gray-300 text-lg mb-10">Join our community of stars in the digital cosmos. Follow us on social media for the latest updates, tips, and insights.</p>
        <div className="flex flex-col md:flex-row gap-8 justify-center mb-10">
          {/* Telegram */}
          <div className="bg-[#181E36] rounded-xl p-8 flex-1 flex flex-col items-center shadow transition-all duration-300 hover:drop-shadow-[0_0_12px_#FF7E3F] hover:translate-y-[-4px] transition-transform">
            <span className="text-5xl mb-4">&#x1F6EB;</span>
            <h3 className="text-xl font-bold mb-2">Telegram Channel</h3>
            <p className="text-gray-300 mb-2">Get instant updates and join discussions on our latest projects and tech innovations.</p>
            <span className="text-[#FF7E3F] font-mono font-semibold">@CodeForgeStars</span>
          </div>
          {/* VK */}
          <div className="bg-[#181E36] rounded-xl p-8 flex-1 flex flex-col items-center shadow transition-all duration-300 hover:drop-shadow-[0_0_12px_#FF7E3F] hover:translate-y-[-4px] transition-transform">
            <span className="text-5xl mb-4">&#x1F5E3;</span>
            <h3 className="text-xl font-bold mb-2">VKontakte Community</h3>
            <p className="text-gray-300 mb-2">Connect with our team and other developers in our growing VK community.</p>
            <span className="text-[#FF7E3F] font-mono font-semibold">vk.com/codeforge</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <a href="#contact" className="bg-[#FF7E3F] hover:bg-[#ff965f] text-white font-semibold px-8 py-3 rounded-lg text-lg shadow transition-all duration-300 mb-4 md:mb-0 hover:drop-shadow-[0_0_10px_#FF7E3F] hover:translate-y-[-4px] transition-transform">Contact Us Directly</a>
          <a href="#" className="border border-[#FF7E3F] text-[#FF7E3F] hover:bg-[#FF7E3F] hover:text-white font-semibold px-8 py-3 rounded-lg text-lg transition-all duration-300 hover:drop-shadow-[0_0_10px_#FF7E3F] hover:translate-y-[-4px] transition-transform">Subscribe to Updates</a>
        </div>
      </section>
      {/* Testimonials Section */}
      <section id="testimonials" className="max-w-3xl mx-auto py-20 px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-2 drop-shadow-[0_0_1px_#FF7E3F]/10">What Our Clients Say</h2>
        <div className="flex justify-center mb-8">
          <span className="block w-16 h-1 bg-[#FF7E3F] rounded"></span>
        </div>
        <blockquote className="text-xl md:text-2xl italic text-gray-200 mb-8">"CodeForge delivered an exceptional AI chatbot that increased our customer engagement by 300%. Their technical expertise and attention to detail is unmatched."</blockquote>
        <div>
          <span className="text-[#FF7E3F] font-semibold">Sarah Johnson</span>
          <div className="text-gray-400 text-base">TechFlow Solutions</div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-2 drop-shadow-[0_0_1px_#FF7E3F]/10">Get In Touch</h2>
        <div className="flex justify-center mb-8">
          <span className="block w-16 h-1 bg-[#FF7E3F] rounded"></span>
        </div>
        <div className="flex flex-col md:flex-row gap-12">
          {/* Форма */}
          <form className="bg-[#181E36] rounded-xl p-8 flex-1 shadow flex flex-col gap-6 transition-all duration-300 hover:drop-shadow-[0_0_12px_#FF7E3F] hover:translate-y-[-4px] transition-transform">
            <input type="text" placeholder="Full Name" className="bg-transparent border border-[#23263A] rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#FF7E3F]" />
            <input type="email" placeholder="Email Address" className="bg-transparent border border-[#23263A] rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#FF7E3F]" />
            <input type="text" placeholder="Project Type\nWeb App, Mobile App, Chatbot, etc." className="bg-transparent border border-[#23263A] rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#FF7E3F]" />
            <textarea placeholder="Project Details\nTell us about your project requirements..." rows={4} className="bg-transparent border border-[#23263A] rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#FF7E3F] resize-none" />
            <button type="submit" className="bg-[#FF7E3F] hover:bg-[#ff965f] text-white font-semibold px-8 py-3 rounded-lg text-lg shadow transition-all duration-300 mt-2 transition hover:drop-shadow-[0_0_10px_#FF7E3F] hover:translate-y-[-4px] transition-transform">Send Message</button>
          </form>
          {/* Контакты */}
          <div className="flex-1 flex flex-col gap-6 justify-center items-center md:items-start">
            <div className="text-left">
              <div className="mb-4">
                <span className="font-bold text-white">Location</span><br/>
                <span className="text-gray-300">Global Team - Remote First</span>
              </div>
              <div className="mb-4">
                <span className="font-bold text-white">Email</span><br/>
                <span className="text-gray-300">hello@codeforge.dev</span>
              </div>
              <div className="mb-4">
                <span className="font-bold text-white">Response Time</span><br/>
                <span className="text-gray-300">Within 24 hours</span>
              </div>
            </div>
            <div className="flex gap-6 mt-2">
              <a href="#" className="text-[#FF7E3F] text-2xl hover:scale-110 transition hover:drop-shadow-[0_0_10px_#FF7E3F]"><span className="sr-only">GitHub</span> <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.577.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/></svg></a>
              <a href="#" className="text-[#FF7E3F] text-2xl hover:scale-110 transition hover:drop-shadow-[0_0_10px_#FF7E3F]"><span className="sr-only">LinkedIn</span> <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.966 0-1.75-.79-1.75-1.76s.784-1.76 1.75-1.76 1.75.79 1.75 1.76-.784 1.76-1.75 1.76zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg></a>
              <a href="#" className="text-[#FF7E3F] text-2xl hover:scale-110 transition hover:drop-shadow-[0_0_10px_#FF7E3F]"><span className="sr-only">Twitter</span> <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.39 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.247a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z"/></svg></a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
