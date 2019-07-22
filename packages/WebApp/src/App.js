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
    constructor(props) {
        super(props);
        this.profileID = new URLSearchParams(window.location.search).get('id')
    }

    render(){
        switch (this.profileID) {
            case null:
                return(    
                    <Home />
                )
    
            default:
                return(
                    <Profile id={this.profileID} />
                )
                break;
        }
    }
}

