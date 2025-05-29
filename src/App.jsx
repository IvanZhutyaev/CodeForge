import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import emailjs from 'emailjs-com'

const translations = {
  ru: {
    nav: [
      { label: 'Главная', anchor: 'top' },
      { label: 'Услуги', anchor: 'services' },
      { label: 'Портфолио', anchor: 'portfolio' },
      { label: 'Команда', anchor: 'team' },
      { label: 'О нас', anchor: 'aboutus' },
      { label: 'Связь', anchor: 'connect' },
      { label: 'Контакты', anchor: 'contact' },
    ],
    heroTitle: 'CodeForge',
    heroSubtitle: 'Создаём цифровое совершенство: боты, приложения и веб-решения',
    viewPortfolio: 'Портфолио',
    contactUs: 'Связаться',
    services: 'Наши услуги',
    servicesList: [
      {
        title: 'Чат-боты и ИИ',
        desc: 'Интеллектуальные чат-боты и AI-решения для автоматизации и поддержки клиентов.',
        icon: '🤖',
      },
      {
        title: 'Веб-разработка',
        desc: 'Современные сайты и веб-приложения на передовых технологиях.',
        icon: '🌐',
      },
      {
        title: 'Мобильные приложения',
        desc: 'Кроссплатформенные мобильные приложения для iOS и Android.',
        icon: '📱',
      },
      {
        title: 'Интеграции API',
        desc: 'Интеграция сторонних сервисов и разработка собственных API.',
        icon: '⚙️',
      },
      {
        title: 'Автоматизация',
        desc: 'Автоматизация процессов для повышения эффективности бизнеса.',
        icon: '↩️',
      },
      {
        title: 'Поддержка и сопровождение',
        desc: 'Техническая поддержка и обслуживание ваших решений.',
        icon: '🛡️',
      },
    ],
    portfolio: 'Портфолио',
    portfolioList: [
      {
        title: 'Фабрика реальности',
        desc: 'Сюрреалистическая игра-головоломка в жанре хоррор, в которой реальность трещит по швам.',
        tags: ['Unity', 'C#', 'C++', 'HLSL', 'ShaderLab', 'Mathematica', 'Objective-C', 'Другое'],
        github: 'https://github.com/TeamScriptSquad/The-Fabric-of-Reality'
      },
      {
        title: 'Фитнес-трекер',
        desc: 'Бот, который поможет вам следить за своим фитнесом и питанием.',
        tags: ['Python', 'Google Services', 'Telegram Bot API', 'Другое'],
        github: 'https://github.com/TeamScriptSquad/Fitness-Tracker'
      },
      {
        title: 'Сека - карточная игра',
        desc: 'Telegram Mini-App для игры в карты.',
        tags: ['HTML', 'Python', 'JS', 'TS', 'Telegram Bot API', 'Telegram Mini-App', 'CSS', 'Shell', 'PostgreSQL', 'Другое'],
        github: 'https://github.com/IvanZhutyaev/Seka-Card_Game'
      },
      {
        title: 'DGTL-Telegram Mini-App',
        desc: 'Веб-ориентированная игра clicker на платформе Telegram',
        tags: ['Python', 'TS', 'JS', 'CSS', 'PostgreSQL', 'Telegram Bot API', 'Telegram Mini-App', 'Другое'],
        github: 'https://github.com/IvanZhutyaev/dgtl-miniapp'
      },
      {
        title: 'Масслукинг',
        desc: 'Этот скрипт позволяет вам автоматически просматривать истории пользователей в группах и каналах Telegram, к которым у вас есть доступ.',
        tags: ['Python', 'Telegram Bot API', 'Другое'],
        github: 'https://github.com/IvanZhutyaev/Masslooking'
      },
      {
        title: 'Meet - система для бронирования мероприятий',
        desc: 'Система, позволяющая бронировать и просматривать мероприятия, а также создавать их.',
        tags: ['Python', 'Django', 'JS', 'TS', 'PostgreSQL', 'Другое'],
        github: 'https://github.com/IvanZhutyaev/meet'
      },
    ],
    team: 'Наша команда',
    teamStats: [
      { value: '50+', label: 'Проектов выполнено' },
      { value: '100%', label: 'Довольных клиентов' },
      { value: '24/7', label: 'Поддержка' },
      { value: '5+', label: 'Лет опыта' },
    ],
    coreTech: 'Ключевые технологии',
    about: 'О нас',
    aboutText1: 'Мы — CodeForge, команда разработчиков, объединённых как созвездие кузнеца. Мы создаём цифровые решения, вдохновляясь ремеслом и точностью.',
    aboutText2: 'Как кузнец формирует металл, мы превращаем идеи в цифровые продукты с помощью кода и креатива.',
    connect: 'Связаться с нами',
    connectText: 'Присоединяйтесь к нашему сообществу и следите за новостями.',
    telegram: 'Телеграм-канал',
    telegramDesc: 'Новости и обсуждения проектов.',
    vk: 'Сообщество ВКонтакте',
    vkDesc: 'Общение с командой и другими разработчиками.',
    contactDirect: 'Связаться напрямую',
    subscribe: 'Подписаться на новости',
    testimonials: 'Отзывы клиентов',
    testimonialText: 'CodeForge создали для нас AI-бота, который увеличил вовлечённость клиентов на 300%. Профессионализм и внимание к деталям впечатляют!',
    testimonialAuthor: 'Сара Джонсон',
    testimonialCompany: 'TechFlow Solutions',
    getInTouch: 'Связаться',
    contactForm: {
      name: 'Имя',
      email: 'Email',
      projectType: 'Тип проекта (веб, мобильное, бот...)',
      details: 'Опишите ваш проект...',
      send: 'Отправить',
    },
    contactInfo: {
      location: 'География',
      locationVal: 'Вся Россия и мир',
      email: 'Почта',
      emailVal: 'hello@codeforge.dev',
      response: 'Время ответа',
      responseVal: 'В течение 24 часов',
    },
    social: {
      github: 'GitHub',
      linkedin: 'LinkedIn',
      twitter: 'Twitter',
    },
    githubButton: 'Смотреть на GitHub',
  },
  en: {
    nav: [
      { label: 'Home', anchor: 'top' },
      { label: 'Services', anchor: 'services' },
      { label: 'Portfolio', anchor: 'portfolio' },
      { label: 'Team', anchor: 'team' },
      { label: 'About Us', anchor: 'aboutus' },
      { label: 'Connect', anchor: 'connect' },
      { label: 'Contact', anchor: 'contact' },
    ],
    heroTitle: 'CodeForge',
    heroSubtitle: 'Crafting Digital Excellence: Bots, Apps & Web Solutions',
    viewPortfolio: 'View Portfolio',
    contactUs: 'Contact Us',
    services: 'Our Services',
    servicesList: [
      {
        title: 'Custom Chatbots & AI',
        desc: 'Intelligent conversational AI solutions tailored to enhance customer engagement and automate support.',
        icon: '🤖',
      },
      {
        title: 'Web Development',
        desc: 'Modern, responsive websites and web applications built with cutting-edge technologies and frameworks.',
        icon: '🌐',
      },
      {
        title: 'Mobile Applications',
        desc: 'Cross-platform mobile apps delivering seamless user experiences across iOS and Android devices.',
        icon: '📱',
      },
      {
        title: 'API Integrations',
        desc: 'Seamless third-party integrations and custom API development for enhanced system connectivity and functionality.',
        icon: '⚙️',
      },
      {
        title: 'Automation Tools',
        desc: 'Custom automation solutions to streamline workflows, reduce manual tasks, and increase operational efficiency.',
        icon: '↩️',
      },
      {
        title: 'Maintenance & Support',
        desc: 'Ongoing technical support and maintenance ensuring your applications remain secure, updated, and performing optimally.',
        icon: '🛡️',
      },
    ],
    portfolio: 'Our Portfolio',
    portfolioList: [
      {
        title: 'The Fabric of Reality',
        desc: 'A surreal horror-puzzle game where reality unravels at the seams.',
        tags: ['Unity', 'C#', 'C++', 'HLSL', 'ShaderLab', 'Mathematica', 'Objective-C', 'Other'],
        github: 'https://github.com/TeamScriptSquad/The-Fabric-of-Reality'
      },
      {
        title: 'Fitness-Tracker',
        desc: 'A bot that will help you monitor your fitness and nutrition.',
        tags: ['Python', 'Google Services', 'Telegram Bot API', 'Other'],
        github: 'https://github.com/TeamScriptSquad/Fitness-Tracker'
      },
      {
        title: 'Seka - Card Game',
        desc: 'Seka (or "seka game") is the colloquial name of the popular card game "Nine" (also known as "Stuka", "Pig" or "21 points").',
        tags: ['HTML', 'Python', 'JS', 'TS', 'Telegram Bot API', 'Telegram Mini-App', 'CSS', 'Shell', 'PostgreSQL', 'Other'],
        github: 'https://github.com/IvanZhutyaev/Seka-Card_Game'
      },
      {
        title: 'DGTL-Telegram Mini-App',
        desc: 'A web-based clicker game on the Telegram platform',
        tags: ['Python', 'TS', 'JS', 'CSS', 'PostgreSQL', 'Telegram Bot API', 'Telegram Mini-App', 'Other'],
        github: 'https://github.com/IvanZhutyaev/dgtl-miniapp'
      },
      {
        title: 'Masslooking',
        desc: 'This script allows you to automatically view stories of users in Telegram groups and channels where you have access.',
        tags: ['Python', 'Telegram Bot API', 'Other'],
        github: 'https://github.com/IvanZhutyaev/Masslooking'
      },
      {
        title: 'Meet - a system for booking events',
        desc: 'A system that allows you to book and view events, as well as create them.',
        tags: ['Python', 'Django', 'JS', 'TS', 'PostgreSQL', 'Other'],
        github: 'https://github.com/IvanZhutyaev/meet'
      },
    ],
    team: 'Our Team',
    teamStats: [
      { value: '50+', label: 'Projects Delivered' },
      { value: '100%', label: 'Client Satisfaction' },
      { value: '24/7', label: 'Support Available' },
      { value: '5+', label: 'Years Experience' },
    ],
    coreTech: 'Core Technologies',
    about: 'About Us',
    aboutText1: 'We are CodeForge, a constellation of talented developers united like the stars of the blacksmith. We craft digital solutions guided by creativity and precision.',
    aboutText2: 'Like the blacksmith who shapes metal with fire and hammer, we transform concepts into functional digital experiences through code and creativity.',
    connect: 'Connect With Us',
    connectText: 'Join our community of stars in the digital cosmos. Follow us for updates and insights.',
    telegram: 'Telegram Channel',
    telegramDesc: 'Get instant updates and join discussions on our latest projects and tech innovations.',
    vk: 'VKontakte Community',
    vkDesc: 'Connect with our team and other developers in our growing VK community.',
    contactDirect: 'Contact Us Directly',
    subscribe: 'Subscribe to Updates',
    testimonials: 'What Our Clients Say',
    testimonialText: 'CodeForge delivered an exceptional AI chatbot that increased our customer engagement by 300%. Their technical expertise and attention to detail is unmatched.',
    testimonialAuthor: 'Sarah Johnson',
    testimonialCompany: 'TechFlow Solutions',
    getInTouch: 'Get In Touch',
    contactForm: {
      name: 'Full Name',
      email: 'Email Address',
      projectType: 'Project Type\nWeb App, Mobile App, Chatbot, etc.',
      details: 'Project Details\nTell us about your project requirements...',
      send: 'Send Message',
    },
    contactInfo: {
      location: 'Location',
      locationVal: 'Global Team - Remote First',
      email: 'Email',
      emailVal: 'hello@codeforge.dev',
      response: 'Response Time',
      responseVal: 'Within 24 hours',
    },
    social: {
      github: 'GitHub',
      linkedin: 'LinkedIn',
      twitter: 'Twitter',
    },
    githubButton: 'View on GitHub',
  }
};

// Кастомный хук для появления при скролле
function useRevealOnScroll(stagger = 0, lang) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Сбрасываем состояние при смене языка
  useEffect(() => {
    setIsVisible(false);
  }, [lang]);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const handle = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    };

    const observer = new window.IntersectionObserver(handle, { threshold: 0.15 });
    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (ref.current) {
      ref.current.classList.toggle('visible', isVisible);
    }
  }, [isVisible]);
  
  if (stagger) {
    return [ref, { style: { '--stagger-delay': `${stagger}ms` } }];
  }
  return [ref, {}];
}

function App() {
  const [count, setCount] = useState(0)
  const [lang, setLang] = useState('ru')
  const t = translations[lang]

  // Состояния для формы
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    details: ''
  });
  const [errors, setErrors] = useState({});
  const validate = () => {
    const errs = {};
    if (!/^[a-zA-Zа-яА-ЯёЁ\s'-]+$/.test(form.name.trim())) {
      errs.name = lang === 'ru' ? 'Только буквы' : 'Letters only';
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) {
      errs.email = lang === 'ru' ? 'Некорректный email' : 'Invalid email';
    }
    if (!/^([+\d\s\-()]{7,})$/.test(form.phone.trim())) {
      errs.phone = lang === 'ru' ? 'Некорректный номер' : 'Invalid phone';
    }
    if (!form.details.trim()) {
      errs.details = lang === 'ru' ? 'Заполните описание' : 'Description required';
    }
    return errs;
  };
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      // Отправка данных через EmailJS
      emailjs.send(
        'service_5uwa8t9', // <-- вставьте сюда ваш Service ID
        'template_gw2ufba', // <-- вставьте сюда ваш Template ID
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          projectType: form.projectType,
          details: form.details,
        },
        '2bGOnXA-Mq0mPIuSy' // <-- вставьте сюда ваш Public Key (User ID)
      )
      .then(() => {
        setShowModal(true);
        setForm({ name: '', email: '', phone: '', projectType: '', details: '' });
      })
      .catch(() => {
        alert(lang === 'ru' ? 'Ошибка отправки. Попробуйте позже.' : 'Sending failed. Try again later.');
      });
      return;
    }
  };

  // Функция для плавной прокрутки к якорю
  const scrollToAnchor = (e, anchor) => {
    e.preventDefault();
    const element = document.getElementById(anchor);
    if (element) {
      const headerOffset = 80; // Высота шапки
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Эффект для прокрутки вверх при загрузке и смене языка
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [lang]);

  const [heroRef] = useRevealOnScroll(0, lang);
  const [servicesRef] = useRevealOnScroll(0, lang);
  const [portfolioRef] = useRevealOnScroll(0, lang);
  const [teamRef] = useRevealOnScroll(0, lang);
  const [aboutRef] = useRevealOnScroll(0, lang);
  const [connectRef] = useRevealOnScroll(0, lang);
  const [testimonialsRef] = useRevealOnScroll(0, lang);
  const [contactRef] = useRevealOnScroll(0, lang);

  // Для закрытия модалки по клику вне окна
  const modalBgRef = useRef();
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    if (!showModal) return;
    const handler = (e) => {
      if (modalBgRef.current && e.target === modalBgRef.current) setShowModal(false);
    };
    window.addEventListener('mousedown', handler);
    return () => window.removeEventListener('mousedown', handler);
  }, [showModal]);

  return (
    <div className="min-h-screen text-white font-sans relative">
      <div id="top"></div>
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
            {translations[lang].nav.map(({ label, anchor }) => (
              <a
                key={anchor}
                href={`#${anchor}`}
                onClick={(e) => scrollToAnchor(e, anchor)}
                className="hover:text-[#FF7E3F] transition-colors duration-200 drop-shadow-[0_0_6px_#FF7E3F]"
              >
                {label}
              </a>
            ))}
          </nav>
          {/* Language Switcher + GitHub */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(lang === 'ru' ? 'en' : 'ru')}
              className="w-10 h-10 border border-[#23263A] rounded-lg flex items-center justify-center font-bold text-[#FF7E3F] bg-transparent hover:bg-[#181E36] transition-all duration-300 hover:drop-shadow-[0_0_12px_#FF7E3F] hover:-translate-y-1 transition-transform"
              aria-label="Switch language"
            >
              {lang === 'ru' ? 'EN' : 'RU'}
            </button>
            <a href="https://github.com/IvanZhutyaev" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-[#23263A] rounded-lg flex items-center justify-center transition-all duration-300 hover:drop-shadow-[0_0_12px_#FF7E3F] hover:-translate-y-1 transition-transform">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="text-[#FF7E3F] drop-shadow-[0_0_8px_#FF7E3F]">
                <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.577.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/>
              </svg>
            </a>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section ref={heroRef} className="fade-up flex flex-col items-center justify-center min-h-screen pt-32 pb-16 relative overflow-hidden">
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-6xl md:text-7xl font-extrabold text-[#FFB088] drop-shadow-[0_0_16px_#FF7E3F] mb-6 text-center">{translations[lang].heroTitle}</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 text-center max-w-2xl drop-shadow-[0_0_8px_#FF7E3F]">
            {translations[lang].heroSubtitle}
          </p>
          <div className="flex gap-6">
            <a 
              href="#portfolio" 
              onClick={(e) => scrollToAnchor(e, 'portfolio')}
              className="bg-[#FF7E3F] hover:bg-[#ff965f] text-white font-semibold px-8 py-3 rounded-lg text-lg shadow transition-all duration-300 drop-shadow-[0_0_8px_#FF7E3F] hover:-translate-y-1 transition-transform"
            >
              {translations[lang].viewPortfolio}
            </a>
            <a 
              href="#contact" 
              onClick={(e) => scrollToAnchor(e, 'contact')}
              className="border border-[#FF7E3F] text-[#FF7E3F] hover:bg-[#FF7E3F] hover:text-white font-semibold px-8 py-3 rounded-lg text-lg transition-all duration-300 drop-shadow-[0_0_8px_#FF7E3F] hover:-translate-y-1 transition-transform"
            >
              {translations[lang].contactUs}
            </a>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section id="services" ref={servicesRef} className="fade-up max-w-7xl mx-auto py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-2" data-aos="fade-up">{translations[lang].services}</h2>
        <div className="flex justify-center mb-12">
          <span className="block w-16 h-1 bg-[#FF7E3F] rounded"></span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {translations[lang].servicesList.map((service, idx) => {
            const [cardRef, cardProps] = useRevealOnScroll(idx * 100, lang);
            return (
              <div ref={cardRef} {...cardProps} key={idx} className="fade-up-stagger bg-[#181E36] rounded-xl p-7 shadow flex flex-col items-start hover:drop-shadow-[0_0_12px_#FF7E3F] hover:-translate-y-2 transition-transform duration-300 cursor-pointer">
                <span className="text-3xl mb-4">{service.icon}</span>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
      {/* Portfolio Section */}
      <section id="portfolio" ref={portfolioRef} className="fade-up max-w-7xl mx-auto py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-2">{translations[lang].portfolio}</h2>
        <div className="flex justify-center mb-12">
          <span className="block w-16 h-1 bg-[#FF7E3F] rounded"></span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {translations[lang].portfolioList.map((item, idx) => {
            const [cardRef, cardProps] = useRevealOnScroll(idx * 100, lang);
            return (
              <div ref={cardRef} {...cardProps} key={idx} className="fade-up-stagger bg-[#181E36] rounded-xl p-7 shadow flex flex-col items-start hover:drop-shadow-[0_0_12px_#FF7E3F] hover:-translate-y-2 transition-transform duration-300 cursor-pointer">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300 mb-4">{item.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map(tag => (
                    <span key={tag} className="bg-[#23263A] text-[#FFB088] px-3 py-1 rounded text-xs font-semibold">{tag}</span>
                  ))}
                </div>
                <a href={item.github} className="flex items-center gap-2 text-[#FF7E3F] font-semibold hover:underline mt-auto transition hover:drop-shadow-[0_0_10px_#FF7E3F] hover:-translate-y-2 transition-transform">
                  <span className="text-lg">&#x1F5C3;</span> {translations[lang].githubButton}
                </a>
              </div>
            );
          })}
        </div>
      </section>
      {/* Team Section */}
      <section id="team" ref={teamRef} className="fade-up max-w-7xl mx-auto py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-2">{translations[lang].team}</h2>
        <div className="flex justify-center mb-12">
          <span className="block w-16 h-1 bg-[#FF7E3F] rounded"></span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {translations[lang].teamStats.map((stat, idx) => {
            const [statRef, statProps] = useRevealOnScroll(idx * 100, lang);
            return (
              <div ref={statRef} {...statProps} key={idx} className="fade-up-stagger bg-[#181E36] rounded-xl py-10 flex flex-col items-center shadow hover:drop-shadow-[0_0_12px_#FF7E3F] hover:-translate-y-2 transition-transform duration-300 cursor-pointer">
                <span className="text-3xl md:text-4xl font-extrabold text-[#FF7E3F] mb-2">{stat.value}</span>
                <span className="text-gray-300 text-center">{stat.label}</span>
              </div>
            );
          })}
        </div>
        <h3 className="text-2xl font-bold text-center mb-6 text-gray-200">{translations[lang].coreTech}</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            'C', 'C#', 'C++', 'CSS3', 'GO', 'HTML5', 'JAVA', 'JAVASCRIPT', 'MARKDOWN',
            'PHP', 'POWERSHELL', 'PYTHON', 'BASH SCRIPT', 'TYPESCRIPT', 'WINDOWS TERMINAL',
            'NETLIFY', 'HEROKU', 'GOOGLECLOUD', 'FIREBASE', 'DIGITALOCEAN', 'ORACLE', 'OPENSTACK',
            '.NET', 'ANACONDA', 'ANGULAR', 'ANGULAR.JS', 'BOOTSTRAP', 'DJANGO', 'djANGO', 'REST',
            'FLUTTER', 'FLASK', 'FASTAPI', 'EXPRESS.JS', 'JQUERY', 'JOOMLA', 'METEORJS',
            'NODE-RED', 'NODEMON', 'NODE.JS', 'NEXT', 'NESTJS', 'NUXT', 'NX', 'REACT',
            'REACT NATIVE', 'REACT QUERY', 'REACT ROUTER', 'REACT HOOK FORM', 'REDUX', 'STRAPI',
            'VUE.JS', 'WORDPRESS', 'XAMARIN', 'AMAZON DYNAMODB', 'FIREBASE', 'MICROSOFT SQL SERVER',
            'MONGODB', 'MYSQL', 'SQLITE', 'POSTGRES', 'ADOBE', 'ADOBE PHOTOSHOP', 'ASEPRITE',
            'FIGMA', 'BLENDER', 'SKETCH', 'SKETCHUP', 'STORYBOOK', 'MLFLOW', 'PYTORCH',
            'GITLAB CI', 'GITHUB ACTIONS', 'BITBUCKET', 'GIT', 'GITEA', 'GITEE', 'GITHUB',
            'GITLAB', 'GITPOD', 'ARDUINO', 'DOCKER', 'HOME ASSISTANT', 'HOMEBRIDGE',
            'OPENAPIINITIATIVE', 'NOTION', 'PACKER', 'PLATFORMIO', 'PORTFOLIO', 'POSTMAN',
            'POWER BI', 'UBER', 'GODOT', 'EPICGAMES', 'EA', 'NVIDIA', 'OPENGL', 'PSN', 'XBOX',
            'UNREALENGINE', 'UNITY', 'STEAM'
          ].map((tech, index) => {
            const [techRef, techProps] = useRevealOnScroll(700 + index * 10, lang);
            return (
              <span ref={techRef} {...techProps} key={index} className="fade-up-stagger bg-[#181E36] text-[#FF7E3F] px-6 py-2 rounded font-semibold text-base shadow border border-[#23263A] hover:drop-shadow-[0_0_10px_#FF7E3F] hover:-translate-y-2 transition-transform duration-300 cursor-pointer">
                {tech}
              </span>
            );
          })}
        </div>
      </section>
      {/* About Section */}
      <section id="aboutus" ref={aboutRef} className="fade-up max-w-4xl mx-auto py-20 px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-2">{translations[lang].about}</h2>
        <div className="flex justify-center mb-8">
          <span className="block w-16 h-1 bg-[#FF7E3F] rounded"></span>
        </div>
        <p className="text-gray-300 text-lg mb-10">{translations[lang].aboutText1}</p>
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
        <p className="text-gray-300 text-lg">{translations[lang].aboutText2}</p>
      </section>
      {/* Connect Section */}
      <section id="connect" ref={connectRef} className="fade-up max-w-5xl mx-auto py-20 px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-2">{translations[lang].connect}</h2>
        <div className="flex justify-center mb-8">
          <span className="block w-16 h-1 bg-[#FF7E3F] rounded"></span>
        </div>
        <p className="text-gray-300 text-lg mb-10">{translations[lang].connectText}</p>
        <div className="flex flex-col md:flex-row gap-8 justify-center mb-10">
          {[
            {
              icon: '🛫',
              title: translations[lang].telegram,
              desc: translations[lang].telegramDesc,
              handle: '@CodeForgeStars',
              link: 'https://t.me/ScriptSquadMain'
            },
            {
              icon: '🗣️',
              title: translations[lang].vk,
              desc: translations[lang].vkDesc,
              handle: 'vk.com/codeforge',
              link: 'https://vk.com/CodeForge'
            }
          ].map((block, idx) => {
            const [blockRef, blockProps] = useRevealOnScroll(300 + idx * 100, lang);
            return (
              <a
                href={block.link}
                target="_blank"
                rel="noopener noreferrer"
                ref={blockRef}
                {...blockProps}
                key={idx}
                className="fade-up-stagger bg-[#181E36] rounded-xl p-8 flex-1 flex flex-col items-center shadow hover:drop-shadow-[0_0_12px_#FF7E3F] hover:-translate-y-2 transition-transform duration-300 no-underline cursor-pointer"
                style={{ textDecoration: 'none' }}
              >
                <span className="text-5xl mb-4">{block.icon}</span>
                <h3 className="text-xl font-bold mb-2">{block.title}</h3>
                <p className="text-gray-300 mb-2">{block.desc}</p>
                <span className="text-[#FF7E3F] font-mono font-semibold">{block.handle}</span>
              </a>
            );
          })}
        </div>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {[translations[lang].contactDirect, translations[lang].subscribe].map((btn, idx) => {
            const [btnRef, btnProps] = useRevealOnScroll(500 + idx * 100, lang);
            return (
              <a 
                ref={btnRef} 
                {...btnProps} 
                key={idx} 
                href="#contact" 
                onClick={(e) => scrollToAnchor(e, 'contact')}
                className="fade-up-stagger bg-[#FF7E3F] hover:bg-[#ff965f] text-white font-semibold px-8 py-3 rounded-lg text-lg shadow mb-4 md:mb-0 hover:drop-shadow-[0_0_10px_#FF7E3F] hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
              >
                {btn}
              </a>
            );
          })}
        </div>
      </section>
      {/* Testimonials Section */}
      <section id="testimonials" ref={testimonialsRef} className="fade-up max-w-3xl mx-auto py-20 px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-2">{translations[lang].testimonials}</h2>
        <div className="flex justify-center mb-8">
          <span className="block w-16 h-1 bg-[#FF7E3F] rounded"></span>
        </div>
        <blockquote className="text-xl md:text-2xl italic text-gray-200 mb-8">{translations[lang].testimonialText}</blockquote>
        <div>
          <span className="text-[#FF7E3F] font-semibold">{translations[lang].testimonialAuthor}</span>
          <div className="text-gray-400 text-base">{translations[lang].testimonialCompany}</div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="fade-up max-w-6xl mx-auto py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-2">{translations[lang].getInTouch}</h2>
        <div className="flex justify-center mb-8">
          <span className="block w-16 h-1 bg-[#FF7E3F] rounded"></span>
        </div>
        <div className="flex flex-col md:flex-row gap-12">
          {/* Форма */}
          <form onSubmit={handleSubmit} className="bg-[#181E36] rounded-xl p-8 flex-1 shadow flex flex-col gap-6 hover:drop-shadow-[0_0_12px_#FF7E3F] hover:-translate-y-2 transition-transform duration-300">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={translations[lang].contactForm.name}
              className={`bg-transparent border ${errors.name ? 'border-red-500' : 'border-[#23263A]'} rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#FF7E3F]`}
            />
            {errors.name && <div className="text-red-400 text-xs -mt-4 mb-2">{errors.name}</div>}
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder={translations[lang].contactForm.email}
              className={`bg-transparent border ${errors.email ? 'border-red-500' : 'border-[#23263A]'} rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#FF7E3F]`}
            />
            {errors.email && <div className="text-red-400 text-xs -mt-4 mb-2">{errors.email}</div>}
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder={lang === 'ru' ? 'Телефон' : 'Phone'}
              className={`bg-transparent border ${errors.phone ? 'border-red-500' : 'border-[#23263A]'} rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#FF7E3F]`}
            />
            {errors.phone && <div className="text-red-400 text-xs -mt-4 mb-2">{errors.phone}</div>}
            <input
              type="text"
              name="projectType"
              value={form.projectType}
              onChange={handleChange}
              placeholder={translations[lang].contactForm.projectType}
              className={`bg-transparent border ${errors.projectType ? 'border-red-500' : 'border-[#23263A]'} rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#FF7E3F]`}
            />
            {errors.projectType && <div className="text-red-400 text-xs -mt-4 mb-2">{errors.projectType}</div>}
            <textarea
              name="details"
              value={form.details}
              onChange={handleChange}
              placeholder={translations[lang].contactForm.details}
              rows={4}
              className={`bg-transparent border ${errors.details ? 'border-red-500' : 'border-[#23263A]'} rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#FF7E3F] resize-none`}
            />
            {errors.details && <div className="text-red-400 text-xs -mt-4 mb-2">{errors.details}</div>}
            <button type="submit" className="bg-[#FF7E3F] hover:bg-[#ff965f] text-white font-semibold px-8 py-3 rounded-lg text-lg shadow mt-2 hover:drop-shadow-[0_0_10px_#FF7E3F] hover:-translate-y-2 transition-transform duration-300 cursor-pointer">{translations[lang].contactForm.send}</button>
          </form>
          {/* Контакты */}
          <div className="flex-1 flex flex-col gap-6 justify-center items-center md:items-start">
            <div className="text-left">
              <div className="mb-4">
                <span className="font-bold text-white">{translations[lang].contactInfo.location}</span><br/>
                <span className="text-gray-300">{translations[lang].contactInfo.locationVal}</span>
              </div>
              <div className="mb-4">
                <span className="font-bold text-white">{translations[lang].contactInfo.email}</span><br/>
                <span className="text-gray-300">{translations[lang].contactInfo.emailVal}</span>
              </div>
              <div className="mb-4">
                <span className="font-bold text-white">{translations[lang].contactInfo.response}</span><br/>
                <span className="text-gray-300">{translations[lang].contactInfo.responseVal}</span>
              </div>
            </div>
            <div className="flex gap-6 mt-2">
              <a href="#" className="text-[#FF7E3F] text-2xl hover:scale-110 hover:drop-shadow-[0_0_10px_#FF7E3F] hover:-translate-y-2 transition-transform cursor-pointer"><span className="sr-only">{translations[lang].social.github}</span> <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.577.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/></svg></a>
              <a href="#" className="text-[#FF7E3F] text-2xl hover:scale-110 hover:drop-shadow-[0_0_10px_#FF7E3F] hover:-translate-y-2 transition-transform cursor-pointer"><span className="sr-only">{translations[lang].social.linkedin}</span> <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.966 0-1.75-.79-1.75-1.76s.784-1.76 1.75-1.76 1.75.79 1.75 1.76-.784 1.76-1.75 1.76zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg></a>
              <a href="#" className="text-[#FF7E3F] text-2xl hover:scale-110 hover:drop-shadow-[0_0_10px_#FF7E3F] hover:-translate-y-2 transition-transform cursor-pointer"><span className="sr-only">{translations[lang].social.twitter}</span> <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.39 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.247a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z"/></svg></a>
            </div>
          </div>
        </div>
      </section>
      {showModal && (
        <div ref={modalBgRef} className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="bg-[#181E36] rounded-2xl shadow-2xl p-8 max-w-xs w-full flex flex-col items-center animate-fade-in border border-[#23263A] relative">
            <span className="text-4xl mb-4 drop-shadow-[0_0_12px_#FF7E3F]">🛠️</span>
            <div className="text-lg font-bold mb-6 text-center text-[#FFB088] drop-shadow-[0_0_8px_#FF7E3F]">
              {lang === 'ru' ? 'Данные отправлены!' : 'Form submitted!'}
            </div>
            <button
              onClick={() => setShowModal(false)}
              className="bg-[#FF7E3F] hover:bg-[#ff965f] text-white font-semibold px-8 py-2 rounded-lg text-base shadow transition duration-200 hover:drop-shadow-[0_0_10px_#FF7E3F] hover:-translate-y-1 transition-transform"
            >
              {lang === 'ru' ? 'Закрыть' : 'Close'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
