import React from "react";
import Todo from "views/todo-normal/Todo";
import VisibilityFilter from "views/todo-normal/VisibilityFilter";

const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE",
};

class TodoPageNormal extends React.Component {
  constructor(props) {
    super(props);

    this.handleTodoClick = this.handleTodoClick.bind(this);
    this.handleFilterClick = this.handleFilterClick.bind(this);
    this.handleAddToList = this.handleAddToList.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      todos: [],
      visibilityFilter: VisibilityFilters.SHOW_ALL,
      todo: "",
    };
  }

  handleTodoClick(id) {
    this.setState(state => {
      return {
        todos: state.todos.map(todo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo,
        ),
      };
    });
  }

  handleAddToList() {
    const todo = {
      id: this.state.todos.length,
      text: this.state.todo,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, todo], todo: "" });
  }

  handleChange(e) {
    this.setState({ todo: e.target.value });
  }

  handleFilterClick(filter) {
    this.setState({ visibilityFilter: filter });
  }

  renderTodo(todo) {
    return (
      <Todo
        key={todo.id}
        id={todo.id}
        text={todo.text}
        completed={todo.completed}
        onClick={this.handleTodoClick}
      />
    );
  }

  renderBasedOnFilter() {
    const filter = this.state.visibilityFilter;
    return this.state.todos.map(todo => {
      if (filter === VisibilityFilters.SHOW_COMPLETED)
        return todo.completed && this.renderTodo(todo);
      else if (filter === VisibilityFilters.SHOW_ALL) return this.renderTodo(todo);
      else return !todo.completed && this.renderTodo(todo);
    });
  }

  render() {
    return (
      <>
        <h3>Todo Normal</h3>
        <input type="text" onChange={this.handleChange} value={this.state.todo} />
        <button onClick={this.handleAddToList}>Add</button>
        {this.renderBasedOnFilter()}
        <hr />
        <VisibilityFilter filters={VisibilityFilters} onClick={this.handleFilterClick} />
      </>
    );
  }
}

export default TodoPageNormal;
