import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Button } from '@material-ui/core';
import './JobDetails.css';

const JobDetails = (props) => {
    const { dark_mode } = props.stateValues
    return (
        <div style={{ display: 'grid', gridTemplateRows: 'auto auto', gridGap: '40px' }}>
            <div style={{ margin: '-30px 150px 0px', textAlign: 'left', display: 'grid', gridTemplateRows: '78px 1fr auto', gridGap: '50px' }}>
                <div style={{ backgroundColor: dark_mode ? '#19212D' : 'white', borderRadius: '0px 7px 7px 7px', display: 'grid', gridTemplateColumns: '80px auto 170px', gridGap: '40px' }}>
                    <div style={{ margin: 'auto' }}>
                        <img src={props.jobObject.company_logo} alt={props.jobObject.company_logo} style={{ maxHeight: '100%', maxWidth: '100%' }} />
                    </div>
                    <div style={{ margin: '13px', display: 'grid', gridTemplateRows: '1fr 1fr', gridGap: '5px' }}>
                        <div style={{ fontSize: '18px', fontWeight: '700', color: dark_mode ? 'white' : 'black' }} >{props.jobObject.company}</div>
                        <div style={{ fontSize: '14px', color: 'grey' }} >{props.jobObject.company}</div>
                    </div>
                    <div>
                        <Button href={props.jobObject.company_url} color="primary" class="button">
                            Company Site
                        </Button>
                    </div>
                </div>
                <div style={{ backgroundColor: dark_mode ? '#19212D' : 'white', padding: '30px', borderRadius: '10px', display: 'grid', gridTemplateRows: '100px auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 0.5fr' }}>
                        <div>
                            <div style={{ textAlign: 'left', fontSize: '15px', color: 'grey' }}>{`${props.timeAgo.ago(props.jobObject.created_at)} . ${props.jobObject.type}`}</div>
                            <div style={{ textAlign: 'left', fontSize: '20px', color: dark_mode ? 'white' : 'black', fontWeight: '700', overflow: 'hidden', margin: '10px 0px' }}>
                                {props.jobObject.title}
                            </div>
                            <div style={{ textAlign: 'left', fontSize: '15px', color: '#5865E0', fontWeight: '500' }}>
                                {props.jobObject.location}
                            </div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <Button href={props.jobObject.how_to_apply} color="primary" class="button2" >
                                Apply Now
                            </Button>
                        </div>
                    </div>
                    <div className={dark_mode ? "detailsDark" : "detailsLight"} style={{ color: 'black' }}>
                        {ReactHtmlParser(props.jobObject.description)}
                    </div>
                </div>
                <div style={{ borderRadius: '10px', color: 'white', backgroundColor: 'white' }}>
                    <div style={{ borderRadius: '10px 10px 0px 0px', backgroundColor: '#5865E0', fontWeight: 'bold', padding: '15px 30px' }}>
                        How to Apply
                </div>
                    <div className="apply" style={{ padding: '10px 30px', backgroundColor: '#5865E0', borderRadius: '0px 0px 10px 10px' }}>
                        {ReactHtmlParser(props.jobObject.how_to_apply)}
                    </div>
                </div>

            </div >
            <div style={{ backgroundColor: dark_mode ? '#19212D' : 'white' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 0.5fr', margin: '0px 150px' }}>
                    <div>
                        <div style={{ textAlign: 'left', fontSize: '18px', color: dark_mode ? 'white' : 'black', fontWeight: '700', overflow: 'hidden', margin: '10px 0px' }}>
                            {props.jobObject.title}
                        </div>
                        <div style={{ textAlign: 'left', fontSize: '14px', color: 'darkgrey', fontWeight: '500' }}>
                            {props.jobObject.company}
                        </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <Button href={props.jobObject.how_to_apply} color="primary" class="button2" >
                            Apply Now
                        </Button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default JobDetails;