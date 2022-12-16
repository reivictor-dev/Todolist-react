import React from "react"
import { FaWindowClose, FaEdit } from 'react-icons/fa';
import PropTypes from 'prop-types';

import './Task.css'
export default function Tasks({ task, handleDelete, handleEdit}) {
    return (
        <ul className="task">
            {task.map((task, index) => (

                <li key={task}>

                    {task}
                    <div>
                        <FaEdit onClick={(e) => handleEdit(e, index)} className="edit" />
                        <FaWindowClose onClick={(e) => handleDelete(e, index)} className="delete" />
                    </div>

                </li>

            ))}
        </ul>
    )
}

Tasks.propTypes = {
    task: PropTypes.array.isRequired,
    handleEdit: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired
}