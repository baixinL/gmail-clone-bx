import {
    createSlice
} from '@reduxjs/toolkit';

export const mailSlice = createSlice({
    name: 'mail',
    initialState: {
        sendMessageIsOpen: false,
    },
    reducers: {
        openSendMessage: state => {
            if (state.sendMessageIsOpen) return
            state.sendMessageIsOpen = true;
            console.log('openSendMessage')
        },
        closeSendMessage: state => {
            if (!state.sendMessageIsOpen) return
            state.sendMessageIsOpen = false;
        }
    },
});

export const {
    openSendMessage,
    closeSendMessage
} = mailSlice.actions;

export const selectSendMessageIsOpen = state => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;
