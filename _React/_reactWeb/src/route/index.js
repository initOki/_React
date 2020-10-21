import React from 'react'
// import { connect } from 'react-redux'
import { Router, Route, Switch } from 'react-router-dom'
import history from './history'
// import ScrollToTop from './ScrollToTop'

import Main from '../component/Main'

const Routes = ({ auth }) => {
  return (
    <Router
      history={history}
    >
      {/*<ScrollToTop />*/}
      <Switch>

        <Route exact path='/' component={Main} />

      </Switch>

    </Router>

  )
}

// const mapStateToProps = state => ({
//   auth: state.auth,
// })
//
// export default connect(
//   mapStateToProps,
// )(Routes)

export default Routes