import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions/actions.js'
import EditingForm from './EditingForm.jsx'

import TodoItem from './TodoItem'

const actionCreators = {
  removeTask: actions.removeTask,
  saveTask: actions.saveTask,
  editTask: actions.editTask,
}

const mapStateToProps = (state) => {
  const { tasks, filter } = state
  return { tasks, filter }
}

const filterTask = (tasks, { filterText, searchText }) => {
  return tasks
    .filter(({ completed }) => {
      switch (filterText) {
        case 'Done':
          return completed
        case 'Active':
          return !completed
        default:
          return true
      }
    })
    .filter(({ text }) => {
      const taskText = text.toLowerCase().trim()
      const term = searchText.toLowerCase().trim()
      return taskText.indexOf(term) > -1
    })
}

const TodoList = ({ tasks, filter, saveTask, editTask }) => {
  if (!tasks.length) {
    return null
  }
  return (
    <section>
      <ul style={{ padding: 0, margin: 0 }}>
        {filterTask(
          tasks,
          filter
        ).map(({ id, text, completed, editingStatus }) =>
          editingStatus ? (
            <EditingForm
              id={id}
              text={text}
              key={id}
              saveTask={saveTask}
              editTask={editTask}
            />
          ) : (
            <TodoItem id={id} text={text} completed={completed} key={id} />
          )
        )}
      </ul>
    </section>
  )
}
export default connect(mapStateToProps, actionCreators)(TodoList)
