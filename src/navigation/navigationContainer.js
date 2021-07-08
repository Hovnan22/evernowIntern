import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux';
import WelcomeRoot from './welcomeRoot'; 
import AppRoot from './appRoot';

const AppNavigationContainer = ({isLoggedIn}) => {
  return (
    <NavigationContainer>
      {isLoggedIn ? <AppRoot/> :<WelcomeRoot/> }
      
    </NavigationContainer>
  );
};

const mapStateToProps = ({ app: { isLoggedIn } }) => ({
  isLoggedIn,
});

export default connect(mapStateToProps)(AppNavigationContainer);
