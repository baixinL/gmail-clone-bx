import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import { Icon } from '@material-ui/core';
import { ArrowDropDownSharp } from '@material-ui/icons';

class SearchInput extends Component {
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
            <div className="search__inner">
                <Icon>
                    <SearchIcon />
                </Icon>
                <input className="search__input" placeholder="please input keywords" />
                <ArrowDropDownSharp></ArrowDropDownSharp>
            </div>
        );
    }
}

SearchInput.propTypes = {

};

export default SearchInput;