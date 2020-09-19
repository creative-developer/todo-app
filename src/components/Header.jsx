import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions/actions.js'

import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import { fade, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    marginRight: theme.spacing(3),
  },
  AppBar: {
    marginBottom: 50,
  },
  search: {
    position: 'relative',
    flexGrow: 1,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}))

const actionCreators = {
  updateSearchText: actions.updateSearchText,
}

const mapStateToProps = (state) => {
  const {
    filter: { searchText },
  } = state
  return { searchText }
}

const Header = ({ searchText, updateSearchText }) => {
  const classes = useStyles()
  const handleSearchChange = ({ target: { value } }) => {
    updateSearchText({ text: value })
  }
  return (
    <AppBar
      position="relative"
      className="AppBar"
      classes={{ root: classes.AppBar }}
    >
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Typography variant="h4" classes={{ root: classes.title }}>
            Todo List
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleSearchChange}
              value={searchText}
            />
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default connect(mapStateToProps, actionCreators)(Header)
