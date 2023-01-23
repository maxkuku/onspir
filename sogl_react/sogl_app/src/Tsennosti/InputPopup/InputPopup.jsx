// import useState from "react";
import { useState } from 'react';
import './InputPopup.css';




export const InputPopup = (show) => {

    const [showH, setShowH] = useState(() => "display: none")
    

    if(show === true) {
        setShowH(() => "display: block");
    }
    
    

    return (
        
        <div className="inputPopupWrapper" style={{ showH }}>
            <div className="inputPopup" style={{ showH }}>
            <div className="add_remove_wrap">
                <div>Добавить</div>
                <div>Отменить</div>
            </div>
                <form id="add_thing">
                    <div><input type="text" name="poluch" value="" placeholder="Получатель" /></div>
                    <div><input type="text" name="inits" value="" placeholder="Инициатор" /></div>
                    <div><input type="text" name="tmc" value="" placeholder="ТМЦ" /></div>
                    <div><input type="text" name="kolvo" value="" placeholder="Количество" /></div>
                    <div><input type="text" name="date" value="" placeholder="Срок" /></div>
                </form>
            </div>
        </div>
        
    )
}

