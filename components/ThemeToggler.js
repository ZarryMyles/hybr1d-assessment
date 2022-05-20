import React from 'react';
import { ThemeContext } from '../contexts/themeContext';
// import "../styles/Toggler.module..css";

const Toggle = () => {
    const { theme, setTheme } = React.useContext(ThemeContext);

    return (
        <div className="fixed top-3 right-0 flex justify-center items-center h-10 w-10 rounded-full rounded-tr-none rounded-br-none drop-shadow-2xl dark:drop-shadow-none bg-gray-400 dark:bg-gray-500 ">
            <input id="toggle" type="checkbox"
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="toggleT m-2 cursor-pointer"
            ></input>
        </div>
    );
};

export default Toggle;