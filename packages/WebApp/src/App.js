import React, {Component} from 'react';
import {
  Layout,
  Page,
  FooterHelp,
  Card,
  Link,
  Button,
  FormLayout,
  TextField,
  AccountConnection,
  ChoiceList,
  SettingToggle,
} from '@shopify/polaris';

import Profile from './components/Profile'
import Home from './components/Home'

export default class App extends Component {
    render(){
        switch (new URLSearchParams(window.location.search).get('id')) {
            case null:
                return(    
                    <Home />
                )
    
            default:
                return(
                    <Profile />
                )
                break;
        }
    }
}

