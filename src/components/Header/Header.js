import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../gmail-logo.png'
import { AccountCircle, Apps, Notifications } from '@material-ui/icons';
import SearchInput from '../SearchInput/SearchInput'
import { IconButton } from '@material-ui/core';

class Header extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
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
}

Header.propTypes = {

};

export default Header;