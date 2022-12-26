

import React from 'react';

function Plan(props) {

    const zatr = props.zatr;
    const plan_b = props.plan_b;
    const sum_s = props.sum_s;


    const percent = zatr / plan_b * 100;
    const sub_percent = sum_s / plan_b * 100;

 

  return <div className="purple-grid">
  <div className="purple">
      <div style={{height: `${sub_percent}%`,  bottom: `${percent}%`}}></div>
      <div style={{height: `${percent}%`}}></div>
  </div>
  <div className="purple-side">
      <div>План бюджета на объект по статье затрат</div>
      <div>{new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(plan_b)}</div>
      <div className="ob-cost">
          <div className="lighter" style={{marginTop: '37px'}}>Сумма счета</div>
          <div className="lighter">{new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(sum_s)}</div>
      </div>
      <div style={{marginTop: '14px'}}>Освоено по статье затрат</div>
      <div style={{marginBottom: '28px'}}>{new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(zatr)}</div>
  </div>
</div>;
}

export default Plan;