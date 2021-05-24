import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in and sign-up/sign-in and sign-up';
import Footer from './components/footer/footer';
import {auth} from './firebase/firebase.utils';


class App extends React.Component {
   constructor() {
     super();

     this.state = {
        currentUser: null
     }
   }

  unsubscribeFromAuth = null

  componentDidMount() {  //this one open the subscription
    this.unsubscribeFromAuth =  auth.onAuthStateChanged(user => {
      this.setState({currentUser:user});

      console.log(user);
    });
  }

  componentWillUnmount() { //close the subscription 
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
       <Header currentUser={this.state.currentUser} />
       <Switch>
         <Route exact path='/' component={HomePage} />
         <Route  path='/shop' component={ShopPage} />
         <Route  path='/signin' component={SignInAndSignUpPage} />
       </Switch>
      <Footer />
      </div>
    );
  }
  
}

export default App;
