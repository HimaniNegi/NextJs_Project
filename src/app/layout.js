"use client"
import Sidebar from "@/components/sidebar";
import "./globals.css";
import { Inter } from "next/font/google";
import { useEffect, useState } from 'react';
// import type { AppProps } from 'next/app'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next ap",
};

export default function RootLayout({ children }) {
 

const lightTheme = createTheme({
  palette: {
    mode: 'light'
  }
})

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

function getActiveTheme(themeMode) {
  return themeMode === 'light' ? lightTheme : darkTheme;
}
  const [activeTheme, setActiveTheme] = useState(lightTheme);
  const [selectedTheme, setSelectedTheme] = useState('light');

  const toggleTheme = () => {
    const desiredTheme = selectedTheme === 'light' ? 'dark' : 'light';

    setSelectedTheme(desiredTheme);
  };

  useEffect(() => {
    setActiveTheme(getActiveTheme(selectedTheme))
  }, [selectedTheme]);
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <ThemeProvider theme={activeTheme}>
        <Sidebar />
        <button
  onClick={toggleTheme}  
  color={'info'}
>
Toggle Theme
</button>
        {children}
        </ThemeProvider>
       
      </body>
    </html>
  );
}
