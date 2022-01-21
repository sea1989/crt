import React from 'react';
import TaskComponent from '../Task-component';

import './style.css';

export default class TaskBoardGroup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sortTasksObject: { backlog: [], processing: [], done: [], basket: [] },
    };

    this.handleClick = this.handleClick.bind(this);
    this._tasks = this.props.todos;
  }

  componentDidMount() {
    this.setState({
      sortTasksObject: this.props.classStatus
        .split()
        .push(this.getByStatus(this.props.classStatus)),
    });
  }

  getByStatus(status) {
    return this._tasks.filter((task) => task.status === status);
  }

  handleClick() {
    this.props.onChange(this.props.name, this.props.id);
  }

  render() {
    return (
      <article
        className={`taskboard__group taskboard__group--${this.props.classStatus}`}
      >
        <h3
          className={`taskboard__group-heading taskboard__group-heading--${this.props.classStatus}`}
        >
          {this.props.title}
        </h3>
        <div class='taskboard__list'>
          {this._tasks
            .filter((task) => task.status === this.props.classStatus)
            .map((element) => {
              return (
                <TaskComponent
                  classStatus={element.status}
                  title={element.title}
                />
              );
            })}
        </div>
      </article>
    );
  }
}
