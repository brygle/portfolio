import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './features/themeSlice'
import langReducer from './features/langSlice'

export const store = configureStore({
    reducer: {
        themeReducer,
        langReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch