import React from "react";
import Todo from "views/todo-redux/Todo";
import VisibilityFilter from "views/todo-redux/VisibilityFilter";
import { VisibilityFilters } from "common/enums";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setVisibilityFilter } from "actions/visibilityFilter";
import { addTodo, toggleTodo } from "actions/todos";

class TodoPageRedux extends React.Component {
  constructor(props) {
    super(props);

    this.handleTodoClick = this.handleTodoClick.bind(this);
    this.handleFilterClick = this.handleFilterClick.bind(this);
    this.handleAddToList = this.handleAddToList.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      todo: "",
    };
  }

  handleTodoClick(id) {
    // this.props.dispatch will be available if we didn't use mapDispatchToProps
    // this.props.dispatch(toggleTodo(id))
    this.props.toggleTodo(id);
  }

  handleFilterClick(filter) {
    // this.props.dispatch(setVisibilityFilter(filter))
    this.props.setVisibilityFilter(filter);
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

  handleAddToList() {
    // this.props.dispatch(addTodo(this.state.todo))
    if (!this.state.todo) return;
    this.state.todo && this.props.addTodo(this.state.todo);
    this.setState({ todo: "" });
  }

  handleChange(e) {
    this.setState({ todo: e.target.value });
  }

  renderBasedOnFilter() {
    const filter = this.props.visibilityFilter;
    return this.props.todos.map(todo => {
      if (filter === VisibilityFilters.SHOW_COMPLETED)
        return todo && todo.completed && this.renderTodo(todo);
      else if (filter === VisibilityFilters.SHOW_ALL) return todo && this.renderTodo(todo);
      else return todo && !todo.completed && this.renderTodo(todo);
    });
  }

  render() {
    console.log("this.props", this.props);
    return (
      <>
        <h3>Todo Redux</h3>
        <input type="text" onChange={this.handleChange} value={this.state.todo} />
        <button onClick={this.handleAddToList}>Add</button>
        {this.renderBasedOnFilter()}
        <hr />
        <VisibilityFilter filters={VisibilityFilters} onClick={this.handleFilterClick} />
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
    visibilityFilter: state.visibilityFilter,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleTodo, setVisibilityFilter, addTodo }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoPageRedux);
