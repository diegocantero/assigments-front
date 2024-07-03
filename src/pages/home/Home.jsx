// Ejemplo de componente React que realiza solicitudes HTTP

import React, { useState, useEffect } from 'react';
import { API_URL } from '../../config/config';
import { ListDB } from '../../services/assignments_service';
import './home.css';
const Home = () => {
    const [items, setItems] = useState([]);
    const [meeting, setMeeting] = useState({
        date: "1-7 DE JULIO",
        bibleReading: "SALMOS 57-59",
        startSong: "1",
        middleSong: "2",
        endSong: "3",
        bibleTreasures: [
            {
                startAt: "6:51",
                title: "1. Jehová hace que quienes atacan a su pueblo",
                durationInMinutes: "10",
                assignedTo: ""
            },
            {
                startAt: "6:51",
                title: "2. Jehová hace que quienes atacan a su pueblo",
                durationInMinutes: "10",
                assignedTo: ""
            },
            {
                startAt: "6:51",
                title: "3. Jehová hace que quienes atacan a su pueblo",
                durationInMinutes: "10",
                assignedTo: ""
            }
        ],
        betterTeachers: [
            {
                startAt: "6:51",
                title: "4. Jehová hace que quienes atacan a su pueblo",
                durationInMinutes: "10",
                assignedTo: ""
            },
            {
                startAt: "6:51",
                title: "5. Jehová hace que quienes atacan a su pueblo",
                durationInMinutes: "10",
                assignedTo: ""
            }
        ],
        cristianLife: [
            {
                startAt: "6:51",
                title: "5. Jehová hace que quienes atacan a su pueblo",
                durationInMinutes: "10",
                assignedTo: ""
            },
            {
                startAt: "6:51",
                title: "5. Jehová hace que quienes atacan a su pueblo",
                durationInMinutes: "10",
                assignedTo: ""
            }
        ]
    });

    const [filters, setFilters] = useState({
        responsability: "",
        gender: "",
    })

    // Función para obtener los elementos desde el backend
    const fetchItems = async () => {
        try {
            const data = await ListDB();
            setItems(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        fetchItems();
    }, []);

    return (
        <div className='container mt-2'>
            <div className='row'>
                <div className='col-3'>
                    <h2 className='text-center'>Personas</h2>
                    <div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="f_gender" />
                            <label className="form-check-label">
                                Hombre
                            </label>
                        </div>
                    </div>
                    <ol className="list-group list-group-numbered">
                        {items.map(item => (
                            (
                                <li className="list-group-item d-flex justify-content-between align-items-start" key={item.id}>
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold"> {item.name}</div>
                                        {item.responsability}
                                    </div>
                                    <span className={item.gender == "M" ? "badge bg-primary rounded-pill" : "badge bg-secondary rounded-pill"}>{item.gender}</span>
                                </li>
                            )
                        ))}
                    </ol>
                </div>
                <div className='col-9'>
                    <h2 className='text-center'>Programación vida y ministerio</h2>
                    <div className='row lm-font' id='content-assignments'>
                        <div className='col-12 row lm-bold mb-1'>
                            <div className='col-4 align-self-end'>
                                [CONGREGACIÓN SAMARIA]
                            </div>
                            <div className='col-8 text-end c-font c-title'>
                                Programa para la reunión de entre semana
                            </div>
                        </div>
                        <div className='divider-initial'></div>
                        <div className='col-12 row mt-2 mb-4'>
                            <div className='col-4 lm-bold align-self-end'>
                                {meeting.date} | {meeting.bibleReading}
                            </div>
                            <div className='col-8 text-end'>
                                Presidente: <input></input>
                            </div>
                        </div>
                        <div className='col-12 row'>
                            <div className='col-1'>
                                6:51
                            </div>
                            <div className='col-5'>
                                • Canción <b>{meeting.startSong}</b>
                            </div>
                            <div className='col-6 text-end'>
                                Oración: <input></input>
                            </div>
                        </div>
                        <div className='col-12 row'>
                            <div className='col-1'>
                                6:45
                            </div>
                            <div className='col-11'>
                                •	Palabras de introducción (1 min.)
                            </div>
                        </div>
                        <div className='first-section my-1'>
                            TESOROS DE LA BIBLIA
                        </div>
                        <div className='col-12 row'>
                            <div className='col-1'>
                                6:51
                            </div>
                            <div className='col-5'>
                                1. Jehová hace que quienes atacan a su pueblo fracasen (10 mins.)
                            </div>
                            <div className='col-6 text-end'>
                                <input></input>
                            </div>
                        </div>
                        <div className='col-12 row'>
                            <div className='col-1'>
                                7:01
                            </div>
                            <div className='col-5'>
                                2. Busquemos perlas escondidas (10 mins.)
                            </div>
                            <div className='col-6 text-end'>
                                <input></input>
                            </div>
                        </div>

                        <div className='col-12 row'>
                            <div className='col-1'>
                                7:01
                            </div>
                            <div className='col-5'>
                                3. Lectura de la Biblia (4mins.)
                            </div>
                            <div className='col-6 text-end'>
                                Estudiante: <input></input>
                            </div>
                        </div>
                        <div className='second-section my-1'>
                            SEAMOS MEJORES MAESTROS
                        </div>

                        <div className='col-12 row'>
                            <div className='col-1'>
                                7:01
                            </div>
                            <div className='col-5'>
                                4. Constancia: Lo que hizo Pablo (7 mins.)
                            </div>
                            <div className='col-6 text-end'>
                                Estudiante: <input></input>
                            </div>
                        </div>

                        <div className='col-12 row'>
                            <div className='col-1'>
                                7:01
                            </div>
                            <div className='col-5'>
                                3. Lectura de la Biblia (4mins.)
                            </div>
                            <div className='col-6 text-end'>
                                Estudiante: <input></input>
                            </div>
                        </div>
                        <div className='third-section my-1'>
                            NUESTRA VIDA CRISTIANA
                        </div>

                        <div className='col-12 row'>
                            <div className='col-1'>
                                7:01
                            </div>
                            <div className='col-11'>
                                • Canción <b>{meeting.middleSong}</b>
                            </div>

                        </div>

                        <div className='col-12 row'>
                            <div className='col-1'>
                                7:01
                            </div>
                            <div className='col-5'>
                                3. Lectura de la Biblia (4mins.)
                            </div>
                            <div className='col-6 text-end'>
                                Estudiante: <input></input>
                            </div>
                        </div>

                        <div className='col-12 row'>
                            <div className='col-1'>
                                7:01
                            </div>
                            <div className='col-5'>
                                6. Necesidades de la congregación (15 mins.)
                            </div>
                            <div className='col-6 text-end'>
                                Estudiante: <input></input>
                            </div>
                        </div>

                        <div className='col-12 row'>
                            <div className='col-1'>
                                7:01
                            </div>
                            <div className='col-5'>
                                7. Estudio bíblico de la congregación (30 mins.)
                            </div>
                            <div className='col-6 text-end'>
                                Conductor/Lector: <input></input>
                            </div>
                        </div>
                        <div className='col-12 row'>
                            <div className='col-1'>
                                6:45
                            </div>
                            <div className='col-11'>
                                •	Palabras de conclusión (3 min.)
                            </div>
                        </div>
                        <div className='col-12 row'>
                            <div className='col-1'>
                                6:51
                            </div>
                            <div className='col-5'>
                                • Canción <b>{meeting.endSong}</b>
                            </div>
                            <div className='col-6 text-end'>
                                Oración: <input></input>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>


    );
};

export default Home;