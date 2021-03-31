/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import tw from 'twin.macro'
import { Link } from 'react-router-dom';
import { NavItemsInterface } from "./NavbarInterface"

const NavItems = ({ to, children, onClick }: NavItemsInterface): JSX.Element => {
    return (
        <Link to={to} onClick={onClick} type="button" tw="inline-flex justify-center w-full rounded-md  shadow-sm px-2 py-2  text-sm font-medium text-white hover:text-blue-400 focus:(outline-none text-blue-400) " id="options-menu" aria-expanded="true" aria-haspopup="true">
            {children}
        </Link>
    ) 
}

export default NavItems
