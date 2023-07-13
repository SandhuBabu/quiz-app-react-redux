import React from 'react'
import Select from 'react-select'

const CustomSelect = ({ options, label, onChange }) => {
    return (
        <>
            <label className='mb-1 mt-4 text-primary'>{label}</label>
            <Select
                options={options}
                onChange={onChange}
                defaultValue={options[0]}
            />
        </>
    )
}

export default CustomSelect