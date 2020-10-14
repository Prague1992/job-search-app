import React from 'react';
import './JobOffer.css'

const JobOffer = (props) => {
    const { dark_mode } = props.stateValues;
    return (
        <div className={dark_mode ? "jobofferMainDark" : "jobofferMainLight"} onClick={() => props.jobDetailsFlagHandler(props.arrayKey)}>
            <div style={{ height: '50px', width: '50px', overflow: 'hidden', marginTop: '-15px', marginLeft: '30px' }}>
                <img src={props.job.company_logo} alt={props.job.company_logo} style={{ maxHeight: '100%', maxWidth: '100%' }} />
            </div>
            <div style={{ textAlign: 'left', paddingLeft: '30px', fontSize: '15px', color: 'grey' }}>
                {`${props.timeAgo} . ${props.job.type}`}
            </div>
            <div style={dark_mode ? { textAlign: 'left', paddingLeft: '30px', fontSize: '17px', color: 'white', fontWeight: '700', overflow: 'hidden' } : { textAlign: 'left', paddingLeft: '30px', fontSize: '17px', color: 'black', fontWeight: '700', overflow: 'hidden' }}>
                {props.job.title}
            </div>
            <div style={{ textAlign: 'left', paddingLeft: '30px', fontSize: '16px', color: 'grey' }}>
                {props.job.company}
            </div>
            <div style={{ textAlign: 'left', paddingLeft: '30px', fontSize: '15px', color: '#5865E0', fontWeight: '500' }}>
                {props.job.location}
            </div>
        </div>
    );
}

export default JobOffer;