// src/pages/HomePage.tsx
import React from 'react';
import SearchBar from '../components/SearchBar';
import Checkbox from '../components/Checkbox';

const HomePage: React.FC = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>欢迎搜索</h1>
      <SearchBar />
      <Checkbox/>
    </div>
  );
};

export default HomePage;
