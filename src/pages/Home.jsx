import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { MDBCol, MDBRow, MDBBtn } from 'mdb-react-ui-kit'
import { categories, difficultyLevel, questionTypes } from '../utils/constants'
import { CustomSelect } from '../components'
import { useDispatch, useSelector } from 'react-redux'
import { setFormCategory, setFormDifficulty, setFormQuestionType } from '../features/formSlice'
import { fetchQuestions } from '../features/questionSlice'

const Home = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.form);
    const navigate = useNavigate();

    const handleClick = e => {
        e.preventDefault();
        dispatch(fetchQuestions(data));
        navigate('/quiz')
    }

    return (
        <MDBRow className='d-flex align-items-center justify-content-center pt-5 px-3'>
            <MDBCol md='6' className='d-flex flex-column'>
                <h1 className='text-center mb-4'>Select Options</h1>
                <form>
                    <CustomSelect
                        options={categories}
                        label='Category'
                        onChange={(e) => dispatch(setFormCategory({ category: e.value }))}
                    />
                    <CustomSelect
                        options={difficultyLevel}
                        label='Difficulty Level'
                        onChange={(e) => dispatch(setFormDifficulty({ difficulty: e.value }))}
                    />
                    <CustomSelect
                        options={questionTypes}
                        label='Question Type'
                        onChange={(e) => dispatch(setFormQuestionType({ type: e.value }))}
                    />
                    <div className='px-1 py-4'>
                        <MDBBtn
                            className='d-flex align-items-center justify-content-center'
                            style={{ width: '100%', height: '4em' }}
                            onClick={handleClick}
                        >
                            <span>Take Quiz</span>
                        </MDBBtn>
                    </div>
                </form>
            </MDBCol>
        </MDBRow>
    )
}

export default Home