import { createSlice } from '@reduxjs/toolkit'

const FeedbackSlice = createSlice({
    name: 'feedbackState',
    initialState: {
        editingItems: null
    },
    reducers: {
        setEditingItem: (state, action) => {
            state.editingItems = action.payload
        },
        clearEditingItem: (state) => {
            state.editingItems = null
        }
    } 
})

export const {setEditingItem, clearEditingItem} = FeedbackSlice.actions
export default FeedbackSlice.reducer