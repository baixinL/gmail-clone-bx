import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { Icon } from '@material-ui/core';
import { ArrowDropDownSharp } from '@material-ui/icons';
import './SearchInput.css'

function SearchInput() {
    return (
            <div className="search__inner">
                <Icon>
                    <SearchIcon />
                </Icon>
                <input placeholder="please input keywords" />
                <ArrowDropDownSharp></ArrowDropDownSharp>
            </div>
        );
}

export default SearchInput;