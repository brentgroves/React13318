import { connect } from 'react-redux'
import SignUpComponent from '../components/SignUp'


export const SignUp = connect(state => ({isAdmin:state.bpgservices.isAdmin,isAuthenticated:state.bpgservices.app.authentication.authenticated}), {})(SignUpComponent)
