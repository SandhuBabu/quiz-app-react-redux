import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MDBRow, MDBCol } from 'mdb-react-ui-kit'
import { reset, changeCurrentQuestion } from '../features/questionSlice';
import { CustomRadio, Buttons, Loading, Header } from '../components';

const Quiz = () => {
  const [selected, setSelected] = useState('');
  let { questions, currentQuestion, answers, load } = useSelector(state => state.questions);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(reset());
    }
  }, [])

  const handleCheck = () => {
    const check = answers.find(obj => {
      if (obj?.questionNo === currentQuestion) {
        return obj
      }
    });
    setSelected(check?.answer)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setSelected('');
      dispatch(changeCurrentQuestion({
        questionNo: ++currentQuestion
      }));
      handleCheck();
    }
  }

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setSelected('');
      dispatch(changeCurrentQuestion({
        questionNo: --currentQuestion
      }));
      handleCheck();
    }
  }

  if (!load)
    return <Loading />


  return (
    <>
      <Header show={answers.length>0} />
      <MDBRow className='px-5 pt-5'>
        <MDBCol md='12' style={{ minHeight: '50vh' }}>
          <div className='d-flex'>
            <span className='fw-bold'>{currentQuestion + 1}</span>
            <p className='d-inline mx-3 fw-bold' dangerouslySetInnerHTML={{ __html: questions[currentQuestion]?.question }} />
          </div>
          <div className='mt-3 mx-3 d-flex flex-column gap-2'>
            {
              questions[currentQuestion]?.options?.map((option, index) => {
                return (
                  <CustomRadio
                    key={index}
                    option={option}
                    select={{ selected, setSelected }}
                    name={questions[currentQuestion].question}
                    questionNo={currentQuestion}
                  />
                )
              })
            }
          </div>
        </MDBCol>
        <Buttons
          handleClicks={{ handleNext, handlePrev }}
          disables={{
            next: currentQuestion >= questions.length - 1,
            prev: !currentQuestion > 0
          }} />
      </MDBRow>
    </>
  )
}

export default Quiz