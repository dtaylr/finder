import React from 'react'
import loading from './loading.gif';

const Loading = () => {
    return (
        <div>
            <img className='loading' src={loading} alt='loading img'/>
        </div>
    )
}

export default Loading
