import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit'
import Modal from './Modal'

const Header = ({ show }) => {
    const [basicModal, setBasicModal] = React.useState(false);

    return (
        <>
            <Modal basicModal={basicModal} setBasicModal={setBasicModal} />
            <header
                style={{
                    width: '100%',
                    height: '3.5em',
                }}
                className='d-flex justify-content-end align-items-center px-3'
            >
                {
                    show &&
                    <MDBBtn
                        color='primary'
                        onClick={()=>setBasicModal(true)}
                    >Submit</MDBBtn>}
            </header>
        </>
    )
}

export default Header