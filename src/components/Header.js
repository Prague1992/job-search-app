import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {
    return (
        <div style={{ height: '110px', backgroundColor: '#5865E0', borderRadius: '0px 0px 0px 90px' }}>
            <div style={{ padding: '30px 150px 0px 150px', display: 'grid', gridTemplateColumns: '50% 50%' }}>
                <div style={{
                    textAlign: 'left',
                    fontSize: '25px',
                    color: 'white',
                    fontWeight: '700',
                    cursor: 'pointer'
                }}
                    onClick={props.backToHomeHandler}
                >
                    devjobs
                </div>
                <div style={{ display: 'inline', textAlign: 'right', marginTop: '10px' }}>
                    <FontAwesomeIcon icon={faSun} style={{ color: 'white', marginRight: '5px' }} />
                    <label class="switch">
                        <input type="checkbox" defaultChecked={false} onChange={props.themeChanger} />
                        <span class="slider round"></span>
                    </label>
                    <FontAwesomeIcon icon={faMoon} style={{ color: 'white', marginLeft: '5px' }} />
                </div>
            </div>
        </div>
    );
}

export default Header;