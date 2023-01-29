import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    difficulty: 1,
    status: 'playing'
}

const difficultySlice = createSlice({
    name: 'difficulty',
    initialState,
    reducers: {
        nextDifficulty(state){
            if(state.difficulty === 10) {
                state.status = 'win'
                return
            }
            state.difficulty++
        },
        gameOver(state){
            state.status = 'over'
        },
        reset(state){
            state.difficulty = 1,
            state.status = 'playing'
        }
    }
})

export default difficultySlice.reducer
export const difficultyActions = difficultySlice.actions