import { connect } from 'react-redux'
import DashboardComponent from '../components/Dashboard'


export const Dashboard = connect(state => ({isAdmin:state.User.isAdmin}), {})(DashboardComponent)
