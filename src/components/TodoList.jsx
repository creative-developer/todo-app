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

const TodoList = ({ tasks, filter, saveTask, editTask }) => {
  if (!tasks.length) {
    return null
  }
  return (
    <section>
      <ul style={{ padding: 0, margin: 0 }}>
        {filterTasks(tasks, filter).map((tasks) => {
          return tasks.editingStatus
            ? formView(tasks, { saveTask, editTask })
            : todoItemView(tasks)
        })}
      </ul>
    </section>
  )
}

const filterTasks = (tasks, { filterText, searchText }) => {
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

const formView = ({ id, text }, { saveTask, editTask }) => {
  return (
    <EditingForm
      id={id}
      text={text}
      key={id}
      saveTask={saveTask}
      editTask={editTask}
    />
  )
}

const todoItemView = ({ id, text, completed }) => {
  return <TodoItem id={id} text={text} completed={completed} key={id} />
}

export default connect(mapStateToProps, actionCreators)(TodoList)
