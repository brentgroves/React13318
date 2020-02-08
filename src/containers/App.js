import { connect } from 'react-redux'
import AppComponent from '../components/App'

import * as actions from '../actions'

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    Push: () => dispatch(actions.Push()),
  Logout: () => dispatch(actions.Logout())
  }
}

function mapStateToProps(state) {
  const { User } = state
  return {
    isAuthenticated: User.isAuthenticated,
    isAdmin: User.isAdmin,
    userName: User.userName,
    firstName: User.firstName,
    lastName: User.lastName

  }
}

export const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent)
