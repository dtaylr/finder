import React, {useContext}  from 'react'
import AlertContext from '../../context/Alert/AlertContext'

const Alert = () => { //obj with message and type
    const alertContext = useContext(AlertContext)

    const { alert } = alertContext;
    return (
        alert !== null && ( //dynamic div
            <div className={`alert alert-${alert.type}`}>
            <i class="fa fa-info-circle" aria-hidden="true"></i> {alert.msg}
            </div>
    )
    )
}

export default Alert
