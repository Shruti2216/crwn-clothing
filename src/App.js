import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in and sign-up/sign-in and sign-up';
import Footer from './components/footer/footer';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';


class App extends React.Component {
   constructor() {
     super();

     this.state = {
        currentUser: null
     }
   }

  unsubscribeFromAuth = null

  componentDidMount() {  //this one open the subscription
    this.unsubscribeFromAuth =  auth.onAuthStateChanged(async userAuth => {
      //this.setState({currentUser:user});
      // createUserProfileDOcument(user);
     // console.log(user);

     /* In this we check the user is exists or not  */
     if(userAuth) {
       const userRef = await createUserProfileDocument(userAuth);

       userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser:{
              id: snapShot.id,
              ...snapShot.data() //this gives the all data from snapshot
            }
          });
       });
      // console.log(this.state);
     }

      this.setState({currentUser:userAuth});
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
