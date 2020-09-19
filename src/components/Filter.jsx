import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions/actions.js'

import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const actionCreators = {
  filterTasks: actions.filterTasks,
}

const mapStateToProps = (state) => {
  const {
    filter: { filterText },
  } = state
  return { filterText }
}

const Filter = ({ filterText, filterTasks }) => {
  const [value, setValue] = React.useState(filterText)

  const handleChange = (event, newValue) => {
    setValue(newValue)
    filterTasks({ value: newValue })
  }

  return (
    <Paper square>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        aria-label="disabled tabs example"
        onChange={handleChange}
      >
        <Tab value="All" label="All" />
        <Tab value="Active" label="Active" />
        <Tab value="Done" label="Done" />
      </Tabs>
    </Paper>
  )
}
export default connect(mapStateToProps, actionCreators)(Filter)
