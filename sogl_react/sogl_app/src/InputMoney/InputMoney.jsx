import React from "react";
import CurrencyInput from 'react-currency-input-field';


export const InputMoney = () => {


    return <CurrencyInput
        id="input-example"
        name="input-name"
        style={{margin: '1em', padding: '.4em', backgroundColor: '#eee'}}
        placeholder="____.__"
        defaultValue={0}
        decimalsLimit={2}
        onValueChange={(value, name) => console.log(value, name)}
    />;
}