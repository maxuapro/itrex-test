import React from 'react'
import classes from './SearchBar.module.css'

// const states = [
//     'AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT',
//     'DC', 'DE', 'FL', 'GA', 'HI', 'IA', 'ID',
//     'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD',
//     'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC',
//     'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY',
//     'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD',
//     'TN', 'TX', 'UT', 'VA', 'VT', 'WA', 'WI',
//     'WV', 'WY'
// ]

const SearchBar = (props) => {

    // const inputR = useRef()

    return (
        <div className={classes.searchbar}>
            {/* FILTER BY NAME */}
            <div style={{ width: '60%' }}>
                <h3 style={{ display: 'inline', marginRight: '20px' }}>name:</h3>
                <input
                    // ref={inputR}
                    type="text"
                    name="state"
                    id="state"
                    placeholder="search be name:"
                    className={classes.input}
                    onChange={props.onChangeSearchName}
                    onPaste={props.onChangeSearchName}
                />
            </div>

            {/* FILTER BY STATE */}
            <div>
                <label htmlFor="state">Filter by state:</label>
                <select name="state" id="state" onChange={props.onChooseState}>
                    <option value="--">--</option>
                    <option value="AK">AK</option>
                    <option value="AL">AL</option>
                    <option value="AR">AR</option>
                    <option value="AZ">AZ</option>
                    <option value="CA">CA</option>
                    <option value="CO">CO</option>
                    <option value="CT">CT</option>
                    <option value="DC">DC</option>
                    <option value="DE">DE</option>
                    <option value="FL">FL</option>
                    <option value="GA">GA</option>
                    <option value="HI">HI</option>
                    <option value="IA">IA</option>
                    <option value="ID">ID</option>
                    <option value="IL">IL</option>
                    <option value="IN">IN</option>
                    <option value="KS">KS</option>
                    <option value="KY">KY</option>
                    <option value="LA">LA</option>
                    <option value="MA">MA</option>
                    <option value="MD">MD</option>
                    <option value="ME">ME</option>
                    <option value="MI">MI</option>
                    <option value="MN">MN</option>
                    <option value="MO">MO</option>
                    <option value="MS">MS</option>
                    <option value="MT">MT</option>
                    <option value="NC">NC</option>
                    <option value="ND">ND</option>
                    <option value="NE">NE</option>
                    <option value="NH">NH</option>
                    <option value="NJ">NJ</option>
                    <option value="NM">NM</option>
                    <option value="NV">NV</option>
                    <option value="NY">NY</option>
                    <option value="OH">OH</option>
                    <option value="OK">OK</option>
                    <option value="OR">OR</option>
                    <option value="PA">PA</option>
                    <option value="RI">RI</option>
                    <option value="SC">SC</option>
                    <option value="SD">SD</option>
                    <option value="TN">TN</option>
                    <option value="TX">TX</option>
                    <option value="UT">UT</option>
                    <option value="VA">VA</option>
                    <option value="VT">VT</option>
                    <option value="WA">WA</option>
                    <option value="WI">WI</option>
                    <option value="WV">WV</option>
                    <option value="WY">WY</option>
                </select>
            </div>
        </div>
    )
}

export default SearchBar
