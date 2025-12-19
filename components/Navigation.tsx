import React, { useState, useEffect } from 'react';
    import { Menu, X } from 'lucide-react';
    import { NavItem, SectionId } from '../types';
    
    const NAV_ITEMS: NavItem[] = [
      { label: 'Обо мне', id: SectionId.ABOUT },
      { label: 'Для кого', id: SectionId.PROBLEMS },
      { label: 'Форматы', id: SectionId.SERVICES },
      { label: 'Отзывы', id: SectionId.REVIEWS },
      { label: 'Вопросы', id: SectionId.FAQ },
      { label: 'Инсайты', id: SectionId.ARTICLES },
    ];
    
    interface NavigationProps {
      currentView: 'home' | 'service' | 'article';
      onNavigate: (view: 'home', sectionId?: string) => void;
    }
    
    export const Navigation: React.FC<NavigationProps> = ({ currentView, onNavigate }) => {
      const [isScrolled, setIsScrolled] = useState(false);
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
      useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
      const handleNavClick = (id: string) => {
        setIsMobileMenuOpen(false);
        onNavigate('home', id);
      };
    
      return (
        <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled || isMobileMenuOpen || currentView !== 'home' ? 'bg-white py-4 border-b border-black' : 'bg-transparent py-6'
          }`}
        >
          <div className="container mx-auto px-6 flex items-center justify-between">
            <div className="flex items-center cursor-pointer z-50 group" onClick={() => onNavigate('home', 'hero')}>
              <div className="w-8 h-8 bg-black mr-3 group-hover:bg-red-600 transition-colors hidden md:block"></div>
              <span className={`text-3xl font-bold font-oswald uppercase tracking-tighter ${isScrolled || isMobileMenuOpen || currentView !== 'home' ? 'text-black' : 'text-black md:text-black'}`}>
                Lydia Eguy
              </span>
            </div>
    
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-12">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-sm font-bold uppercase tracking-widest font-oswald text-black hover:text-red-600 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick(SectionId.CONTACTS)}
                className={`px-8 py-3 transition-all duration-300 uppercase font-bold tracking-widest font-oswald text-sm ${
                  isScrolled || currentView !== 'home'
                    ? 'bg-black text-white hover:bg-red-600'
                    : 'bg-black text-white hover:bg-red-600'
                }`}
              >
                Связаться
              </button>
            </div>
    
            {/* Mobile Toggle */}
            <div className="md:hidden z-50">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-black">
                {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>
          </div>
    
          {/* Mobile MenuOverlay */}
          <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) md:hidden ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}>
            <div className="flex flex-col space-y-10 text-center">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-4xl font-bold font-oswald uppercase text-black hover:text-red-600 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => handleNavClick(SectionId.CONTACTS)}
                className="mt-10 px-10 py-4 bg-red-600 text-white font-bold font-oswald uppercase tracking-widest text-sm"
              >
                Написать мне
              </button>
            </div>
          </div>
        </nav>
      );
    };