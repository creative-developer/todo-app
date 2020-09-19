import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions/actions.js'

import { Button, TextField, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { uniqueId } from 'lodash'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  todosForm: {
    display: 'flex',
    backgroundColor: '#fafafa',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
    padding: '10px 16px',
  },
  submitBtn: {
    padding: '8px',
  },
}))

const actionCreators = {
  addTask: actions.addTask,
  updateText: actions.updateText,
  removeText: actions.removeText,
}

const mapStateToProps = (state) => {
  const { tasks, text } = state
  return { tasks, text }
}

const Form = ({ addTask, updateText, removeText, text }) => {
  const classes = useStyles()
  const handleSubmit = (e) => {
    e.preventDefault()
    if (text !== '') {
      const newTask = {
        id: uniqueId('task_'),
        text,
        completed: false,
        editingStatus: false,
      }
      addTask({ task: newTask })
      removeText()
    }
  }

  const handleChange = ({ target: { value } }) => {
    updateText({ text: value })
  }

  return (
    <form
      noValidate
      autoComplete="off"
      className={classes.todosForm}
      onSubmit={handleSubmit}
    >
      <TextField
        id="outlined-basic"
        size="small"
        variant="outlined"
        classes={{ root: classes.root }}
        value={text}
        onChange={handleChange}
      />
      <Box ml={1}>
        <Button type="submit" classes={{ root: classes.submitBtn }}>
          Add task
        </Button>
      </Box>
    </form>
  )
}

export default connect(mapStateToProps, actionCreators)(Form)
