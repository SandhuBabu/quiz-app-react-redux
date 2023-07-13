import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Confetti from 'react-confetti'
import { useSelector } from 'react-redux'

const Score = () => {

    const { finalScore, answers } = useSelector(state => state.questions);
    const navigate = useNavigate();

    useEffect(() => {
        if (answers.length < 1) {
            navigate('/')
        }
    }, [])

    return (
        <div style={{
            height: '98vh',
            overflow: 'hidden',
            display: 'grid',
            placeItems: 'center'
        }}>
            <Confetti
                width={window.innerWidth}
                height={window.innerHeight}
            />
            <h1 className='score'>
                Your Score: {finalScore} / 10
            </h1>
        </div>
    )
}

export default Score