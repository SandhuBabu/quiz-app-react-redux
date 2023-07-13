import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';
import { useSelector, useDispatch } from 'react-redux'
import { changeScore } from '../features/questionSlice';

const Modal = ({ basicModal, setBasicModal }) => {
    
    const { answers, questions } = useSelector(state => state.questions);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleSubmit = () => {
        let score = 0;
        answers.forEach((item)=> {
            if(questions[item?.questionNo]?.correct_answer === item?.answer) {
                score = score+1;
            }
        })
        dispatch(changeScore({score}))
        navigate('/score', {replace: true})
    }

    return (
        <>
            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Modal title</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={() => setBasicModal(!basicModal)}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>Are you sure to submit answers?</MDBModalBody>

                        <MDBModalFooter>
                            <MDBBtn outline color='primary' onClick={()=>setBasicModal(!basicModal)}>
                                Close
                            </MDBBtn>
                            <MDBBtn color='primary' onClick={handleSubmit}>Submit</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
}

export default Modal