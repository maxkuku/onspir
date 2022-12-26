import React, { Component } from 'react';
import '../Form.css';
import chevron from '../chevron.svg'




class Select extends Component {
  render() {
        <>
        <label for="standard-select">{this.props.title}</label>
        <div class="select">
          <div class="select_vis">{this.props.aka_placeholder}<span class=""><img src="{chevron}" width="15" height="7" alt="{this.props.aka_placeholder}"/></span></div>
          <div class="select_hid">
            <div class="nopadding10"><input type="search" name="inner_search" placeholder="{this.props.aka_placeholder}"></input></div>
            <div>Опция</div>
            <div>Опция</div>
            <div>Опция</div>
            <div>Опция</div>
            <div>Опция</div>
            <div>Опция</div>
            <div>Опция</div>
          </div>
        </div>
        </>
        return Select;
    }
  
  }
  
  export default Select;