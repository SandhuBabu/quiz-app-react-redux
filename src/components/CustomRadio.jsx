import { MDBRadio } from 'mdb-react-ui-kit'
import { useDispatch } from 'react-redux'
import { setAnswer } from '../features/questionSlice';

const CustomRadio = ({ option, name, questionNo, select }) => {
    const dispatch = useDispatch();

    return (
        <MDBRadio
            value={option}
            label={option}
            checked={(select.selected === option)}
            name={name}
            onChange={() => {
                select.setSelected(option)
                dispatch(setAnswer({ questionNo, answer: option }))
            }}
        />
    )
}

export default CustomRadio