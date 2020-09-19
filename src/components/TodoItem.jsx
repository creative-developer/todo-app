import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions/actions.js'

import { IconButton, FormControlLabel, Checkbox, Box } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  todosItem: {
    listStyleType: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '1rem',
    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    transition: 'all 0.2s',
    userSelect: 'none',
    padding: '0.5em 1em',
  },
  todosItemCompleted: {
    '& *': {
      color: 'lightgray',
    },
    '& span': {
      textDecoration: 'line-through',
    },
  },
}))

const actionCreators = {
  removeTask: actions.removeTask,
  updateTaskStatus: actions.updateTaskStatus,
  editTask: actions.editTask,
}

const mapStateToProps = (state) => {
  const { tasks } = state
  return { tasks }
}

const TodoItem = (props) => {
  const { id, text, completed, removeTask, updateTaskStatus, editTask } = props
  const classes = useStyles()

  const handleRemoveTask = (id) => (e) => {
    e.preventDefault()
    removeTask({ id })
  }

  const handleChangeStatus = (id) => (e) => {
    updateTaskStatus({ id })
  }

  const handleEditTask = (id) => (e) => {
    editTask({ id })
  }

  const classNames = `${classes.todosItem} ${
    completed ? classes.todosItemCompleted : ''
  }`.trim()

  return (
    <li className={classNames}>
      <FormControlLabel
        value="completed"
        control={<Checkbox color="default" checked={completed} />}
        label={text}
        labelPlacement="end"
        onChange={handleChangeStatus(id)}
      />
      <Box>
        <IconButton onClick={handleEditTask(id)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={handleRemoveTask(id)}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </li>
  )
}

export default connect(mapStateToProps, actionCreators)(TodoItem)
