import React, { useState, useEffect } from 'react';
import './graph-wtih-filter.css';
import './pet-traffic-graph-with-filter.css'


interface PetTrafficGraphWithFilterProp {
    graphBySpecies: JSX.Element;
    description: string;
}

const PetTrafficGraphWithFilter: React.FC<PetTrafficGraphWithFilterProp> = ({ graphBySpecies, description }) => {


    return (
        <>
            <div className="graph-list-container">

                <h2 className='graph-list-header'>
                    {description}
                    <span className='graph-list-filter-date-range'>&nbsp;by species</span>
                </h2>
            </div>
            {graphBySpecies}
        </>
    );
};


export default PetTrafficGraphWithFilter;