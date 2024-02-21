import React from 'react'
import state from '../store'

const CustomButton = ({ type, customStyles, handelClick, title }) => {

    const generateStyle = (type) => {

        if (type === 'filled') {
            return {
                backgroundColor: '#000',
                color: '#fff',
            }
        }
    }
    return (
        <button
            className={`px-2 py-1.5 flex-1 rounded-md ${customStyles} `}
            style={generateStyle(type)}
        >
            {title}
        </button>
    )
}

export default CustomButton