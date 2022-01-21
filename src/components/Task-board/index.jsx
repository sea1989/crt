import React from 'react';
import Backlog from '../Backlog';
import Done from '../Done';
import Processing from '../Processing';
import Basket from '../Basket';
import TaskBoardGroup from '../Taskboard-group';

import './style.css';

export default function TaskBoard({ todos }) {
  const status = {
    BACKLOG: `backlog`,
    PROCESSING: `processing`,
    DONE: `done`,
    BASKET: `basket`,
  };

  const statusLabel = {
    backlog: `Бэклог`,
    processing: `В процессе`,
    done: `Готово`,
    basket: `Корзина`,
  };

  const title = statusLabel[status];

  return (
    <>
      {/* <section className='taskboard'>
        <h2 className='visually-hidden'>Ваши задачи:</h2>
        <Backlog todos={todos} />
        <Processing />
        <Done />
        <Basket />
      </section> */}

      <section class='taskboard'>
        <h2 class='visually-hidden'>Ваши задачи:</h2>
        {Object.values(status).map((element) => {
          return (
            <TaskBoardGroup
              classStatus={element}
              title={statusLabel[element]}
              todos={todos}
            />
          );
        })}
      </section>
    </>
  );
}
