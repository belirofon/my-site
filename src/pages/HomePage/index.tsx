import React from 'react';

// Определяем интерфейс для пропсов
interface HomePageProps {
  children?: React.ReactNode;
}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <>
    HomePage
    </>
  );
};

export default HomePage;
