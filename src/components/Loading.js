import React from 'react';
import './Loading.css'

const Loading = () => {
    return (
        <div>
            <div class="loader"></div>
            <div style={{ margin: 'auto', fontSize: '30px', fontWeight: '700', color: '#5865E0' }}>Loading...</div>
        </div>
    )
}

export default Loading;