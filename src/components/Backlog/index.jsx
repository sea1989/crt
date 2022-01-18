import React from 'react';
import TaskItem from '../Task-item';
import './style.css';

export default function Backlog({ todos }) {
  console.log(todos);

  return (
    <article className='taskboard__group taskboard__group--backlog'>
      <h3 className='taskboard__group-heading taskboard__group-heading--backlog'>
        Бэклог
      </h3>
      <div className='taskboard__list'>
        {todos.map((todo) => {
          return <TaskItem todo={todo} key={todo.id} />;
        })}
      </div>
    </article>
  );
}
