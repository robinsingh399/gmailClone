import React from 'react'
import './SendMail.css';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import {useForm} from "react-hook-form";
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { db } from './firebase';
import firebase from 'firebase';
function SendMail() {

    const dispatch = useDispatch();

    const {register,handleSubmit,formState: { errors }} = useForm();

    const onSubmit = (formdata)=>{
        console.log(formdata);
        db.collection('emails').add(
            {
                To : formdata.to,
                Name : formdata.subject,
                Message: formdata.message,
                timestamp : firebase.firestore.FieldValue.serverTimestamp()
            });
            dispatch(closeSendMessage());
    };

    return (
        <div className="sendMail">
            <div className="sendMail_header">
                <h3>New Message</h3>
                <CloseIcon className="sendMail_close" onClick={()=>dispatch(closeSendMessage())}/>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name='to' placeholder="To" type="email" {...register("to",{ required: true })}/>
                {errors.to && <p className="sendMail_error">To is required</p>}
                <input name='subject' placeholder="Subject" type="text" {...register("subject",{ required: true })}/>
                {errors.subject && <p className="sendMail_error">Subject is required</p>}
                <input name='message' placeholder="Message..."  className="sendMail_message" type="text" {...register("message",{ required: true })}/>
                {errors.message && <p className="sendMail_error">Message is required</p>}
                <div className="sendMail_Options">
                    <Button className="sendMail_send" color="primary" variant="contained" type="submit">Send</Button>
                </div>
            </form>
            
        </div>
    )
}

export default SendMail
