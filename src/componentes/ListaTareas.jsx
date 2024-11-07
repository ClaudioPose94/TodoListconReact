import React from 'react';
import TareaItem from './TareaItem';

function ListaTareas({ tareas, marcarCompleta, eliminarTarea }) {
    return (
        <div>
            {tareas.map(tarea => (
                <TareaItem
                    key={tarea.id}
                    tarea={tarea}
                    marcarCompleta={marcarCompleta}
                    eliminarTarea={eliminarTarea}
                />
            ))}
        </div>
    );
}

export default ListaTareas;
