import React, { useState } from 'react';
import logo from '../assets/5.png';

import { 
    Nav,
    LeftMenu,
    RightMenu, 
    NavLink,
    Bars, 
    NavMenu, 
    NavBtn,
    NavBtnLink,
    MenuNavLink,
    UserIcon
} from './NavbarElements';
import SearchBarUpperMenu, {SearchBarDownMenu} from '../SearchBar.js';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);


    return (
        <div>
            <Nav>
                <LeftMenu >
                    <NavLink to="/">
                        <img src={logo} alt="Logo makemyweek" width='50px'/>
                    </NavLink>
                    {/*Meter Bars y icono en un div */}

                    <Bars onClick={()=>setShowMenu(!showMenu)}/>
                    <NavMenu showMenu={showMenu} >
                        <MenuNavLink to="/myprofile" >
                            Profile 
                        </MenuNavLink>
                        <MenuNavLink to="/myweek" >
                            Your Week
                        </MenuNavLink>
                        <MenuNavLink to="/shopping" >
                            Shopping List 
                        </MenuNavLink>
                        <MenuNavLink to="/login" >
                            Login 
                        </MenuNavLink>
                    </NavMenu>
                </LeftMenu>

                <RightMenu>
                    <SearchBarUpperMenu />
                    <NavBtn>
                        <NavBtnLink to='/login'>
                            <UserIcon />
                        </NavBtnLink>
                    </NavBtn>
                </RightMenu>
                
            </Nav>
            <SearchBarDownMenu />
         </div>   
    )
}

export default Navbar;
