import React, { useEffect, useState } from "react";
import './ItemTsen.css';





export const ItemTsen = ({props}) => {

    const [status, setStatus] = useState("");

    const [dnow, setDnow] = useState(0);
    const [dalert, setDalert] = useState(0);
    const [dtil, setDtil] = useState(0);
    
    useEffect(() => {setDnow(new Date().getTime())},[]);
    useEffect(() => {setDalert(new Date().getTime(dnow - 1 * 24 * 60 * 60))},[dnow]);
    useEffect(() => {setDtil(new Date().getTime(`${props.date_til} ${props.time_til}`))},[props.date_til,props.time_til]);

    // console.log(dnow + ' ' + dtil + ' ' + dalert)
    // dnow + ' ' + dtil + ' ' + dalert
    // 1674051089802 1674051093473 1674051089806
    
    switch(dnow){
        case dnow > dtil:
            useEffect(() => {setStatus("red")},[]);
            break;     
        case dnow > dalert && dnow < dtil:
            useEffect(() => {setStatus("yellow")},[]);
            break; 
        default:
            useEffect(() => {setStatus("green")},[]);
            break;    
    }
    
    return (
        <div key={props.id} className="itemTsen">
            <div className="itemTsen__wrap">
                <div className="itemTsen__wrap-headings">
                    <div>Получатель</div>
                    <div>Инициатор</div>
                    <div className="itemTsen__wrap-headings-itemname">{props.name}</div>
                    <div className="itemTsen__wrap-headings-list">
                        <img src={`./img/print.svg`}/>
                        <span className={`status ${status}`}>&nbsp;</span>
                    </div>
                </div>
                <div className="itemTsen__wrap-headings-under"></div>
                <div className="itemTsen__wrap-data">
                    <div>{props.poluch}</div>
                    <div>{props.inits}</div>
                    <div>
                        <span>Количество: </span><span className="itemTsen__wrap-data-kol">{props.kol}</span><br/>
                        <span>Срок: </span><span className="itemTsen__wrap-data-srok">До {props.date_til}</span>
                    </div>
                    <div>
                        
                    </div>
                </div>
                <div className="itemTsen__wrap-comment">{props.comment}</div>
                <div className="itemTsen__wrap-bottom">
                    <div className="itemTsen__wrap-bottom-date_create">{props.date_create}</div>
                    <div className="itemTsen__wrap-bottom-item_id">#{props.id}</div>
                    <div className="itemTsen__wrap-data-status">
                        <div className='sub-volume-button'>
                            <div className="sub-nav-item active">Получено</div>
                            <div className="sub-gradient-shadow"></div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}