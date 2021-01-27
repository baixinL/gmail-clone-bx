import { Checkbox, IconButton } from '@material-ui/core';
import { LabelImportantOutlined, StarBorderOutlined } from '@material-ui/icons';
import React from 'react';
import './EmailRow.css';
import { useHistory } from "react-router-dom";

function EmailRow({id, title, subject, description, time}) {
    const history = useHistory();
    return (
        <div onClick={()=>{history.push({
            pathname: "/mail",
            params: {
                id, title, subject, description, time
            }
        })}} className="emailRow">
            <div className="emailRow__options">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlined />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlined />
                </IconButton>
            </div>
            <div className="emailRow__title">{title}</div>
            <div className="emailRow__message">
                <h4>{subject}</h4>
                 <span className="emailRow__description">-{description}</span>
            </div>
            <div className="emailRow__time">{time}</div>
        </div>
        
    );
}

export default EmailRow;