import React from 'react';

const getSeason = (lat, month) => {
    if (lat < 0) {
        if (month < 3 && month > 8) {
            return <h2>Winter</h2>
        }
        return <h2>Summer</h2>

    }
    if (lat >= 0) {
        if (month < 3 && month > 8) {
            return <h2>Summer</h2>
        }
        return <h2>Winter</h2>

    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth())
    return (
        <div>
            <h2>Lat: {props.lat}</h2>
            {season} </div>
    )
}

export default SeasonDisplay;