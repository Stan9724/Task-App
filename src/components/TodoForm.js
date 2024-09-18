import React, { useState } from 'react';

export const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();   


        // Vérifier si la valeur est vide avant d'ajouter la tâche
        if (value.trim() !== "") {
            addTodo(value);
            setValue("");
        }
    };

    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input
                type='text'
                className='todo-input'   

                value={value}
                placeholder='Quelle est la tâche du jour ?'
                onChange={(e) => setValue(e.target.value)}
            />
            <button type='submit' className='todo-btn'>Ajouter la tâche</button>
        </form>
    );
};
