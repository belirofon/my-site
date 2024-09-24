import React from 'react';
import logo from '../../../shared/assets/logo.webp';
// Интерфейс для типов навигационных элементов
interface NavItem {
  label: string;
  href: string;
}

// Список элементов навигации
const navItems: NavItem[] = [
  { label: 'Обо мне', href: '#about' },
  { label: 'Мои проекты', href: '#projects' },
  { label: 'Мои контакты', href: '#contacts' },
  { label: 'Мои услуги', href: '#services' },
];

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} className="w-32" alt="Мой логотип" />
        <nav>
          <ul className="flex lg:space-x-6 md:space-x-6">
            {navItems.map((item) => (
              <li key={item.href}>
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
    </header>
  );
};

export default Header;
