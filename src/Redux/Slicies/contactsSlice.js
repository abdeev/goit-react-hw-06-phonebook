import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';

const contactInitialState = {
  contacts: [
    { id: 'id-1', name: 'Pointer Event', number: '459-12-56' },
    { id: 'id-2', name: 'Jack Richardson', number: '443-89-12' },
    { id: 'id-3', name: 'Stella Artois', number: '645-17-79' },
    { id: 'id-4', name: 'Phillp Morris', number: '227-91-26' },
    { id: 'id-5', name: 'Klementina Zakruzhetsaya', number: '427-99-17' },
  ],
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );

      state.contacts.splice(index, 1);
    },
  },
});
export const { addContact, getVisibleContacts, deleteContact } =
  contactSlice.actions;
export const contactReducer = contactSlice.reducer;
