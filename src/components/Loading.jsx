import React from 'react'
import { MDBRow, MDBCol, MDBSpinner } from 'mdb-react-ui-kit'

const Loading = () => {
    return (
        <MDBRow>
            <MDBCol 
                size='12'
                style={{height: '80vh'}} 
                className='d-flex justify-content-center align-items-center'>
                <MDBSpinner
                    color='primary'
                    style={{ width: '3em', height: '3em' }} />
            </MDBCol>
        </MDBRow>
    )
}

export default Loading