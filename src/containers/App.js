import { connect } from 'react-redux'
import AppComponent from '../components/App'


export const App = connect(state => ({isAuthenticated:state.bpgservices.isAuthenticated}), {})(AppComponent)
