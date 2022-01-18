import React from 'react';
import Backlog from '../Backlog';
import Done from '../Done';
import Processing from '../Processing';
import Basket from '../Basket';

import './style.css';

export default function TaskBoard({ todos }) {
  return (
    <section className='taskboard'>
      <h2 className='visually-hidden'>Ваши задачи:</h2>
      <Backlog todos={todos} />
      <Processing />
      <Done />
      <Basket />
    </section>
  );
}
