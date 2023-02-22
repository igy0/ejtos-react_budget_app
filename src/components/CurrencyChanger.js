import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyChanger = () => {
    // const { currency } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);

    const setCurrency = (currency) => {
        dispatch({
            type:'CHG_CURRENCY',
            payload : currency,
        });
    }
    return (
        <select className="custom-select" id="currencySelect" 
        onChange={(event) => setCurrency(event.target.value)}
        style={{backgroundColor:"#A5E1A0", padding:"0 100px"}}>
            <option defaultValue value="£" name="Reduce">£ Pound</option>
            <option value="$" name="dolla">$ Dollar</option>
            <option value="€" name="Reduce">€ Euro</option>
            <option value="₹" name="Reduce">₹ Ruppee</option>
        </select>
    )
}
export default CurrencyChanger;