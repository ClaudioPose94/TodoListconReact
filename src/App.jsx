import React, { useState } from 'react';
import './App.css';
import ListaTareas from './componentes/ListaTareas';
import FormularioAgregarTarea from './componentes/FormularioAgregarTarea';

function App() {
    const [tareas, setTareas] = useState([]);

    const agregarTarea = (nombre) => {
        const nuevaTarea = {
            id: Date.now(),
            nombre,
            completada: false,
        };
        setTareas([...tareas, nuevaTarea]);
    };

    const marcarCompleta = (id) => {
        setTareas(
            tareas.map(tarea =>
                tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
            )
        );
    };

    const eliminarTarea = (id) => {
        setTareas(tareas.filter(tarea => tarea.id !== id));
    };

    return (
        <div className="container">
            <h1>Lista de Tareas</h1>
            <FormularioAgregarTarea agregarTarea={agregarTarea} />
            <ListaTareas tareas={tareas} marcarCompleta={marcarCompleta} eliminarTarea={eliminarTarea} />
        </div>
    );
}

export default App;
