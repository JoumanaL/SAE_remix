import React from 'react';
import '../styles/UniversityTable.css';  

const UniversityTable = ({ university }) => {
    return (
        <div className="university-row">
            <div className="university-column">
                <h3>{university.name}</h3>
                <img src={university.logo} alt={university.name} />
                <a href={university.website} target="_blank" rel="noopener noreferrer">Site Université</a>
            </div>
            <div className="university-column">
                <h4 className='h4'>Cursus proposés</h4>
                <div className="courses">{university.courses}</div>            </div>
        </div>
    );
}

export default UniversityTable;