import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ItemJur } from "./ItemJur/ItemJur";
import './Jur.css';
import './jurist.json';
import { InputPopup } from './InputPopup/InputPopup'

//import { openDatabase } from 'react-native-sqlite-storage';

// const db = openDatabase({ name: 'Jur.db' });
// const query = "SELECT * FROM court_register ORDER BY ID LIMIT 1";
// db.transaction(function(txn) {
//     txn.executeSql(
//       query,  //Query to execute as prepared statement
//       // argsToBePassed[],  //Argument to pass for the prepared statement
//       function(tx, res) {
//         return res;
//       }  //Callback function to handle the result
//     );
//   });




export const Jur = () => {

    
    const [jur, setJur] = useState([]);
    const items = [];
    const itemsOnPage = 9;
    const [allPages, setAllPages] = useState(1);
    const [pages, setPages] = useState(1);
    const [open, setOpen] = useState(false);


    const calcPagesRange = (jur, pages, itemsOnPage) => {
        return jur.slice((pages - 1) * itemsOnPage, pages * itemsOnPage)
    }


    const setJurHandle = (result) => {
        setJur( calcPagesRange([...result], pages, itemsOnPage) ); 
    }


    const setAllPagesHandle = (result) => {
        setAllPages(Math.ceil([...result].length / itemsOnPage));
    }




   
    useEffect(() => {
        // eslint-disable-next-line no-undef
        fetch("jurist.json")
          .then(res => res.json())
          .then(
            (result) => {  
                setJurHandle(result);
                setAllPagesHandle(result);
            })
        }, [items, pages]);



    


        
        jur.forEach((data) => {
            items.push(<ItemJur props={data} />);
        })
        

    return (
        <>


        <div className="tsen_wrapper">
            <h2>Юридический отдел</h2>
            <div className="tsen_wrapper__submenu">
                <NavLink className='sub-volume-button' to="/jur">
                    <div className="sub-nav-item active">Все дела</div>
                    <div className="sub-gradient-shadow"></div>
                </NavLink>
                <NavLink className='sub-volume-button' to="/jur/arbitr">
                    <div className="sub-nav-item">Арбитраж</div>
                    <div className="sub-gradient-shadow"></div>
                </NavLink>
                <NavLink className='sub-volume-button' to="/jur/sam">
                    <div className="sub-nav-item">Самостоятельное</div>
                    <div className="sub-gradient-shadow"></div>
                </NavLink>
                <NavLink className='sub-volume-button' to="/jur/kass">
                    <div className="sub-nav-item">Кассация</div>
                    <div className="sub-gradient-shadow"></div>
                </NavLink>
                <div style={{'display':'none'}} className="sub-plain-button with-image create" onClick={() => setOpen(true)}><img src={'./img/tsen_plus.svg'} alt="Создать"/>Ввести дело</div>
                <div></div>
                <div className="sub-plain-button with-image">
                    <select name="filter" className="nonappear" id="filter_option">
                        <option value="">Фильтр</option>
                        <option value="1">Опция 1</option>
                        <option value="2">Опция 2</option>
                        <option value="3">Опция 3</option>
                        <option value="4">Опция 4</option>
                        <option value="5">Опция 5</option>
                    </select>
                </div>
                <div className="tsen_wrapper__submenu-search">
                    <input className="hidet" type="text" id="word_search" name="word_search" placeholder="Поиск по слову" />
                </div>
            </div>


            <div className="tsen_menu__border"></div>


            <div className="tsen_body">
                { items }
            </div>

            <div className="paginationHereSides">
                <img src={`./iosLeft.svg`} width="22" alt="В начало" onClick={() => setPages(1) }/>
                <img src={`./oneLeft.svg`} width="8" alt="Назад" onClick={() => setPages(pages - 1) }/>
                <span>{`${pages}/${allPages}`}</span>
                <img src={`./oneRight.svg`} width="8" alt="Вперед" onClick={() => setPages(pages + 1) }/>
                <img src={`./iosRight.svg`} width="22" alt="В конец"  onClick={() => setPages(allPages) }/>
            </div>


        </div>

        
        <div className="inputPopupWrapper" style={ open ? { 'display': 'block' } : { 'display':'none' } }>
            <div className="inputPopup">
                <div className="popupClose">
                    <span className="close-icon" onClick={() => setOpen(() => false)}>&times;</span>
                </div>
                
                <InputPopup />
            </div>
        </div>  

        </>
    );
}


export default Jur;