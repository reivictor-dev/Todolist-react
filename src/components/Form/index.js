import React from "react";
import { FaPlus } from 'react-icons/fa';
import PropTypes from 'prop-types';

import './Form.css'


export default function Form({ handleClick, handleChange, newTask }) {
    return (
        <form className="form" onSubmit={handleClick}>
            <input maxLength='30' type='text' onChange={handleChange} value={newTask} />
            <button type="submit"><FaPlus /></button>
        </form>
    )
}

Form.propTypes = {
    handleClick: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    newTask: PropTypes.string.isRequired
}