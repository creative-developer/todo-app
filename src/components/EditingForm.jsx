import React from 'react'

import { TextField, Box, IconButton } from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  todosForm: {
    display: 'flex',
    backgroundColor: '#fafafa',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
    padding: '7.5px 16px',
  },
  submitBtn: {
    padding: '8px',
  },
}))

const EditingForm = ({ saveTask, editTask, id, text }) => {
  const classes = useStyles()
  const handleSubmit = (id) => (e) => {
    e.preventDefault()
    editTask({ id })
  }
  const handleEditText = (id) => ({ target: { value } }) => {
    saveTask({ id, value })
  }
  return (
    <form
      noValidate
      autoComplete="off"
      className={classes.todosForm}
      onSubmit={handleSubmit(id)}
    >
      <TextField
        id="outlined-basic"
        size="small"
        variant="outlined"
        classes={{ root: classes.root }}
        value={text}
        onChange={handleEditText(id)}
      />
      <Box ml={1}>
        <IconButton type="submit">
          <SaveIcon />
        </IconButton>
      </Box>
    </form>
  )
}
export default EditingForm
