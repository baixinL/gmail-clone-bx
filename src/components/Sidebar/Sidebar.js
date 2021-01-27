import React from 'react';
import { Button, IconButton } from '@material-ui/core';
import { AccessTime, Add, Duo, ExpandMoreOutlined, Inbox,LabelImportant,More,NearMe,Note,Person, Phone, Star } from '@material-ui/icons';
import './Sidebar.css';
import SidebarOption from '../SidebarOption/SidebarOption'

function Sidebar(props) {
    return (
            <div className="sidebar">
                <Button startIcon={<Add fontSize="large" />} className="sidebar__compose">Compose</Button>
                <SidebarOption Icon={Inbox} title="Inbox" number={54} selected={true} />
                <SidebarOption Icon={Star} title="Star" number={54} />
                <SidebarOption Icon={AccessTime} title="snoozed" number={54} />
                <SidebarOption Icon={LabelImportant} title="Important" number={54} />
                <SidebarOption Icon={NearMe} title="Sent" number={54} />
                <SidebarOption Icon={Note} title="Drafts" number={54} />
                <SidebarOption Icon={ExpandMoreOutlined} title="More" number={54} />
                <div className="sidebar__footer">
                    <div className="side__footerIcons">
                        <IconButton>
                            <Person />
                        </IconButton>
                        <IconButton>
                            <Duo />
                        </IconButton>
                        <IconButton>
                            <Phone />
                        </IconButton>
                    </div>
                </div>
            </div>
        );
}

export default Sidebar;