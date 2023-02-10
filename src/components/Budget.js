
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch, currency } = useContext(AppContext);
 
    const onChange = (e) => {
        const value = parseInt(e.target.value);
        
        if (budget  > 20000 || value > 20000) {
            alert("The value cannot exceed £20000");
            return;
        }
        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        });
    };
    
    return (
        <div className='alert alert-secondary'>
            <label>
                Budget: {currency}
                <input type="number" name="name" value={budget} step={10} onChange={onChange} />
            </label>
        </div>
    );
};
export default Budget;