import React from "react";
import './ItemTsen.css';






export const ItemTsen = ({props}) => {

    let status = "";
    const dnow = new Date().getTime();
    const dalert = new Date().getTime(dnow - 1 * 24 * 60 * 60);
    const dthere = new Date().getTime(props.date_til);
    switch(dnow){
        case dnow > dthere:
            status = "status red";
            break;     
        case dnow > dalert && dnow < dthere:
            status = "status yellow";
            break; 
        default:
            status = "status green";
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
                        <img src={`./img/list.svg`}/>
                        <span className={status}>&nbsp;</span>
                    </div>
                </div>
                <div className="itemTsen__wrap-data">
                    <div>{props.poluch}</div>
                    <div>{props.inits}</div>
                    <div>
                        <span>Количество</span><span className="itemTsen__wrap-data-kol">{props.kol}</span><br/>
                        <span>Срок</span><span className="itemTsen__wrap-data-srok">{props.srok}</span>
                    </div>
                    <div>
                        
                    </div>
                </div>
                <div className="itemTsen__wrap-comment">{props.comment}</div>
                <div className="itemTsen__wrap-bottom">
                    <div className="itemTsen__wrap-bottom-date_create">{props.date_create}</div>
                    <div className="itemTsen__wrap-bottom-item_id">#{props.id}</div>
                    <div></div>
                    <div>
                        <span className="itemTsen__wrap-data-status">Получено</span>
                    </div>
                </div>
            </div>
        </div>
    )
}