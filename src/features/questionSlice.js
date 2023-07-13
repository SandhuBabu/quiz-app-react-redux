import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from '../utils/constants'
import axios from 'axios'
import arrayShuffle from "array-shuffle";

export const fetchQuestions = createAsyncThunk('questions/fetchQuestions', async (queries) => {
    let url = `${BASE_URL}amount=${queries.nos}&category=${queries.category}&difficulty=${queries.difficulty}&type=${queries.type}`
    let res = await axios.get(url);
    let newQuestions = res?.data?.results.map((question) => {
        let options = [...question.incorrect_answers, ...[question.correct_answer]];
        options = arrayShuffle(options);
        let newQuestion = { ...question, options }
        return newQuestion
    })
    return newQuestions;
})

const INITIAL_STATE = {
    questions: [],
    answers: [],
    currentQuestion: 0,
    load: false,
    finalScore: 0,
}

export const questionSlice = createSlice({
    name: 'questions',
    initialState: INITIAL_STATE,
    reducers: {
        reset: (state) => {
            state.currentQuestion = 0;
            state.answers = [];
            state.questions = [];
        },
        setAnswer: ({ answers }, { payload }) => {
            const exists = answers.find(answer => answer.questionNo === payload.questionNo);
            if (exists) {
                answers.forEach(answer => {
                    if (answer.questionNo === payload.questionNo) {
                        answer.answer = payload.answer;
                    }
                })
                return
            }
            answers.push(payload);
        },
        changeCurrentQuestion: (state, action) => {
            state.currentQuestion = action.payload.questionNo;
        },
        changeScore: (state, {payload}) => {
            state.finalScore = payload.score;
        }
    },
    extraReducers: {
        [fetchQuestions.pending]: (state) => {
            state.load = false;
        },
        [fetchQuestions.fulfilled]: (state, { payload }) => {
            state.questions = payload;
            state.load = true;
        },
        [fetchQuestions.rejected]: (state) => {
            state.load = true;
            alert("Something went wrong");
            window.location.pathname = '/';
        }
    }
})

export default questionSlice.reducer;
export const { reset, setAnswer, changeCurrentQuestion, changeScore } = questionSlice.actions