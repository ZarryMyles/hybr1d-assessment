import React from 'react'
import Head from 'next/head'

// Theme Switcher Components
import Toggler from '../components/ThemeToggler'
import { ThemeProvider } from '../contexts/themeContext'

// Search Function Components
// import { Search } from '../components/Search';
import Search from '../components/test'
import '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="p-0 m-0 w-screen h-screen bg-bgLight dark:bg-gray-800 transition-all duration-500 flex flex-col items-center justify-center">
      {/* Metadata and Page Info */}
      <Head>
        <title>Hybr1d Assessment</title>
        <meta
          name="description"
          content="Created as part of the Hybr1d recruitment assessment"
        />
      </Head>

      {/* Theme Switcher Button */}
      <ThemeProvider>
        <Toggler />
      </ThemeProvider>

      <h1 className="text-gray-800 font-quicksand dark:text-gray-200 transition duration-500 font-quicksand font-semibold text-3xl">
        HN Search Application
      </h1>
      <Search />
    </div>
  )
}
