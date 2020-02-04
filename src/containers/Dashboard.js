import { connect } from 'react-redux'
import DashboardComponent from '../components/Dashboard'
import { push } from 'connected-react-router'


export const Dashboard = connect(state => ({isAuthenticated:state.User.isAuthenticated,isAdmin:state.User.isAdmin}), {push})(DashboardComponent)
