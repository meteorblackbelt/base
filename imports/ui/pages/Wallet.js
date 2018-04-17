import React from 'react';
import { browserHistory, Link } from 'react-router';
import { Grid } from 'react-flexbox-grid';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import Jobs from '../../api/jobs/jobs.js';
import { withTracker } from 'meteor/react-meteor-data';
import autoBind from 'auto-bind';
import './Wallet.styl';

class Wallet extends React.Component {
  constructor(props) {
    super(props);

		autoBind(this);
    this.state = {
      funds: "755",
    };
  }

  render() {
    const style = {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
    };

    return (
      <div id="WalletPage" style={style}>
        <header>
          {this.state.funds} WRK
        </header>

        <h3 className="date">Today</h3>

        <section>
          <div className="card funds-in">
            25 to refer Samuel to Shopify
          </div>

          <div className="card funds-out">
            150 completing Stack Adapt challenge 2
          </div>

          <div className="card funds-in">
            25 to refer Michelle to Slack
          </div>
        </section>

        <h3 className="date">Yesterday</h3>

        <section>
          <div className="card funds-in">
            25 to refer Samuel to Shopify
          </div>

          <div className="card funds-out">
            150 completing Stack Adapt challenge 2
          </div>

          <div className="card funds-in">
            25 to refer Michelle to Slack
          </div>
        </section>
      </div>
    );
  }
}

export default Wallet;
