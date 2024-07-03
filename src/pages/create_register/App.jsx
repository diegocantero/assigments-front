import { AddDB } from '../../services/assignments_service';
import React, { useState } from 'react';

function CreateRegister() {

    const [formData, setFormData] = useState({
        name: "",
        responsability: "",
        gender: "",
        note: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            // Aquí puedes manejar la lógica de envío del formulario
            console.log('Datos del formulario:', formData);
            // Puedes enviar los datos a tu API, realizar validaciones, etc.
            const data = await AddDB(formData);
        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (
        <div className="container">
            <h2>Registro usuarios</h2>
            <form>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="name"  name="name" value={formData.name}
                        onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Responsabilidad</label>
                    <select className="form-select" id="responsability" name="responsability" value={formData.responsability}
                        onChange={handleInputChange} >
                        <option >Selecciona una opción</option>
                        <option value="Anciano">Anciano</option>
                        <option value="Siervo Ministerial">Siervo Ministerial</option>
                        <option value="No aplica">No aplica</option>
                    </select>
                </div>
                {/* <div className="mb-3">
                    <label className="form-label">Tipo de asignación</label>
                    <select className="form-select" id="type" name="type" value={formData.type}
                        onChange={handleInputChange} >
                        <option >Selecciona un tipo de asignación</option>
                        <option value="Lectura">Lectura</option>
                        <option value="Primera Conversación">Primera Conversación</option>
                        <option value="Empiece conversaciones">Empiece conversaciones</option>
                        <option value="Explique sus creencias">Explique sus creencias</option>
                        <option value="Haga revisita">Haga revisita</option>
                        <option value="Haga discípulos">Haga discípulos</option>
                        <option value="Discurso">Discurso</option>
                        <option value="Oración">Oración</option>
                        <option value="Parte">Parte</option>
                        <option value="Conducción del estudio del libro">Conducción del estudio del libro</option>
                        <option value="Necesidades de la congregación">Necesidades de la congregación</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label  className="form-label">¿Persona encargada o ayudante?</label>
                    <select className="form-select" id="managerOrAssistant" name="managerOrAssistant"  value={formData.managerOrAssistant}
                        onChange={handleInputChange} >
                        <option >Selecciona una opción</option>
                        <option value="Encargada">Encargada</option>
                        <option value="Ayudante">Ayudante</option>
                        <option value="No aplica">No aplica</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Ultima parte</label>
                    <input type="text" className="form-control" id="lastPart" name="lastPart"  value={formData.lastPart}
                        onChange={handleInputChange}  />
                </div>
                <div className="mb-3">
                    <label  className="form-label">Mes</label>
                    <select className="form-select" id="month" name="month" value={formData.month}
                        onChange={handleInputChange} >
                        <option >Selecciona un mes</option>
                        <option value="ENERO">ENERO</option>
                        <option value="FEBRERO">FEBRERO</option>
                        <option value="MARZO">MARZO</option>
                        <option value="ABRIL">ABRIL</option>
                        <option value="MAYO">MAYO</option>
                        <option value="JUNIO">JUNIO</option>
                        <option value="JULIO">JULIO</option>
                        <option value="AGOSTO">AGOSTO</option>
                        <option value="SEPTIEMBRE">SEPTIEMBRE</option>
                        <option value="OCTUBRE">OCTUBRE</option>
                        <option value="NOVIEMBRE">NOVIEMBRE</option>
                        <option value="DICIEMBRE">DICIEMBRE</option>
                    </select>
                </div> */}
                <div className="mb-3">
                    <label className="form-label">Género</label>
                    <select className="form-select" id="gender"  name="gender" value={formData.gender}
                        onChange={handleInputChange} >
                        <option >Selecciona un género</option>
                        <option value="M">Masculino</option>
                        <option value="F">Femenino</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Notas</label>
                    <textarea className="form-control" id="note" name="note" rows="5" cols="33" value={formData.note}
                        onChange={handleInputChange} ></textarea>
                </div>
                <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
        </div>

    );
}

export default CreateRegister;
