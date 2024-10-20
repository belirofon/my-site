import React from 'react';
import logo from '../../../shared/assets/logo.svg';
import icon1 from '../../../shared/assets/icon_1.png';
import icon2 from '../../../shared/assets/icon_2.png';
import icon3 from '../../../shared/assets/icon_3.png';
import icon4 from '../../../shared/assets/icon_4.png';
// Интерфейс для типов навигационных элементов
interface NavItem {
  label: string;
  href: string;
  src: string;// Ссылка на изображение
}

// Список элементов навигации
const navItems: NavItem[] = [
  { label: 'Обо мне', href: '#about', src: icon1 },
  { label: 'Мои проекты', href: '#projects', src: icon2 }, 
  { label: 'Мои контакты', href: '#contacts', src: icon3 }, 
  { label: 'Мои услуги', href: '#services', src: icon4 }, 
];

const Header: React.FC = () => {
  const logoPathRef = React.useRef<SVGPathElement | undefined>(undefined);

  React.useEffect(() => {
    if (logoPathRef.current) {
      const length = logoPathRef.current.getTotalLength(); // Получаем длину пути
      logoPathRef.current.style.strokeDasharray = `${length}`;
      logoPathRef.current.style.strokeDashoffset = `${length}`;
      logoPathRef.current.style.animation = 'draw 3s forwards ease-in-out';
    }
  }, []);
  return (
    <header className="bg-gray-800 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <img  src={logo} className="w-32" alt="Мой логотип" />
        <nav>
          <ul className="flex lg:space-x-6 md:space-x-6">
            {navItems.map((item) => (
              <li key={item.href} className='flex items-center'>
                <img src={item.src} alt={item.label} width={25}/>
                <a
                  href={item.href}
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <style>{`
        @keyframes draw {
          from {
            stroke-dashoffset: 1000;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
