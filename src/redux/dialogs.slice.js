import { createSlice } from "@reduxjs/toolkit";

const dialogsSlice = createSlice({
    name: 'dialogs',
    initialState: {
        dialogItems: [
            { id: 1, name: 'Dima' },
            { id: 2, name: 'Andrey' },
            { id: 3, name: 'Sveta' },
            { id: 4, name: 'Sasha' },
            { id: 5, name: 'Vika' },
            { id: 6, name: 'Valeriy' }
        ],
        messages: [
            { text: 'Hello!' },
            { text: 'Hi!' },
            { text: 'How are you?' }
        ]
    },
    reducers: {
        sendMessage(state, action) {
            state.messages.push({ text: action.payload.newMessageBody });
        }
    }
});

export default dialogsSlice.reducer;
export const { sendMessage } = dialogsSlice.actions;