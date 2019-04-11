import React from 'react';
import Layout from './components/Hoc/layout';
import { Switch, Route }  from 'react-router-dom';

import Home from './components/home';

const Routes = (props) => {
  return(
    <Layout>
        <Switch>

            <Route {...props}  path="/" exact component={Home}/>

        </Switch>
    </Layout>
  )
}

export default Routes;
