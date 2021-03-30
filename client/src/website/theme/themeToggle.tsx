import React from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';
import tw from 'twin.macro';
import { ThemeContext } from './themeContext';

const HiSunStyle = tw(HiSun)`text-gray-500 dark:text-gray-400 text-2xl cursor-pointer`
const HiMoonStyle = tw(HiMoon)`text-gray-500 dark:text-gray-400 text-2xl cursor-pointer`
const Div = tw.div`transition duration-500 ease-in-out rounded-full p-2`

const Toggle = () => {
    const { theme, setTheme } = React.useContext(ThemeContext);

    return (
        <Div>
            {theme === 'dark' ? (
                <HiSunStyle
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                />
            ) : (
                <HiMoonStyle
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                />
            )}
        </Div>
    );
};

export default Toggle;