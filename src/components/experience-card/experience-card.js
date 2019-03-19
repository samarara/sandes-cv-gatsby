import React from 'react';
import './experience-card';

const ExperienceCard = (props) => {
    const {
        position,
        company,
        startDate,
        endDate,
        summary,
        highlights
    } = props

    return (
        <div className="experience-card">
            <div className="left-pane">
                <h3 className="psition">{position}</h3>
                <h4 className="company">{company}</h4>
                <h4 className="duration">{startDate} - {endDate}</h4>
            </div>
            <div className="right-pane">
                <p>{summary}</p>
            </div>
        </div>
    )
}

export default ExperienceCard;