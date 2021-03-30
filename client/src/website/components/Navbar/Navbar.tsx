import Toggle from '../../theme/themeToggle'
import {Nav} from './Navbar.element'
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import Dropdown from '../Dropdown/Dropdown'





const Navbar = () => {
    return (
        <Nav>
            <Toggle />
            <Dropdown />
            <Dropdown />
            <Dropdown />
        </Nav>
    )
}

export default Navbar
