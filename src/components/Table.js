import React, { useState, useEffect } from 'react'
import classes from './Table.module.css'

const Table = (props) => {

    const [twenty, settwenty] = useState([])
    const [currentSlice, setCurrentSlice] = useState(0) // current page
    const [sliceToShow, setSliceToShow] = useState([])
    const [numberOfSlices, setNumberOfSlices] = useState(0) // quantity of pages

    const [sortOrder, setSortOrder] = useState({ feild: 'id', asc: true })

    // SORTING SYMBOL TO SHOW FUNCTION
    const properSymbol = str => {
        return sortOrder.feild === str ? sortOrder.asc ? '▼' : '▲' : ''
    }

    // SORTING METHOD SETTER
    const getSortedMethod = str => {
        console.log('sort by', str)
        switch (str) {
            case 'id':
                // setSorting('id')
                setSortOrder({ feild: 'id', asc: sortOrder.feild !== 'id' ? true : !sortOrder.asc })
                break
            case 'firstName':
                setSortOrder({ feild: 'firstName', asc: sortOrder.feild !== 'firstName' ? true : !sortOrder.asc })
                // setSorting('firstName')
                break
            case 'lastName':
                setSortOrder({ feild: 'lastName', asc: sortOrder.feild !== 'lastName' ? true : !sortOrder.asc })
                // setSorting('firstName')
                break
            case 'email':
                setSortOrder({ feild: 'email', asc: sortOrder.feild !== 'email' ? true : !sortOrder.asc })
                // setSorting('firstName')
                break
            case 'phone':
                setSortOrder({ feild: 'phone', asc: sortOrder.feild !== 'phone' ? true : !sortOrder.asc })
                // setSorting('firstName')
                break
            case 'state':
                setSortOrder({ feild: 'state', asc: sortOrder.feild !== 'state' ? true : !sortOrder.asc })
                // setSorting('firstName')
                break
            default:
                break;
        }
    }

    useEffect(() => {

        let sorted
        if (sortOrder.feild === 'id') {
            console.log('sortOrder.feild is:', sortOrder.feild)

            setCurrentSlice(0)
            sorted = twenty.sort((a, b) => a[sortOrder.feild] - b[sortOrder.feild])
            if (!sortOrder.asc) {
                sorted.reverse()
            }
            settwenty(sorted)
        }
        if (sortOrder.feild === 'firstName') {
            console.log('sortOrder.feild is:', sortOrder.feild)

            setCurrentSlice(0)
            sorted = twenty.sort((a, b) => {
                let nameA = a.firstName.toUpperCase()
                let nameB = b.firstName.toUpperCase()
                if (nameA < nameB) return -1
                if (nameA > nameB) return 1
                return 0;
            })
            if (!sortOrder.asc) {
                sorted.reverse()
            }
            settwenty(sorted)
        }
        if (sortOrder.feild === 'lastName') {
            console.log('sortOrder.feild is:', sortOrder.feild)

            setCurrentSlice(0)
            sorted = twenty.sort((a, b) => {
                let nameA = a.lastName.toUpperCase()
                let nameB = b.lastName.toUpperCase()
                if (nameA < nameB) return -1
                if (nameA > nameB) return 1
                return 0;
            })
            if (!sortOrder.asc) {
                sorted.reverse()
            }
            settwenty(sorted)
        }
        if (sortOrder.feild === 'email') {
            console.log('sortOrder.feild is:', sortOrder.feild)

            setCurrentSlice(0)
            sorted = twenty.sort((a, b) => {
                let nameA = a.email.toUpperCase()
                let nameB = b.email.toUpperCase()
                if (nameA < nameB) return -1
                if (nameA > nameB) return 1
                return 0;
            })
            if (!sortOrder.asc) {
                sorted.reverse()
            }
            settwenty(sorted)
        }
        if (sortOrder.feild === 'phone') {
            console.log('sortOrder.feild is:', sortOrder.feild)

            setCurrentSlice(0)
            sorted = twenty.sort((a, b) => {
                let nameA = a.phone.toUpperCase()
                let nameB = b.phone.toUpperCase()
                if (nameA < nameB) return -1
                if (nameA > nameB) return 1
                return 0;
            })
            if (!sortOrder.asc) {
                sorted.reverse()
            }
            settwenty(sorted)
        }
        if (sortOrder.feild === 'state') {
            console.log('sortOrder.feild is:', sortOrder.feild)

            setCurrentSlice(0)
            sorted = twenty.sort((a, b) => {
                let nameA = a.adress.state.toUpperCase()
                let nameB = b.adress.state.toUpperCase()
                if (nameA < nameB) return -1
                if (nameA > nameB) return 1
                return 0;
            })
            if (!sortOrder.asc) {
                sorted.reverse()
            }
            settwenty(sorted)
        }
    }, [sortOrder, twenty])

    // ----------------------------------------- PAGING  ----------------------------------------- //
    const divider = 20 // HOW MANY ITEMS IS SHOWN ON ONE PAGE e.g. size of the slice

    const pageZero = () => {
        setCurrentSlice(0)
    }

    const nextPage = () => {
        if (currentSlice >= numberOfSlices - 1) {
            return
        }
        setCurrentSlice(prev => prev + 1)
    }

    const prevPage = () => {
        if (currentSlice === 0) {
            return
        }
        setCurrentSlice(prev => prev - 1)
    }
    // ---------------------------------------- /PAGING  ----------------------------------------- //

    // TABLE HEADER DOM MANIPULATION 
    const addBackground = event => event.target.parentElement.style.background = 'rgba(56, 32, 55, 0.2)'
    const removeBackground = event => event.target.parentElement.style.background = ''

    // goes sorted and filtered in here
    useEffect(() => {
        settwenty(props.data)
    }, [props])

    // SET CURRENT SLICE TO SHOW
    useEffect(() => {
        console.log('caused by twenty')
        let slicer = currentSlice * divider
        let sl = twenty.slice(slicer, slicer + divider)
        setSliceToShow(sl)
    }, [currentSlice, twenty, sortOrder]) // needed sortOrder here !!!

    // SET NUMBER OF SLICES
    useEffect(() => {

        console.log('caused by twenty2')
        const getNumberOfSlices = (num, div) => {
            return num % div === 0 ? num / div : Math.trunc(num / div) + 1
        }
        let np = getNumberOfSlices(twenty.length, divider)
        setNumberOfSlices(np)
    }, [twenty])

    return (
        <div className={classes.table_container}>
            <div className={classes.lister}>
                <button onClick={() => pageZero()}>START</button>
                <button onClick={() => prevPage()}>PREV</button>
                <p> {currentSlice + 1} / {numberOfSlices} </p>
                <button onClick={() => nextPage()}>NEXT</button>
            </div>
            <table className={classes.table}>
                <tbody>
                    <tr className={classes.row}>
                        <th className={classes.column_header} onClick={() => getSortedMethod('id')}>
                            ID {properSymbol('id')}
                        </th>
                        <th className={classes.column_header} onClick={() => getSortedMethod('firstName')}>
                            First name {properSymbol('firstName')}
                        </th>
                        <th className={classes.column_header} onClick={() => getSortedMethod('lastName')}>
                            Last name {properSymbol('lastName')}
                        </th>
                        <th className={classes.column_header} onClick={() => getSortedMethod('email')}>
                            Email {properSymbol('email')}
                        </th>
                        <th className={classes.column_header} onClick={() => getSortedMethod('phone')}>
                            Phone {properSymbol('phone')}
                        </th>
                        <th className={classes.column_header} onClick={() => getSortedMethod('state')}>
                            State {properSymbol('state')}
                        </th>
                    </tr>
                    {sliceToShow.map(data => (
                        <tr
                            className={classes.row}
                            key={data.phone}
                            onClick={() => props.onChooseItem(data)}
                            onMouseOver={addBackground} onMouseOut={removeBackground}
                        >
                            <td className={classes.column}>{data.id}</td>
                            <td className={classes.column}>{data.firstName}</td>
                            <td className={classes.column}>{data.lastName}</td>
                            <td className={classes.column}>{data.email}</td>
                            <td className={classes.column}>{data.phone}</td>
                            <td className={classes.column}>{data.adress.state}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={classes.lister}>
                <button onClick={() => pageZero()}>START</button>
                <button onClick={() => prevPage()}>PREV</button>
                <p> {currentSlice + 1} / {numberOfSlices} </p>
                <button onClick={() => nextPage()}>NEXT</button>
            </div>
        </div>
    )
}

export default Table
