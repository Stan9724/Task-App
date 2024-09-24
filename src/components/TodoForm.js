import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();   


        // Vérifier si la valeur est vide avant d'ajouter la tâche
        if (value.trim() !== "") {
            addTodo(value);
            setValue("");
        } else {
            toast.error("Veuillez entrer une tâche valide", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    return (
        <><div>
            <ToastContainer />
        </div>
            <form className='TodoForm' onSubmit={handleSubmit}>
                <input
                    type='text'
                    className='todo-input'

                    value={value}
                    placeholder='Quelle est la tâche du jour ?'
                    onChange={(e) => setValue(e.target.value)} />
                <button type='submit' className='todo-btn'>Ajouter la tâche</button>
            </form></>
    );
};
