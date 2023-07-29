//Importar dependencias necesarias
import React from 'react';

//Obtener los parámetros de la URL
import { useParams } from 'react-router-dom';

//Definir el componente como funcion react
export const CardVehicles = () => {
    const params = useParams(); //Hook proporcionado para  obtener parámetros de la UR

    //renderizado del componente, useParams se utilizará para obtener los parámetros de la URL.
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={'https://hips.hearstapps.com/hmg-prod/images/veh-ia-1751-1576604159.jpg'}></img>
            {/* <img src={`/workspaces/AmandaBg_Blog_StarWars/src/img/starwars1${params.idCardPeople}.jpg`} className="card-img-top" alt="..." /> */}
            <div className="card-body">
                <h5 className="card-title">El titulo{params.idCardVehicles}</h5>
                <p className="card-text">Blablabla</p>
                <button className="btn">See More</button>
                <button className="btn float-end"><i className="fab fa-brands fa-old-republic"></i></button>
            </div>
       </div>
    )
}

export default CardVehicles
