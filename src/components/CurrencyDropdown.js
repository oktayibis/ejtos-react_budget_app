
import { AppContext } from '../context/AppContext';
import {useContext} from "react";


const CurrencyDropdown = () => {
    const {currency, currencyList, dispatch} = useContext(AppContext);

    const onDropdownChange = (e) => {
        const value = e.target.value;
        dispatch({
            type: 'CHG_CURRENCY',
            payload: value,
        });
    };
    
    return (
        <select
        value={currency}
        onChange={onDropdownChange}
        className="currency"
        
        >
        {currencyList.map(currency => (
            <option key={currency.symbol} value={currency.symbol} className="currency-item">
                {currency.symbol} {currency.name}
            </option>
        ))}
        </select>
    );
};

export default CurrencyDropdown;