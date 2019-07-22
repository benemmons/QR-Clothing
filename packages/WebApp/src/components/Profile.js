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

export default class Profile extends Component {
    render(){
        return(      
          <Page
          title={"Profie #" + this.props.id}
          breadcrumbs={[{
            content: 'Home',
            url: '/'  // host webapp on subdomain then have this link to root domain to bridge react-shopify gap
          }]}
          primaryAction={{content: 'New Response'}}
        >
        </Page>
)
    }
}

