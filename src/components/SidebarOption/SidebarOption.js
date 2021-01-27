import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

class SidebarOption extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={`sidebar__option ${this.props.selected && 'sidebar__active'} `}>
                <this.props.Icon />
                <h3>{this.props.title}</h3>
                <p>{this.props.number}</p>
            </div>
        );
    }
}

SidebarOption.propTypes = {

};

export default SidebarOption;