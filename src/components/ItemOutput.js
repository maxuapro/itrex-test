import React from 'react'
import classes from './ItemOutput.module.css'

const ItemOutput = ({ item }) => {
       
    return (
        <div className={classes.output}>
            {item
                ? <>
                    <h3>Profile info:</h3>
                    <p>Selected profile: {item.firstName} {item.lastName}</p>
                    <p>Description: {item.description}</p>
                    <p>Address: {item.adress.streetAddress}</p>
                    <p>City: {item.adress.city}</p>
                    <p>State: {item.adress.state}</p>
                    <p>Index: {item.adress.zip}</p>
                </>
                : <p>Click on an item to show details</p>
            }
        </div>
    )
}

export default ItemOutput
