//Importar dependencias necesarias
import React, { useContext, useEffect } from 'react';
//Obtener los parámetros de la URL
import { Link, useParams } from 'react-router-dom';
import {PropTypes} from "prop-types"
import { Context } from '../store/appContext';

//Definir el componente como funcion react
export const PlanetsDescription = () => {
    const { store, actions } = useContext(Context);
    const params = useParams()
    console.log(params)
    useEffect(() => {
        if (params.id) {
            actions.getPlanetsById(params.id)
        }
    }, [])

    //renderizado del componente
    return (
        <div className="card-description">
            <div className="row">
                <div className="col-md-6">
                    <img src={`https://starwars-visualguide.com/assets/img/${store.planetsDetails.uid}.jpg`} className='img-fluid rounded-start'onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                }} />
                </div>
                <div className="col-md-4">
                    <div className="card-body">
                        <h1 className="card-title" >{store.planetsDetails && store.planetsDetails.results.name}</h1>
                    </div>
                </div>
            </div>
        </div >
    );
};

PlanetsDescription.propTypes = { planetsDetails: PropTypes.object };
