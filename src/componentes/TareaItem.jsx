import React from 'react';

function TareaItem({ tarea, marcarCompleta, eliminarTarea }) {
    return (
        <div>
            <input
                type="checkbox"
                checked={tarea.completada}
                onChange={() => marcarCompleta(tarea.id)}
            />
            <span style={{ textDecoration: tarea.completada ? 'line-through' : 'none' }}>
                {tarea.nombre}
            </span>
            <button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
        </div>
    );
}

export default TareaItem;
