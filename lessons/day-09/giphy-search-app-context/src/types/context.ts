import { Dispatch } from "react";

export interface ThemeContextType {
    theme: 'light' | 'dark';
    setTheme: Dispatch<React.SetStateAction<"light" | "dark">>;
}

export interface FavoritesContextType {
    favorites: string[]; // array of ID'S
    setFavorites: Dispatch<React.SetStateAction<string[]>>;
    toggleFavorite: (id: string) => void;
}

