import React, { Component } from 'react';
import Select from './Select/Select'
import './Form.css';




class Form extends Component {
  options = [
    {"id": 0, "caption": "Опция первая"},
    {"id": 1, "caption": "Другая опция"},
    {"id": 2, "caption": "Третья опция"},
    {"id": 3, "caption": "Еще один текст на тему"},
    {"id": 4, "caption": "Проба пера"},
    {"id": 5, "caption": "Результат введения пошлин на сахар и патоку"}
];
  render() {
    <Form class="formWrapper">
      <div class="z_order">
        <h2>Заявка на оплату счета</h2>
        <Select title="Объект" aka_placeholder="поиск" />

        <label>Сумма
          <input type="text" name="summ" /></label>

        <label>Реквизиты счета
          <input type="text" name="date_num" placeholder="дата и номер счета" /></label>


        <div class="formBlock">
          <label>Договор-основание
            <input type="text" name="dogovor_data" placeholder='реквизиты договора' /></label>
          <label for="fileUpload" class="customFileUpload"></label>
          <input id="fileUpload" type="file" name="dogovor" />
        </div>

        <label>Где, когда, кем было согласовано?
          <input type="text" name="agree" /></label>

        <label>Коментарий
          <textarea name="comment" rows="1"></textarea></label>

        <label>Дата платежа
          <input type="date" name="pay_date" placeholder="__.__.____" /></label>


        <div class="resWrap">
          <div class="res">Инициатор отдел - Снабжение - Иванов Иван Иванович</div>
        </div>


        <div class="buttonsBlock">
          <button>Предварительный просмотр</button>
          <input type="submit" name="sub" value="Отправить"/>
        </div>
      </div>
    </Form>
    return Form;
  }

}

export default Form;

