import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = {
    nos: 10,
    difficulty: '',
    category: '',
    type: ''
}

const formSlice = createSlice({
    name: 'form',
    initialState: INITIAL_STATE,
    reducers: {
        setFormCategory: (state, { payload }) => {
            state.category = payload.category
        },
        setFormDifficulty: (state, { payload }) => {
            state.difficulty = payload.difficulty
        },
        setFormQuestionType: (state, { payload }) => {
            state.type = payload.type
        },
    }
})

export const { setFormCategory, setFormDifficulty, setFormQuestionType } = formSlice.actions;
export default formSlice.reducer;