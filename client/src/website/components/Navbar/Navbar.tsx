import Toggle from '../../theme/themeToggle'
/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from 'twin.macro'
import DropdownTwin from '../Dropdown/Dropdown'
import NavItems from './NavItems'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'





const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const onClick = () => setMenu(!menu);
    return (
        <nav tw=" top-0 p-1 bg-lightnav space-y-1 text-center items-center h-12 md:( flex space-y-0 justify-between)   dark:(bg-darknav)" >
            <div tw="flex justify-between items-center" >
                <Toggle tw="items-center pt-4" />
                <GiHamburgerMenu onClick={onClick} tw="text-white text-2xl md:(hidden) mr-2 cursor-pointer" />
            </div>
            <div css={[menu ? tw`left-0 ` : tw`-left-full`]} tw=" fixed transition-all  bg-lightnav w-screen h-screen space-y-10 md:(static flex h-auto space-y-0 w-auto) dark:(bg-darknav )" >
                <NavItems onClick={onClick} to="/" >Home</NavItems>
                <DropdownTwin
                    onTurnNav={onClick} 
                    name="Rank"
                    navitems={[{
                        name: "People",
                        to: "/peoplerank"
                    }]}
                />
            </div>
        </nav>
    )
}

export default Navbar
