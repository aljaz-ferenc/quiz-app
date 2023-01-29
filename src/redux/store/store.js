import { configureStore } from "@reduxjs/toolkit";
import difficultyReducer from '../difficulty/difficultySlice'

const store = configureStore({
    reducer: {
        difficulty: difficultyReducer
    }
})

export default store