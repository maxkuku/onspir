// import useState from "react";
import './InputPopup.css';




export const InputPopup = (open) => {

    
    

    return (
        
        <div style={{ open }}>
            
            
            <div className="add_remove_wrap">
                <div className='cancel'>Отменить</div>
                <div className='add'>Добавить</div>
            </div>
            <form id="add_thing" className='formAdd'>
                <div className='fieldWrapper'>
                    <input type="text" name="poluch" value="" placeholder="Получатель" />
                    <img className="storage-unit-arrow" src="../arrDown.svg" alt="open"/>
                    <div className="storage-unit-modal">
                        <div className="storage-unit-text storage-unit-modal-row"></div>
                    </div>
                </div>

                <div className='fieldWrapper'>
                    <input type="text" name="inits" value="" placeholder="Инициатор" />
                    <img className="storage-unit-arrow" src="../arrDown.svg" alt="open"/>
                    <div className="storage-unit-modal">
                        <div className="storage-unit-text storage-unit-modal-row"></div>
                    </div>
                </div>
                <div className='fieldWrapper'>
                    <input type="text" name="tmc" value="" placeholder="ТМЦ" />
                    <img className="storage-unit-arrow" src="../arrDown.svg" alt="open"/>
                    <div className="storage-unit-modal">
                        <div className="storage-unit-text storage-unit-modal-row"></div>
                    </div>
                </div>
                <div className='fieldWrapper'>
                    <input type="text" name="kolvo" value="" placeholder="Количество" />
                </div>
                <div className='fieldWrapper'>
                    <input type="text" name="date" value="" placeholder="Срок" />
                    <span className='date'>28 нояб. 2022 г.</span><span className='time'>16:00</span>
                </div>


                <div className='bez_sroka'>
                    <span className='text'>Без срока</span>
                    <span className='pointWrapper on'>
                        <span className='point'>&nbsp;</span>
                    </span>
                </div>

                <div className='fieldWrapper area'>
                    <textarea name="comment_add" placeholder='Комментрий/примечание' rows='5'></textarea>
                </div>


                <div className='agree_add'>
                    <span className='subtitle'>Вы подтверждаете?</span>
                    <div className='by_sides'>
                        <span>Да</span><span>Нет</span>
                    </div>
                </div>
            </form>
        </div>
        
    )
}

