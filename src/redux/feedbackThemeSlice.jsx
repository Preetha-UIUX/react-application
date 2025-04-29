import { createSlice } from '@reduxjs/toolkit'

const FeedbackThemeSlice = createSlice({
    name: 'feedbackTheme',
    initialState: {
        isDark: 'false'
    },
    reducers: {
        toggleTheme: (state) => {
            state.isDark = !state.isDark
        }
    }
})

export const {toggleTheme} = FeedbackThemeSlice.actions
export default FeedbackThemeSlice.reducer