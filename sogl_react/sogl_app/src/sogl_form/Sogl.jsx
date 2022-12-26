import React from 'react';
import Plan from '../cost_plan/Plan'
import './Sogl.css';
import Line from '../Line/Line'



class Sogl extends React.Component {





render() {
return (
<div className="sided-big">
    <div className="sides paired">
        <div className="sided-small">
            <div>
                <div className="sub-page-menu">

                    <div className="sub-volume-button">
                        <div className="sub-nav-item active">На согласование</div>
                        <div className="sub-gradient-shadow"></div>
                    </div>
                    <div className="sub-volume-button">
                        <div className="sub-nav-item">Оплаченные счета</div>
                        <div className="sub-gradient-shadow"></div>
                    </div>
                    <div className="sub-volume-button">
                        <div className="sub-nav-item">Архив счетов</div>
                        <div className="sub-gradient-shadow"></div>
                    </div>
                    <div className="sub-volume-button">
                        <div className="sub-nav-item">Согласованные</div>
                        <div className="sub-gradient-shadow"></div>
                    </div>
                    <div className="sub-volume-button">
                        <div className="sub-nav-item">На доработке</div>
                        <div className="sub-gradient-shadow"></div>
                    </div>
                    <div className="sub-volume-button">
                        <div className="sub-nav-item">Отклоненные счета</div>
                        <div className="sub-gradient-shadow"></div>
                    </div>

                    <div className="line"></div>
                </div>
            </div>
            <div>
                <select name="filter" className="nonappear" id="filter_option">
                    <option value="">Фильтр</option>
                    <option value="1">Опция 1</option>
                    <option value="2">Опция 2</option>
                    <option value="3">Опция 3</option>
                    <option value="4">Опция 4</option>
                    <option value="5">Опция 5</option>
                </select>
            </div>
            <input className="hidet" type="text" id="word_search" name="word_search" placeholder="Поиск по слову" />
        </div>



        <div className="objects-list">









            <div className="object-item expanded">
                <div className="object-inner">

                    <div className="object-flexed__inner">
                        <div className='object-flexed col-1'>

                            <div className='object-flexed__first paddingLeft20'>
                                <div className="object-flexed__title">Объект</div>
                                <div className="object-flexed__head">
                                    <div className="object-flexed__green object-flexed__head-left">Заявка #77898 от 01.12.2022 г.</div>
                                    <div className="object-flexed__snab object-flexed__head-right">Снабжение<span>Мокров Сергей</span></div>
                                </div>
                                <div className="object-flexed__head">
                                    <div className='object-flexed__head-left'>Электроинструменты</div>
                                    <div className="object-flexed__comment object-flexed__head-right">Комментарии</div>
                                </div>
                            </div>

                            <div className='object-flexed__second doflex'>
                                <div className="secinner">
                                    <div><span>Дата и отметка времени: </span><span>15.12.2022 в 18:40</span></div>
                                    <div><span>Статья затрат: </span><span>Услуги</span></div>
                                    <div><span>Отметка согласования: </span><span>В почте</span></div>
                                    <div><span>Инициатор: </span><span>Снабжение - Иванов Иван</span></div>
                                    <div><span>Дата и номер счета: </span><span>№23-234 от 12.12.2022</span></div>
                                    <div><span>Дата оплаты: </span><span>23.12.2022</span></div>
                                    <div><span>Договор-основание: </span><span>№111-333 РПА</span></div>
                                    <div><span>Шифр документа: </span><span>44-55-666</span></div>
                                </div>
                                <div className="object-flexed__tree">
                                    <div className="div_sogl_tree">
                                        <div className="sogl1">
                                            <span>Счет</span>
                                            <span>12 345 342,00</span>
                                        </div>
                                        <div className="line1 active"></div>
                                        <div className="sogl2"></div>
                                        <div className="line2 notapproved"></div>
                                        <div className="sogl3"></div>
                                        <div className="line3 rework"></div>
                                        <div className="sogl4"></div>
                                        <div className="line4"></div>
                                        <div className="sogl5 checked"></div>
                                        <div className="line5"></div>
                                        <div className="sogl6"></div>
                                    </div>
                                </div>
                            </div>


                        </div>




                        <div className='object-flexed col-2'>

                            <div className='object-flexed__first'>
                                <div className="object-flexed__title doflex">
                                   <div className='object-flexed__title-ooo'>
                                        <span className="object-flexed__title-compname">ООО ВЕГА</span>
                                        <span>(СС)</span>
                                   </div>
                                    <div className="object-flexed__title-sum">156 221,01</div>
                                </div>
                                <div className="object-flexed__head">
                                    Здравствуйте! Прошу согласовать цены закупки ЛКМ у МО-10 в Тамани, КП во влож.
                                    Сравнительная таблица с ценами ВМП и МО-10 прилагается. Объем указанный в КП
                                    соответствует уже полученному.
                                </div>
                            </div>

                            <div className='object-flexed__second'>

                                <div className="object-flexed__second-docs">
                                    <div className="object-flexed__second-name">Заявка №12345-567 от 12.12.2022</div>
                                    <div className="object-flexed__second-docslist">
                                        <div className="object-flexed__second-doc">документ из заявки</div>
                                        <div className="object-flexed__second-doc">документ из заявки</div>
                                        <div className="object-flexed__second-doc">документ из заявки</div>
                                    </div>
                                </div>
                            </div>

                        </div>



                        <div className="object-flexed col-3">


                            <div className="object-flexed__first doflex">
                                <div className="object-flexed__title" title="ИП Петров-Иванов Всеволод Петрович">ИП Петров-Иванов Всеволод Петрович</div>
                                <div className="object-flexed__title gray">№ 
                                <span className="object-flexed__obnum">2345</span> 
                                <span className="object-flexed__obdate">17.12.2022</span>
                                </div>

                                <div className="object-flexed__first-last">
                                    <img src="list.png" alt="Список" />
                                    <img src="document.png" alt="Документ" />
                                </div>

                                <div className="classok">OK</div>
                            </div>


                            

                            

                            <div className="object-flexed__second">
                                <div className="ob-sogl">
                                    <div><span>Начальник ПТО: </span><span>согласовано 15.12.2022 в
                                            18:40</span><br /><span>Без комментариев.</span></div>
                                    <div><span>Начальник ОС: </span><span>согласовано 15.12.2022 в
                                            18:40</span><br /><span>Комментрий рораору лррмшлву лрвортмолуврт</span>
                                    </div>
                                    <div><span>Директор компании: </span><span>согласовано 15.12.2022 в
                                            18:40</span><br /><span>Без комментариев.</span></div>
                                    <div><span>Главный бухгалтер: </span><span>согласовано 15.12.2022 в
                                            18:40</span><br /><span>Без комментариев.</span></div>
                                    <div><span>Учредитель компании: </span><span>согласовано 15.12.2022 в
                                            18:40</span><br /><span>Без комментариев.</span></div>
                                </div>
                            </div>
                        </div>

                    </div>







                    <div className="object-last">
                        
                        <Line persent='45'/>
                    </div>



                    <div className="m-comments-here">
                        <h2>Комментарии</h2>
                        <div className="m-comments-here__list">
                            <div className="m-comments-here__item">
                                <img src="comment-image.png" alt="Автор" className="m-comments-here__item-image" />
                                <div className="m-comments-here__item-details">
                                    <div className="m-comments-here__item-details-name">Иван Иванович</div>
                                    <div className="m-comments-here__item-details-job">Начальник Снабжения</div>
                                    <div className="m-comments-here__item-details-text">Lorem ipsum dolor sit amet
                                        consectetur adipisicing elit. Quas eligendi natus fuga temporibus praesentium
                                        ipsam ipsum iure dolorum, eos earum labore error cum quaerat numquam fugit, est
                                        unde. Aut, illo.</div>
                                    <div className="m-comments-here__item-details--time">01:24</div>
                                </div>

                            </div>


                            <div className="m-comments-here__item">
                                <img src="comment-image.png" alt="Автор" className="m-comments-here__item-image" />
                                <div className="m-comments-here__item-details">
                                    <div className="m-comments-here__item-details-name">Иван Иванович</div>
                                    <div className="m-comments-here__item-details-job">Начальник Снабжения</div>
                                    <div className="m-comments-here__item-details-text">оршошпро рошлщшгрпрнот
                                        отрчгорышочшы тлошрршр оторшшщрощшощдлщлщо тогргтлтл иоргршгр отргоргщр
                                        оргорштр.</div>
                                    <div className="m-comments-here__item-details--time">02:24</div>
                                </div>

                            </div>
                        </div>
                        <div className="m-comments-here__add">
                            <textarea className="m-comments-here__add-text" name="add-a-comment"
                                placeholder="Введите комменатрий"></textarea>
                            <button className="m-comments-here__add-button" name="comment-submit">
                                <img src="arr-up.png" alt="Submit" />
                            </button>
                        </div>
                    </div>
                </div>


                <div className="column">
                    <div className="sogl_with_comment">Согласовано с комментарием</div>
                    <div className="send_to_work">Отправить на доработку</div>

                    <div className="sub-volume-button state">
                        <div className="sub-nav-item">Отказ</div>
                        <div className="sub-gradient-shadow"></div>
                    </div>


                    <Plan zatr="7984100" plan_b="22548714.3" sum_s="456221.01"/>
                </div>

            </div>







            <div className="object-item">
                <div className="object-inner">

                    <div className="object-flexed__inner">
                        <div className='object-flexed col-1'>

                            <div className='object-flexed__first paddingLeft20'>
                                <div className="object-flexed__title">Объект</div>
                                <div className="object-flexed__head">
                                    <div className="object-flexed__green object-flexed__head-left">Заявка #77898 от 01.12.2022 г.</div>
                                    <div className="object-flexed__snab object-flexed__head-right">Снабжение<span>Мокров Сергей</span></div>
                                </div>
                                <div className="object-flexed__head">
                                    <div className='object-flexed__head-left'>Электроинструменты</div>
                                    <div className="object-flexed__comment object-flexed__head-right">Комментарии</div>
                                </div>
                            </div>

                            <div className='object-flexed__second doflex'>
                                <div className="secinner">
                                    <div><span>Дата и отметка времени: </span><span>15.12.2022 в 18:40</span></div>
                                    <div><span>Статья затрат: </span><span>Услуги</span></div>
                                    <div><span>Отметка согласования: </span><span>В почте</span></div>
                                    <div><span>Инициатор: </span><span>Снабжение - Иванов Иван</span></div>
                                    <div><span>Дата и номер счета: </span><span>№23-234 от 12.12.2022</span></div>
                                    <div><span>Дата оплаты: </span><span>23.12.2022</span></div>
                                    <div><span>Договор-основание: </span><span>№111-333 РПА</span></div>
                                    <div><span>Шифр документа: </span><span>44-55-666</span></div>
                                </div>
                                <div className="object-flexed__tree">
                                    <div className="div_sogl_tree">
                                        <div className="sogl1">
                                            <span>Счет</span>
                                            <span>12 345 342,00</span>
                                        </div>
                                        <div className="line1 active"></div>
                                        <div className="sogl2"></div>
                                        <div className="line2 notapproved"></div>
                                        <div className="sogl3"></div>
                                        <div className="line3 rework"></div>
                                        <div className="sogl4"></div>
                                        <div className="line4"></div>
                                        <div className="sogl5 checked"></div>
                                        <div className="line5"></div>
                                        <div className="sogl6"></div>
                                    </div>
                                </div>
                            </div>


                        </div>




                        <div className='object-flexed col-2'>

                            <div className='object-flexed__first'>
                                <div className="object-flexed__title doflex">
                                   <div className='object-flexed__title-ooo'>
                                        <span className="object-flexed__title-compname">ООО ВЕГА</span>
                                        <span>(СС)</span>
                                   </div>
                                    <div className="object-flexed__title-sum">156 221,01</div>
                                </div>
                                <div className="object-flexed__head">
                                    Здравствуйте! Прошу согласовать цены закупки ЛКМ у МО-10 в Тамани, КП во влож.
                                    Сравнительная таблица с ценами ВМП и МО-10 прилагается. Объем указанный в КП
                                    соответствует уже полученному.
                                </div>
                            </div>

                            <div className='object-flexed__second'>

                                <div className="object-flexed__second-docs">
                                    <div className="object-flexed__second-name">Заявка №12345-567 от 12.12.2022</div>
                                    <div className="object-flexed__second-docslist">
                                        <div className="object-flexed__second-doc">документ из заявки</div>
                                        <div className="object-flexed__second-doc">документ из заявки</div>
                                        <div className="object-flexed__second-doc">документ из заявки</div>
                                    </div>
                                </div>
                            </div>

                        </div>



                        <div className="object-flexed col-3">


                            <div className="object-flexed__first doflex">
                                <div className="object-flexed__title" title="ИП Петров-Иванов Всеволод Петрович">ИП Петров-Иванов Всеволод Петрович</div>
                                <div className="object-flexed__title gray">№ 
                                <span className="object-flexed__obnum">2345</span> 
                                <span className="object-flexed__obdate">17.12.2022</span>
                                </div>

                                <div className="object-flexed__first-last">
                                    <img src="list.png" alt="Список" />
                                    <img src="document.png" alt="Документ" />
                                </div>

                                <div className="classok">OK</div>
                            </div>


                            

                            

                            <div className="object-flexed__second">
                                <div className="ob-sogl">
                                    <div><span>Начальник ПТО: </span><span>согласовано 15.12.2022 в
                                            18:40</span><br /><span>Без комментариев.</span></div>
                                    <div><span>Начальник ОС: </span><span>согласовано 15.12.2022 в
                                            18:40</span><br /><span>Комментрий рораору лррмшлву лрвортмолуврт</span>
                                    </div>
                                    <div><span>Директор компании: </span><span>согласовано 15.12.2022 в
                                            18:40</span><br /><span>Без комментариев.</span></div>
                                    <div><span>Главный бухгалтер: </span><span>согласовано 15.12.2022 в
                                            18:40</span><br /><span>Без комментариев.</span></div>
                                    <div><span>Учредитель компании: </span><span>согласовано 15.12.2022 в
                                            18:40</span><br /><span>Без комментариев.</span></div>
                                </div>
                            </div>
                        </div>

                    </div>







                    <div className="object-last">
                    <Line persent='50'/>
                    </div>



                    <div className="m-comments-here">
                        <h2>Комментарии</h2>
                        <div className="m-comments-here__list">
                            <div className="m-comments-here__item">
                                <img src="comment-image.png" alt="Автор" className="m-comments-here__item-image" />
                                <div className="m-comments-here__item-details">
                                    <div className="m-comments-here__item-details-name">Иван Иванович</div>
                                    <div className="m-comments-here__item-details-job">Начальник Снабжения</div>
                                    <div className="m-comments-here__item-details-text">Lorem ipsum dolor sit amet
                                        consectetur adipisicing elit. Quas eligendi natus fuga temporibus praesentium
                                        ipsam ipsum iure dolorum, eos earum labore error cum quaerat numquam fugit, est
                                        unde. Aut, illo.</div>
                                    <div className="m-comments-here__item-details--time">01:24</div>
                                </div>

                            </div>


                            <div className="m-comments-here__item">
                                <img src="comment-image.png" alt="Автор" className="m-comments-here__item-image" />
                                <div className="m-comments-here__item-details">
                                    <div className="m-comments-here__item-details-name">Иван Иванович</div>
                                    <div className="m-comments-here__item-details-job">Начальник Снабжения</div>
                                    <div className="m-comments-here__item-details-text">оршошпро рошлщшгрпрнот
                                        отрчгорышочшы тлошрршр оторшшщрощшощдлщлщо тогргтлтл иоргршгр отргоргщр
                                        оргорштр.</div>
                                    <div className="m-comments-here__item-details--time">02:24</div>
                                </div>

                            </div>
                        </div>
                        <div className="m-comments-here__add">
                            <textarea className="m-comments-here__add-text" name="add-a-comment"
                                placeholder="Введите комменатрий"></textarea>
                            <button className="m-comments-here__add-button" name="comment-submit">
                                <img src="arr-up.png" alt="Submit" />
                            </button>
                        </div>
                    </div>
                </div>


                <div className="column">
                    <div className="sogl_with_comment">Согласовано с комментарием</div>
                    <div className="send_to_work">Отправить на доработку</div>

                    <div className="sub-volume-button state">
                        <div className="sub-nav-item">Отказ</div>
                        <div className="sub-gradient-shadow"></div>
                    </div>


                    <Plan zatr="8984100" plan_b="12548714.5" sum_s="256220.65"/>
                </div>

            </div>




            <div className="object-item">
                <div className="object-inner active">

                    <div className="object-flexed__inner">
                        <div className='object-flexed col-1'>

                            <div className='object-flexed__first paddingLeft20'>
                                <div className="object-flexed__title">Объект</div>
                                <div className="object-flexed__head">
                                    <div className="object-flexed__green object-flexed__head-left">Заявка #77898 от 01.12.2022 г.</div>
                                    <div className="object-flexed__snab object-flexed__head-right">Снабжение<span>Мокров Сергей</span></div>
                                </div>
                                <div className="object-flexed__head">
                                    <div className='object-flexed__head-left'>Электроинструменты</div>
                                    <div className="object-flexed__comment object-flexed__head-right">Комментарии</div>
                                </div>
                            </div>

                            <div className='object-flexed__second doflex'>
                                <div className="secinner">
                                    <div><span>Дата и отметка времени: </span><span>15.12.2022 в 18:40</span></div>
                                    <div><span>Статья затрат: </span><span>Услуги</span></div>
                                    <div><span>Отметка согласования: </span><span>В почте</span></div>
                                    <div><span>Инициатор: </span><span>Снабжение - Иванов Иван</span></div>
                                    <div><span>Дата и номер счета: </span><span>№23-234 от 12.12.2022</span></div>
                                    <div><span>Дата оплаты: </span><span>23.12.2022</span></div>
                                    <div><span>Договор-основание: </span><span>№111-333 РПА</span></div>
                                    <div><span>Шифр документа: </span><span>44-55-666</span></div>
                                </div>
                                <div className="object-flexed__tree">
                                    <div className="div_sogl_tree">
                                        <div className="sogl1">
                                            <span>Счет</span>
                                            <span>12 345 342,00</span>
                                        </div>
                                        <div className="line1 active"></div>
                                        <div className="sogl2"></div>
                                        <div className="line2 notapproved"></div>
                                        <div className="sogl3"></div>
                                        <div className="line3 rework"></div>
                                        <div className="sogl4"></div>
                                        <div className="line4"></div>
                                        <div className="sogl5 checked"></div>
                                        <div className="line5"></div>
                                        <div className="sogl6"></div>
                                    </div>
                                </div>
                            </div>


                        </div>




                        <div className='object-flexed col-2'>

                            <div className='object-flexed__first'>
                                <div className="object-flexed__title doflex">
                                   <div className='object-flexed__title-ooo'>
                                        <span className="object-flexed__title-compname">ООО ВЕГА</span>
                                        <span>(СС)</span>
                                   </div>
                                    <div className="object-flexed__title-sum">156 221,01</div>
                                </div>
                                <div className="object-flexed__head">
                                    Здравствуйте! Прошу согласовать цены закупки ЛКМ у МО-10 в Тамани, КП во влож.
                                    Сравнительная таблица с ценами ВМП и МО-10 прилагается. Объем указанный в КП
                                    соответствует уже полученному.
                                </div>
                            </div>

                            <div className='object-flexed__second'>

                                <div className="object-flexed__second-docs">
                                    <div className="object-flexed__second-name">Заявка №12345-567 от 12.12.2022</div>
                                    <div className="object-flexed__second-docslist">
                                        <div className="object-flexed__second-doc">документ из заявки</div>
                                        <div className="object-flexed__second-doc">документ из заявки</div>
                                        <div className="object-flexed__second-doc">документ из заявки</div>
                                    </div>
                                </div>
                            </div>

                        </div>



                        <div className="object-flexed col-3">


                            <div className="object-flexed__first doflex">
                                <div className="object-flexed__title" title="ИП Петров-Иванов Всеволод Петрович">ИП Петров-Иванов Всеволод Петрович</div>
                                <div className="object-flexed__title gray">№ 
                                <span className="object-flexed__obnum">2345</span> 
                                <span className="object-flexed__obdate">17.12.2022</span>
                                </div>

                                <div className="object-flexed__first-last">
                                    <img src="list.png" alt="Список" />
                                    <img src="document.png" alt="Документ" />
                                </div>

                                <div className="classok">OK</div>
                            </div>


                            

                            

                            <div className="object-flexed__second">
                                <div className="ob-sogl">
                                    <div><span>Начальник ПТО: </span><span>согласовано 15.12.2022 в
                                            18:40</span><br /><span>Без комментариев.</span></div>
                                    <div><span>Начальник ОС: </span><span>согласовано 15.12.2022 в
                                            18:40</span><br /><span>Комментрий рораору лррмшлву лрвортмолуврт</span>
                                    </div>
                                    <div><span>Директор компании: </span><span>согласовано 15.12.2022 в
                                            18:40</span><br /><span>Без комментариев.</span></div>
                                    <div><span>Главный бухгалтер: </span><span>согласовано 15.12.2022 в
                                            18:40</span><br /><span>Без комментариев.</span></div>
                                    <div><span>Учредитель компании: </span><span>согласовано 15.12.2022 в
                                            18:40</span><br /><span>Без комментариев.</span></div>
                                </div>
                            </div>
                        </div>

                    </div>







                    <div className="object-last">
                    <Line persent='65'/>
                    </div>



                    <div className="m-comments-here">
                        <h2>Комментарии</h2>
                        <div className="m-comments-here__list">
                            <div className="m-comments-here__item">
                                <img src="comment-image.png" alt="Автор" className="m-comments-here__item-image" />
                                <div className="m-comments-here__item-details">
                                    <div className="m-comments-here__item-details-name">Иван Иванович</div>
                                    <div className="m-comments-here__item-details-job">Начальник Снабжения</div>
                                    <div className="m-comments-here__item-details-text">Lorem ipsum dolor sit amet
                                        consectetur adipisicing elit. Quas eligendi natus fuga temporibus praesentium
                                        ipsam ipsum iure dolorum, eos earum labore error cum quaerat numquam fugit, est
                                        unde. Aut, illo.</div>
                                    <div className="m-comments-here__item-details--time">01:24</div>
                                </div>

                            </div>


                            <div className="m-comments-here__item">
                                <img src="comment-image.png" alt="Автор" className="m-comments-here__item-image" />
                                <div className="m-comments-here__item-details">
                                    <div className="m-comments-here__item-details-name">Иван Иванович</div>
                                    <div className="m-comments-here__item-details-job">Начальник Снабжения</div>
                                    <div className="m-comments-here__item-details-text">оршошпро рошлщшгрпрнот
                                        отрчгорышочшы тлошрршр оторшшщрощшощдлщлщо тогргтлтл иоргршгр отргоргщр
                                        оргорштр.</div>
                                    <div className="m-comments-here__item-details--time">02:24</div>
                                </div>

                            </div>
                        </div>
                        <div className="m-comments-here__add">
                            <textarea className="m-comments-here__add-text" name="add-a-comment"
                                placeholder="Введите комменатрий"></textarea>
                            <button className="m-comments-here__add-button" name="comment-submit">
                                <img src="arr-up.png" alt="Submit" />
                            </button>
                        </div>
                    </div>
                </div>


                <div className="column">
                    <div className="sogl_with_comment">Согласовано с комментарием</div>
                    <div className="send_to_work">Отправить на доработку</div>

                    <div className="sub-volume-button state">
                        <div className="sub-nav-item">Отказ</div>
                        <div className="sub-gradient-shadow"></div>
                    </div>


                    <Plan zatr="5985100" plan_b="11008714.5" sum_s="356220.65"/>
                </div>

            </div>





        </div>
    </div>
</div>
);
}
}

export default Sogl;