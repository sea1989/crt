import React from 'react';
import './style.css';

export default function TaskItem({ todo }) {
  return (
    <div key={todo.id} className='taskboard__item task'>
      <div className='task__body'>
        <p className='task__view'>{todo.task}</p>
        <input className='task__input' type='text' value='Название первой задачи' />
      </div>
      <button className='task__edit' type='button' aria-label='Изменить'></button>
    </div>
  );
}
