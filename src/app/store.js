import { configureStore } from "@reduxjs/toolkit";
import formSlice from "../features/formSlice";
import questionSlice from "../features/questionSlice";

export const store = configureStore({
    reducer: {
        form: formSlice,
        questions: questionSlice
    }
})