import { Checkbox, IconButton } from '@material-ui/core';
import { ArrowDropDown, ChevronLeft, ChevronRight, KeyboardHide, Inbox, Settings, MoreVert, Redo, People, Bookmark } from '@material-ui/icons';
import React from 'react';
import './EmailList.css';
import Section from '../Section/Section';
import EmailRow from '../EmailRow/EmailRow';

function EmailList() {
    return (
            <div className="emailList">
                <div className="emailList__setting">
                    <div className="emailList__settingsLeft">
                        <Checkbox />
                        <IconButton>
                            <ArrowDropDown />
                        </IconButton>
                        <IconButton>
                            <Redo />
                        </IconButton>
                        <IconButton>
                            <MoreVert />
                        </IconButton>
                    </div>
                    <div className="emailList__settingsRight">
                        <Checkbox />
                        <IconButton>
                            <ChevronLeft />
                        </IconButton>
                        <IconButton>
                            <ChevronRight />
                        </IconButton>
                        <IconButton>
                            <KeyboardHide />
                        </IconButton>
                        <IconButton>
                            <Settings />
                        </IconButton>
                    </div>
                </div>
                <div className="emailList__sections">
                    <Section Icon={Inbox} title="primary" color="red" selected />
                    <Section Icon={People} title="Social" color="#1A73E8" />
                    <Section Icon={Bookmark} title="Promotions" color="green" />
                </div>
                <div className="emailList__list">
                    <EmailRow id = '1'
                    title = 'SarachSarachSarachSarach'
                    subject = "say hello from Sarach1"
                    description = "hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up?hello,this is Sarach.What's up? Do you wanna shopping tomorrow with me? The mail sale.I wanna buy cotton padded clotheshello,this is Sarach.What's up? Do you wanna shopping tomorrow with me? The mail sale.I wanna buy cotton padded clotheshello,this is Sarach.What's up? Do you wanna shopping tomorrow with me? The mail sale.I wanna buy cotton padded clotheshello,this is Sarach.What's up? Do you wanna shopping tomorrow with me? The mail sale.I wanna buy cotton padded clotheshello,this is Sarach.What's up? Do you wanna shopping tomorrow with me? The mail sale.I wanna buy cotton padded clotheshello,this is Sarach.What's up? Do you wanna vshopping tomorrow with me? The mail sale.I wanna buy cotton padded clothesvhello,this is Sarach.What's up? Do you wanna shopping tomorrow with me? The mail sale.I wanna buy cotton padded clotheshello,this is Sarach.What's up? Do you wanna shopping tomorrow with me? The mail sale.I wanna buy cotton padded clothes"
                    time = '20210127' />
                     <EmailRow id = '2'
                    title = 'Sarach'
                    subject = "say hello from Sarach2"
                    description = "hello,this is Sarach.What's up? Do you wanna shopping tomorrow with me? The mail sale.I wanna buy cotton padded clotheshello,this is Sarach.What's up? Do you wanna shopping tomorrow with me? The mail sale.I wanna buy cotton padded clothes"
                    time = '20210127' />
                     <EmailRow id = '3'
                    title = 'Sarach'
                    subject = "say hello from Sarach3"
                    description = "hello,this is Sarach.What's up? Do you wanna shopping tomorrow with me? The mail sale.I wanna buy cotton padded clotheshello,this is Sarach.What's up? Do you wanna shopping tomorrow with me? The mail sale.I wanna buy cotton padded clothes"
                    time = '20210127' />
                     <EmailRow id = '4'
                    title = 'Sarach'
                    subject = "say hello from Sarach4"
                    description = "hello,this is Sarach.What's up? Do you wanna shopping tomorrow with me? The mail sale.I wanna buy cotton padded clotheshello,this is Sarach.What's up? Do you wanna shopping tomorrow with me? The mail sale.I wanna buy cotton padded clothes"
                    time = '20210127' />
                     <EmailRow id = '5'
                    title = 'Sarach'
                    subject = "say hello from Sarach5"
                    description = "hello,this is Sarach.What's up? Do you wanna shopping tomorrow with me? The mail sale.I wanna buy cotton padded clotheshello,this is Sarach.What's up? Do you wanna shopping tomorrow with me? The mail sale.I wanna buy cotton padded clothes"
                    time = '20210127' />
                     <EmailRow id = '6'
                    title = 'Sarach'
                    subject = "say hello from Sarach6"
                    description = "hello,this is Sarach.What's up? Do you wanna shopping tomorrow with me? The mail sale.I wanna buy cotton padded clotheshello,this is Sarach.What's up? Do you wanna shopping tomorrow with me? The mail sale.I wanna buy cotton padded clothes"
                    time = '20210127' />
                     <EmailRow id = '7'
                    title = 'Sarach'
                    subject = "say hello from Sarach7"
                    description = "hello,this is Sarach.What's up? Do you wanna shopping tomorrow with me? The mail sale.I wanna buy cotton padded clotheshello,this is Sarach.What's up? Do you wanna shopping tomorrow with me? The mail sale.I wanna buy cotton padded clothes"
                    time = '20210127' />
                     <EmailRow id = '8'
                    title = 'Sarach'
                    subject = "say hello from Sarach8"
                    description = "hello,this is Sarach.What's up? Do you wanna shopping tomorrow with me? The mail sale.I wanna buy cotton padded clotheshello,this is Sarach.What's up? Do you wanna shopping tomorrow with me? The mail sale.I wanna buy cotton padded clothes"
                    time = '20210127' />
                     <EmailRow id = '9'
                    title = 'Sarach'
                    subject = "say hello from Sarach9"
                    description = "hello,this is Sarach.What's up? Do you wanna shopping tomorrow with me? The mail sale.I wanna buy cotton padded clotheshello,this is Sarach.What's up? Do you wanna shopping tomorrow with me? The mail sale.I wanna buy cotton padded clothes"
                    time = '20210127' />

                     <EmailRow id = '10'
                    title = 'Sarach'
                    subject = "say hello from Sarach10"
                    description = "hello,this is Sarach.What's up? Do you wanna shopping tomorrow with me? The mail sale.I wanna buy cotton padded clotheshello,this is Sarach.What's up? Do you wanna shopping tomorrow with me? The mail sale.I wanna buy cotton padded clothes"
                    time = '20210127' />
                     <EmailRow id = '11'
                    title = 'Sarach'
                    subject = "say hello from Sarach11"
                    description = "hello,this is Sarach.What's up? Do you wanna shopping tomorrow with me? The mail sale.I wanna buy cotton padded clotheshello,this is Sarach.What's up? Do you wanna shopping tomorrow with me? The mail sale.I wanna buy cotton padded clothes"
                    time = '20210127' />
                     <EmailRow id = '12'
                    title = 'Sarach'
                    subject = "say hello from Sarach12"
                    description = "hello,this is Sarach.What's up? Do you wanna shopping tomorrow with me? The mail sale.I wanna buy cotton padded clotheshello,this is Sarach.What's up? Do you wanna shopping tomorrow with me? The mail sale.I wanna buy cotton padded clothes"
                    time = '20210127' />
                     <EmailRow id = '13'
                    title = 'Sarach'
                    subject = "say hello from Sarach13"
                    description = "hello,this is Sarach.What's up? Do you wanna shopping tomorrow with me? The mail sale.I wanna buy cotton padded clotheshello,this is Sarach.What's up? Do you wanna shopping tomorrow with me? The mail sale.I wanna buy cotton padded clothes"
                    time = '20210127' />

                </div>
            </div>
    );
}

export default EmailList;
