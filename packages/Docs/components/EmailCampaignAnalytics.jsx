import React from "react";
import { Fetch } from 'react-request';

export default class EmailCampaignAnalytics extends React.Component {
    render() {
      return (
        <Fetch url="https://qr-clothing.herokuapp.com/subscriberAnalytics">
        {({ fetching, failed, data }) => {
          if (fetching) {
            return <div>Loading data...</div>;
          }

          if (failed) {
            return <div>The request did not succeed.</div>;
          }

          if (data) {
            return (
              <table>
              <caption>Campaign Analytics</caption>
              <thead>
                 <tr>
                    <th>Data Label</th>
                    <th>Data Value</th>
                 </tr>
              </thead>
              <tbody>
                 <tr>
                    <th>Email Subscribers</th>
                    <td>{data.numberOfSubscribers}</td>
                 </tr>
              </tbody>
           </table>
            );
          }

          return <p>oops</p>;
        }}
      </Fetch>
      )
    }
  }