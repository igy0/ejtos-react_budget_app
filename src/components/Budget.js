import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);
    const { dispatch } = useContext(AppContext);
    const { currency } = useContext(AppContext);

    const setNewBudget = (budget) => {
        if (budget > 20000) {
            alert("please enter in a budget lower than 20000");
        } else if (budget < 960) {
            alert("budget cannot be lower than money already spent");
        } else {
            dispatch({
                type:'SET_BUDGET',
                payload : budget,
            });
        }
    }
    return (
        <div className='alert alert-secondary'>
            {/* <span>Budget: £{budget}</span> */}
            Budget: {currency} <input
                type = 'number'
                value = {budget}
                onChange = {(event) => setNewBudget(event.target.value)}
                step = '10'
            >
            </input>

        </div>
    );
};
export default Budget;
