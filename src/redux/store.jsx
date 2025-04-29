import { configureStore } from '@reduxjs/toolkit'
import { feedbackApi } from './feedbackApi'
import feedbackReducer from './feedbackSlice'
import themeReducer from './feedbackThemeSlice'

export const store = configureStore({
    reducer: {
        [feedbackApi.reducerPath]: feedbackApi.reducer,
        feedbackState: feedbackReducer,
        feedbackTheme: themeReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(feedbackApi.middleware),
})