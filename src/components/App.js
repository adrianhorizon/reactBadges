import React from 'react';
import Layout from './Layout';
import Home from '../pages/Home';
import Badges from '../pages/Badges';
import NotFound from '../pages/NotFound';
import BadgeNew from '../pages/BadgeNew';
import BadgeEdit from '../pages/BadgeEdit';
import BadgeDetailsContainer from '../pages/BadgeDetailsContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/badges" component={Badges} />
            <Route path="/badges/new" component={BadgeNew} />
            <Route path="/badges/:badgeId/edit" component={BadgeEdit} />
            <Route path="/badges/:badgeId" component={BadgeDetailsContainer} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
}

export default App;

