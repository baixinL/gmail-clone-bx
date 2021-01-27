import { IconButton } from '@material-ui/core';
import { ArrowBack, CheckCircle, Delete, ExitToApp, LabelImportant, MoreVert, MoveToInbox, Print, UnfoldMore, WatchLater } from '@material-ui/icons';
import EmailIcon from '@material-ui/icons/Email';
import ErrorIcon from '@material-ui/icons/Error';
import React from 'react';
import './Mail.css';
import { useHistory } from 'react-router-dom'

function Mail(props) {
    const history = useHistory()
    console.log('props', history.location)
    const {id, title, subject, description, time} = history.location.params
    return (
            <div className="mail">
                <div className="mail__tools">
                    <div className="mail__toolsLeft">
                        <IconButton onClick={()=>{history.push('/')}}>
                            <ArrowBack />
                        </IconButton>
                        <IconButton>
                            <MoveToInbox />
                        </IconButton>
                        <IconButton>
                            <ErrorIcon />
                        </IconButton>
                        <IconButton>
                            <Delete />
                        </IconButton>
                        <IconButton>
                            <EmailIcon />
                        </IconButton>
                        <IconButton>
                            <WatchLater />
                        </IconButton>
                        <IconButton>
                            <CheckCircle />
                        </IconButton>
                        <IconButton>
                            <LabelImportant />
                        </IconButton>
                        <IconButton>
                            <MoreVert />
                        </IconButton>
                    </div>
                    <div className="mail__toolsRight">
                        <IconButton>
                            <UnfoldMore />
                        </IconButton>
                        <IconButton>
                            <Print />
                        </IconButton>
                        <IconButton>
                            <ExitToApp />
                        </IconButton>
                    </div>
                </div>
                <div className="mail_frame">
                    <div className="mail__body">
                        <div className="mail__bodyHeader">
                            <h2>{subject}</h2>
                            <LabelImportant className="mail__important" />
                            <p>{title}</p>
                            <p class="mail__time">{time}</p>
                        </div>
                        <div className="mail__bodyMessage">{description}</div>
                    </div>
                </div>
            </div>
        );
}

export default Mail;