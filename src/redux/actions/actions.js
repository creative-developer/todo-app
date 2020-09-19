import { createAction } from 'redux-actions'

// Task actions
export const addTask = createAction('TASK_ADD')
export const removeTask = createAction('REMOVE_TASK')
export const updateTaskStatus = createAction('UPDATE_TASK_STATUS')
export const editTask = createAction('EDIT_TASK')
export const saveTask = createAction('EDIT_TASK_TEXT')
// Filter actions
export const filterTasks = createAction('FILTER_TASKS')
// Text actions
export const updateText = createAction('UPDATE_TEXT')
export const removeText = createAction('REMOVE_TEXT')
// Search actions
export const updateSearchText = createAction('UPDATE_SEARCH_TEXT')
