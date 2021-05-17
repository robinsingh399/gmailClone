import React from 'react'
import './Mail.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArchiveIcon from '@material-ui/icons/Archive';
import InfoIcon from '@material-ui/icons/Info';
import DeleteIcon from '@material-ui/icons/Delete';
import MarkunreadIcon from '@material-ui/icons/Markunread';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import LabelIcon from '@material-ui/icons/Label';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import { Icon, IconButton } from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectOpenMail } from './features/mailSlice';
function Mail() {

    const history = useHistory();

    const selectedMail = useSelector(selectOpenMail);

    return (
        <div className="mail">
            <div className="mail_header">
                <div className="mail_leftHeader">
                    <IconButton onClick={()=>history.push("/")}>
                        <ArrowBackIcon />
                        </IconButton>
                        <IconButton>
                            <ArchiveIcon/>
                        </IconButton>
                        <IconButton>
                            <InfoIcon/>
                        </IconButton>
                        <IconButton>
                            <DeleteIcon/>
                        </IconButton>
                    
                        <IconButton>
                            <MarkunreadIcon/>
                        </IconButton>
                        <IconButton>
                            <WatchLaterIcon/>
                        </IconButton>
                        <IconButton>
                            <AssignmentTurnedInIcon/>
                        </IconButton>
                        <IconButton>
                            <MoveToInboxIcon/>
                        </IconButton>
                        <IconButton>
                            <LabelIcon/>
                        </IconButton>
                        <IconButton>
                            <MoreVertIcon/>
                        </IconButton>
                </div>
                <div className="mail_rightHeader">
                        <IconButton>
                            <ChevronLeftIcon/>
                        </IconButton>
                        <IconButton>
                            <ChevronRightIcon/>
                        </IconButton>
                        <IconButton>
                            <KeyboardHideIcon/>
                        </IconButton>
                </div>
            </div>
            <div className="mail_body">
                <div className="mail_bodyHeader">
                        <h2>{selectedMail?.subject}</h2>
                        <LabelImportantIcon className="mail_important"/>
                        <p>{selectedMail?.title}</p>
                        <p className="mail_Time">{selectedMail?.time}</p>
                </div>
                <div className="mail_message">
                        <p>{selectedMail?.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Mail
