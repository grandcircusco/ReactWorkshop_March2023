import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import GifDetails from './pages/GifDetails/GifDetails';
import Main from './pages/Main/Main';
import { FavoritesContextType, ThemeContextType } from './types/context';
import Favorites from './pages/Favorites/Favorites';

export const ThemeContext = createContext<ThemeContextType | {}>({}) as React.Context<ThemeContextType>
export const FavoritesContext = createContext<FavoritesContextType | {}>({}) as React.Context<FavoritesContextType>;
function App() {
  const [theme, setTheme] = useState<ThemeContextType['theme']>('light');
  const [favorites, setFavorites] = useState<FavoritesContextType['favorites']>([]);

  const toggleFavorite = (id: string) => {
    const inFavorites = favorites.find(item => item === id)
    if (!inFavorites) {
      setFavorites([...favorites, id]);
    } else {
      setFavorites(favorites.filter(item => item !== id));
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <FavoritesContext.Provider value={{ favorites, setFavorites, toggleFavorite }}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/details" element={<GifDetails />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </FavoritesContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
