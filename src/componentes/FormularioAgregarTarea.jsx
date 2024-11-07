import React, { useState } from 'react';

function FormularioAgregarTarea({ agregarTarea }) {
    const [nombreTarea, setNombreTarea] = useState('');

    const manejarEnvio = (e) => {
        e.preventDefault();
        if (nombreTarea.trim() === '') return;
        agregarTarea(nombreTarea);
        setNombreTarea('');
    };

    return (
        <form onSubmit={manejarEnvio}>
            <input
                type="text"
                value={nombreTarea}
                onChange={(e) => setNombreTarea(e.target.value)}
                placeholder="Nueva tarea"
            />
            <button type="submit">Agregar</button>
        </form>
    );
}

export default FormularioAgregarTarea;
