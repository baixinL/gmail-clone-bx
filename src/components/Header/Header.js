import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../gmail-logo.png'
import { AccountCircle, Apps, Notifications } from '@material-ui/icons';
import SearchInput from '../SearchInput/SearchInput'
import { IconButton } from '@material-ui/core';

function Header() {
    return (
            <div className="header">
                <div className="header__left">
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                    <img className="logo" src={logo} alt="gmailLogo"></img>

                </div>
                <div className="header__middle">
                    <SearchInput />
                </div>
                <div className="header__right">
                    <IconButton>
                        <Apps />
                    </IconButton>
                    <IconButton>
                        <Notifications />
                    </IconButton>
                    <IconButton>
                        <AccountCircle />
                    </IconButton>
                </div>
            </div>
        );
}

export default Header;