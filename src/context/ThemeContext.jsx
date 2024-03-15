import { createContext, useReducer } from 'react';

export const ThemeContext = createContext(null);

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_THEME':
      return { ...state, backgroundColor: action.payload };
    default:
      return state;
  }
};

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, {
    backgroundColor: 'peachpuff',
  });

  const changeTheme = (color) => {
    dispatch({ type: 'CHANGE_THEME', payload: color });
  };

  return (
    <ThemeContext.Provider value={{ ...state, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
