import React, { useReducer } from 'react';
import { Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from './components/Home';
import About from './components/About';
import Accounts from './components/Accounts';
import Balances from './components/Balances';
import Beneficiaries from './components/Beneficiaries';
import DirectDebits from './components/DirectDebits';
import StandingOrders from './components/StandingOrders';
import Products from './components/Products';
import Offers from './components/Offers';
import ScheduledPayments from './components/ScheduledPayments';
import Parties from './components/Parties';
import Transactions from './components/Transactions';
import Statements from './components/Statements';
import Items from './components/Items';
import ResponsiveDrawer from './components/ResponsiveDrawer';
import Form from './components/Form';
import { AppContext, initialState, reducer } from './hooks/reducer';

export const history = createBrowserHistory();

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{dispatch, state}}>  
          <ResponsiveDrawer>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/accounts" component={Accounts} />
              <Route exact path="/balances" component={Balances} />
              <Route exact path="/transactions" component={Transactions} />
              <Route exact path="/beneficiaries" component={Beneficiaries} />
              <Route exact path="/directdebits" component={DirectDebits} />
              <Route exact path="/standingorders" component={StandingOrders} />
              <Route exact path="/products" component={Products} />
              <Route exact path="/offers" component={Offers} />
              <Route exact path="/parties" component={Parties} />
              <Route exact path="/scheduledpayments" component={ScheduledPayments} />
              <Route exact path="/statements" component={Statements} />
              <Route exact path="/items" component={Items} />
              <Route exact path="/form/:formId" component={Form} />
            </Switch>
          </ResponsiveDrawer>
        </AppContext.Provider>  
    );
}

export default App;
