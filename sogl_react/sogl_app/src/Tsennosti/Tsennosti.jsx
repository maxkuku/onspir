import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ItemTsen } from "./ItemTsen/ItemTsen";
import './Tsennosti.css';
import './tsen.json';
import { InputPopup } from './InputPopup/InputPopup'





export const Tsennosti = () => {

    
    const [tsen, setTsen] = useState([]);
    const items = [];
    const itemsOnPage = 9;
    const [allPages, setAllPages] = useState(1);
    const [pages, setPages] = useState(1);
    const [open, setOpen] = useState("display: none");


    const calcPagesRange = (tsen, pages, itemsOnPage) => {
        return tsen.slice((pages - 1) * itemsOnPage, pages * itemsOnPage)
    }


    const setTsenHandle = (result) => {
        setTsen( calcPagesRange([...result], pages, itemsOnPage) ); 
    }


    const setAllPagesHandle = (result) => {
        setAllPages(Math.ceil([...result].length / itemsOnPage));
    }




   
    useEffect(() => {
        // eslint-disable-next-line no-undef
        fetch("tsen.json")
          .then(res => res.json())
          .then(
            (result) => {  
                setTsenHandle(result);
                setAllPagesHandle(result);
            })
        }, [items, pages]);



    


        
        tsen.forEach((data) => {
            items.push(<ItemTsen props={data}/>)
        })
        

    return (
        <>


        <div className="tsen_wrapper">
            <h2>Получи и распишись</h2>
            <div className="tsen_wrapper__submenu">
                <NavLink className='sub-volume-button' to="/tsennosti">
                    <div className="sub-nav-item active">Журнал</div>
                    <div className="sub-gradient-shadow"></div>
                </NavLink>
                <NavLink className='sub-volume-button' to="/tsennosti/invent">
                    <div className="sub-nav-item">Инветарь</div>
                    <div className="sub-gradient-shadow"></div>
                </NavLink>
                <div className="sub-plain-button with-image create" onClick={() => setOpen("display: block")}><img src={'./img/tsen_plus.svg'} alt="Создать"/>Создать передачу</div>
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



            <div className="tsen_wrapper__subsubmenu">
                <div className="sub-plain-button with-image-menu">
                    <select name="poluch" className="nonappear" id="poluch_option">
                        <option value="">Получатель</option>
                        <option value="1">Опция 1</option>
                        <option value="2">Опция 2</option>
                        <option value="3">Опция 3</option>
                        <option value="4">Опция 4</option>
                        <option value="5">Опция 5</option>
                    </select>
                </div>

                <div className="sub-plain-button with-image-menu">
                    <select name="inits" className="nonappear" id="inits_option">
                        <option value="">Инициатор</option>
                        <option value="1">Опция 1</option>
                        <option value="2">Опция 2</option>
                        <option value="3">Опция 3</option>
                        <option value="4">Опция 4</option>
                        <option value="5">Опция 5</option>
                    </select>
                </div>

                <div className="sub-plain-button with-image-menu">
                    <select name="item" className="nonappear" id="item_option">
                        <option value="">Предмет</option>
                        <option value="1">Опция 1</option>
                        <option value="2">Опция 2</option>
                        <option value="3">Опция 3</option>
                        <option value="4">Опция 4</option>
                        <option value="5">Опция 5</option>
                    </select>
                </div>

                <div className="subsub_point begin">Начало: <span>28 нояб. 2022 г.</span></div>
                <div className="subsub_point begin-time">16:00</div>
                <div className="subsub_point end">Конец: <span>31 нояб. 2023 г.</span></div>
                <div className="subsub_point end-time">17:00</div>


                <div className="sub-plain-button with-image">
                    <select name="poluch" className="nonappear" id="poluch_option">
                        <option value="">Статус</option>
                        <option value="1">Красный</option>
                        <option value="2">Желтый</option>
                        <option value="3">Зеленый</option>
                    </select>
                </div>


                <div className="sub-plain-button with-image">
                    <select name="poluch" className="nonappear" id="poluch_option">
                        <option value="">Сортировка</option>
                        <option value="1">А-Я</option>
                        <option value="2">Я-А</option>
                    </select>
                </div>


                <div className="sub-plain-button with-image">
                    <select name="poluch" className="nonappear" id="poluch_option">
                        <option value="">Личная/Рабочая</option>
                        <option value="1">Личная</option>
                        <option value="2">Рабочая</option>
                    </select>
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

        
        <div className="inputPopupWrapper" style={{ open }}>
            <div className="inputPopup">
                <div className="popupClose">
                    <span className="close-icon" onClick={() => setOpen("display: none")}>&times;</span>
                </div>
                
                <InputPopup />
            </div>
        </div>  

        </>
    );
}


