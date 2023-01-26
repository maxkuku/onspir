import React from "react";
//import InputPopup from '../InputPopup/InputPopup'
import './ItemJur.css';





export const ItemJur = ({props}) => {

    
            
    
    return (
        <div key={props.ID} className='itemJur'>
            <div className='itemJur__wrap'>
                <div className='itemJur__number_name'>
                    <div className='itemJur__number'>{props.ID}</div>
                    <div className='itemJur__name'>{props.CR_NAME}</div>
                </div>
                <div className='itemJur__details'>
                    <div className='itemJur__details'>Компания: <span>{ (props.COMPANY === 1) ? "НП \"Вега\"" : "неизв." }</span></div>

                    <div className='itemJur__details'>Оппонент: <span>{ (props.OPPONENT === 1) ? "Mail.ru" : "неизв." }</span></div>

                    {/* 0 - isk k nam; 1 - isk ot nas */}
                    <div className='itemJur__details'>Тип: <span></span>{ (props.CR_TYPE === 0) ? "Иск нам" : "Иск от нас" }</div>

                    {/* 0 - sozdan, 1 - v processe, 2 - my vyigrali, 3 - my proigrali, 4 - mirovoe, 5 - perenos */}
                    <div className='itemJur__details'>Статус: <span></span>{ (props.CR_STATUS === 0) ? "Создан" : (props.CR_STATUS === 1) ? "В процессе" : (props.CR_STATUS === 2) ? "Мы выиграли" : (props.CR_STATUS === 3) ? "Мы проиграли" : (props.CR_STATUS === 4) ? "Мировое" : (props.CR_STATUS === 5) ? "Перенос" : "-" }</div>

                    <div className='itemJur__details'>Завершенность: <span>{props.CR_DATE_TO}</span></div>

                    <div className='itemJur__details'>Общая сумма затрат: <span>{new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(props.CR_COST)}</span></div>

                    <div className='itemJur__details'>Имя судьи: <span></span>{props.JUDGE_NAME}</div> 
                    <div className='itemJur__details'>Наш сотрудник ведущий дело: <span>{ (props.LAWER_NAME === 1) ? "Петров Иван Петрович" : (props.LAWER_NAME === 2) ? "Семенов Тимофей Валерианович" : "-"}</span></div>

                    <div className='itemJur__details'>Дата начала дела: <span>{ new Intl.DateTimeFormat('ru-RU').format(new Date().getTime(props.CR_DATE_FROM)) }</span></div>

                    <div className='itemJur__details'>Дата окончания: <span>{ (props.CR_DATE_TO === "-") ? "В процессе" : new Intl.DateTimeFormat('ru-RU').format(new Date().getTime(props.CR_DATE_TO)) }</span></div>

                    <div className='itemJur__details'>Комментарий: <span>{props.DESC}</span></div> 

                </div>
                <div className='itemJur__change_wrap'>
                    <div className='itemJur__documents'>{ (props.PACKAGE_ID === "-") ? `Документов нет` : `<a target='_blank' href='/documents/:id'>Пакет документов</a>` }</div>
                    <div className='itemJur__change'>
                        Изменить
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemJur;