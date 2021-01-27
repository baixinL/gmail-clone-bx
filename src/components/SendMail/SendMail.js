import { Close } from '@material-ui/icons';
import React from 'react';
import './SendMail.css';
import { useForm } from "react-hook-form";
import {
    closeSendMessage
} from "../../features/mailReducer/mailReducer";
import { useDispatch } from "react-redux";

function SendMail(props) {
    const dispatch = useDispatch();
    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = (data) => {
        console.log(data);

        /**
          {
            message: "88gff"
            subject: "55hg"
            to: "12212"
          } 
         */
    }
    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <Close
                    className="sendMail__close"
                    onClick = {
                        () => {
                            dispatch(closeSendMessage())
                        }
                    }
                    />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name="to"
                    type="email"
                    placeholder="To"
                    ref={register({required: true})}
                />
                {errors.to && <p className="sendMail__error">To is required</p>}
                <input
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    ref={register({required: true})}
                />
                {errors.subject && <p className="sendMail__error">To is required</p>}
               <input
                    name="message"
                    type="text"
                    placeholder="Message..."
                    className="sendMail__message"
                    ref={register({required: true})}
               />
               {errors.message && <p className="sendMail__error">To is required</p>}
                <div className="sendMail__options">
                    <button className="sendMail__send">Send</button>
                </div>
            </form>
        </div>
    );
}

export default SendMail;