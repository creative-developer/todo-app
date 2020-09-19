import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import * as actions from '../actions/actions.js'

const defaultTasks = [
  {
    id: 'task_id_1',
    text: 'Create Todo App',
    completed: false,
    editingStatus: false,
  },
  {
    id: 'task_id_2',
    text: 'Create React App',
    completed: false,
    editingStatus: false,
  },
  {
    id: 'task_id_3',
    text: 'Learn the React Js library',
    completed: false,
    editingStatus: false,
  },
]

const tasks = handleActions(
  {
    [actions.addTask]: (state, { payload: { task } }) => [...state, task],
    [actions.removeTask]: (state, { payload: { id } }) =>
      state.filter((task) => task.id !== id),
    [actions.updateTaskStatus]: (state, { payload: { id } }) => {
      return state.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    },
    [actions.editTask]: (state, { payload: { id } }) => {
      return state.map((task) =>
        task.id === id ? { ...task, editingStatus: !task.editingStatus } : task
      )
    },
    [actions.saveTask]: (state, { payload: { id, value } }) => {
      return state.map((task) =>
        task.id === id ? { ...task, text: value } : task
      )
    },
  },
  defaultTasks
)

const text = handleActions(
  {
    [actions.updateText]: (state, { payload: { text } }) => text,
    [actions.removeText]: () => '',
  },
  ''
)

const filter = handleActions(
  {
    [actions.filterTasks]: (state, { payload: { value } }) => ({
      ...state,
      filterText: value,
    }),
    [actions.updateSearchText]: (state, { payload: { text } }) => ({
      ...state,
      searchText: text,
    }),
  },
  {
    filterText: 'All',
    searchText: '',
  }
)

export default combineReducers({
  tasks,
  text,
  filter,
})
