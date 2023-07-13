import { MDBCol, MDBBtn } from "mdb-react-ui-kit"

const Buttons = ({ handleClicks, disables }) => {

    return (
        <MDBCol 
            className="d-flex justify-content-between align-items-end"
            style={{
                height: '30vh'
            }}
        >
            <MDBBtn
                onClick={handleClicks.handlePrev}
                disabled={disables.prev}
            >
                Prev
            </MDBBtn>
            <MDBBtn
                onClick={handleClicks.handleNext}
                disabled={disables.next}
            >
                Next
            </MDBBtn>
        </MDBCol>
    )
}

export default Buttons