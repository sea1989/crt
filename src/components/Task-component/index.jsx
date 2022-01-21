import React from 'react';
import './style.css';

export default class TaskComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onChange(this.props.name, this.props.id);
  }

  render() {
    return (
      <div  className={`taskboard__item task task--${this.props.classStatus}`}
      >
        <div class='task__body'>
          <p class='task__view'>{this.props.title}</p>
          <input
            class='task__input'
            type='text'
            value='Название первой задачи'
          />
        </div>
        <button class='task__edit' type='button' aria-label='Изменить'></button>
      </div>
    );
  }
}
