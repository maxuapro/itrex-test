import React from 'react'
import classes from './MainContainer.module.css'

const MainContainer = ({ children }) => {
    return (
        <div className={classes.container}>
            {children}
        </div>
    )
}

export default MainContainer
