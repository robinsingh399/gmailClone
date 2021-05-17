import React from 'react'
import './EmailRow.css';
import {useHistory} from 'react-router-dom';
import {Checkbox , Icon, IconButton} from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import LabelImportantSharpIcon from '@material-ui/icons/LabelImportantSharp';
import { useDispatch } from 'react-redux';
import { selectMail } from './features/mailSlice';

function EmailRow({id,subject,title,description,time}) {

    const history =  useHistory();
    
    const dispatch = useDispatch();

    const openMail = ()=>{
        dispatch(selectMail({
            id,
            title,
            subject,
            description,
            time,
        })
        );
        history.push("/mail");
    };

    return (
        <div onClick={openMail} className="emailRow">
            <div className="emailRow_title">
                <Checkbox/>
                <IconButton>
                <StarIcon/>
                </IconButton>
                <IconButton>
                <LabelImportantSharpIcon/>
                </IconButton>
            <h2>{title}</h2>
            </div>
            <h3>{subject}<span>-</span></h3>
            <p>{description}</p>
            <p className="time">{time}</p>
        </div>
    )
}

export default EmailRow
