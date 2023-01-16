import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ItemTsen } from "./ItemTsen/ItemTsen";
import './Tsennosti.css';
import './tsen.json';





export const Tsennosti = () => {

    const [tsen, setTsen] = useState([]);
    const items = [];
    
    useEffect(() => {
        fetch("tsen.json")
          .then(res => res.json())
          .then(
            (result) => {  
                setTsen([...result]);
              
                
            })
        }, [items]);


        
        tsen.forEach((data) => {
            
            items.push(<ItemTsen props={data}/>)
        })
        

    return (
        <>


        <div className="tsen_wrapper">
            <h2>Передача в эксплуатацию</h2>
            <div className="tsen_wrapper__submenu">
                <NavLink className='sub-volume-button' to="/tsennosti">
                    <div className="sub-nav-item active">Журнал</div>
                    <div className="sub-gradient-shadow"></div>
                </NavLink>
                <NavLink className='sub-volume-button' to="/tsennosti/invent">
                    <div className="sub-nav-item">Инветарь</div>
                    <div className="sub-gradient-shadow"></div>
                </NavLink>
                <div className="sub-plain-button with-image"><img src={'./img/tsen_plus.svg'} alt="Создать"/>Создать передачу</div>
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
        </div>

        </>
    );
}

