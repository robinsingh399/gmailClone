import { Button,IconButton } from '@material-ui/core';
import React from 'react'
import './Sidebar.css';
import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import SidebarOption from './SidebarOption';
import StarIcon from '@material-ui/icons/Star';
import WatchLaterSharpIcon from '@material-ui/icons/WatchLaterSharp';
import LabelImportantSharpIcon from '@material-ui/icons/LabelImportantSharp';
import SendSharpIcon from '@material-ui/icons/SendSharp';
import InsertDriveFileSharpIcon from '@material-ui/icons/InsertDriveFileSharp';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import { openSendMessage } from './features/mailSlice';
import {mailSlice} from './features/mailSlice';
import { useDispatch } from 'react-redux';
function Sidebar() {

    const dispatch = useDispatch();

    return (
        <div className="sidebar">
            <Button
             startIcon = {<AddIcon fontSize="large" />}
                className="sidebar_compose"
              onClick={()=>dispatch(openSendMessage())}
              >Compose</Button>
            <SidebarOption title="Inbox" Icon={InboxIcon} number="54" selected={true}/>
            <SidebarOption title="Starred" Icon={StarIcon} number="54"/>
            <SidebarOption title="Snoozed" Icon={WatchLaterSharpIcon} number="54"/>
            <SidebarOption title="Important" Icon={LabelImportantSharpIcon} number="54"/>
            <SidebarOption title="Sent" Icon={SendSharpIcon} number="54"/>
            <SidebarOption title="Categories" Icon={InsertDriveFileSharpIcon} number="54"/>
            <SidebarOption title="[Imap]/Trash" Icon={LabelImportantSharpIcon} number="54"/>
            <SidebarOption title="Personal" Icon={LabelImportantSharpIcon} number="54"/>

            <div className="sidebar_footer">
                <div className="sidebar_footerIcons">
                    <IconButton>
                        <PersonIcon/>
                    </IconButton>
                    <IconButton>
                        <DuoIcon/>
                    </IconButton>
                    <IconButton>
                        <PhoneIcon/>
                    </IconButton>
                </div>
            </div>

        </div>
    )
}

export default Sidebar
