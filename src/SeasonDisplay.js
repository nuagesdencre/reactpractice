import React from 'react';
import './assets/SeasonDisplay.css'
const seasonConfig = {
    summer: {
        iconName: 'sun',
        text: "Let's hit the beach!"
    },
    winter: {
        iconName: 'snowflake',
        text: "It's way too cold, brrr!"
    }
}

const getSeason = (lat, month) => {
    if (month < 3 && month < 8) {
        return (lat < 0) ? 'summer' : 'winter';
    } else {
        return (lat < 0) ? 'winter' : 'summer';
    }


}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {iconName, text} = seasonConfig[season] //iconName, text
    return (
        <div className ="season-display">
            <i className={`${iconName} massive icon`}/>
            <h1>{season}: {text}</h1>
             <br />
            <i className={`${iconName} massive icon`}/>
        </div>

    )
}

export default SeasonDisplay;