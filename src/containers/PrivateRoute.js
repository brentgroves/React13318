import { connect } from 'react-redux'
import PrivateRouteComponent from '../components/PrivateRoute'

export const PrivateRoute = connect((state) => ({isAuthenticated:state.bpgservices.app.authentication.authenticated}), {})(PrivateRouteComponent)

/*

const mapStateToProps = (state) => {
    return {
        servers: state.servers
    }
}
*/
/*
const mapStateToProps = (state, ownProps) => ({
  bpgservices: state.bpgservices,
  ...ownProps
})

export const PrivateRoute = connect(
    mapStateToProps,
    {}
)(PrivateRouteComponent)

*/
/*
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchPressed: (e) => {
            dispatch(submitSearch(navigator)) // This is where I want to use the injected navigator
        }
    }
}

const SearchViewContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchView)

export default SearchViewContainer
*/
