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

class Job extends React.Component {
  constructor(props) {
    super(props);

		autoBind(this);
    this.state = {
      expanded: null,
    };
  }

  renderJob() {
    let job = this.props.job;

    const cardStyle = {
      marginBottom: '1em',
    }
    const buttonStyle = {
      outer: {
        borderRadius: '20px',
      },
      inner: {
        borderRadius: '20px',
        overflow: 'hidden',
        height: '25px',
        lineHeight: '25px',
        textTransform: 'none',
      }
    }

    return job && (
      <Card key={job._id} style={cardStyle} zDepth={0}>
        <CardHeader
          title={job.title}
        />
        <CardMedia>
          <img src="/cardImage0.jpg" alt="" />
        </CardMedia>
        <CardText>
          {job.description}
        </CardText>
        <CardActions style={{textAlign: 'right'}}>
        </CardActions>
      </Card>
    );
  }

  render() {
    let job = this.props.job;

    const style = {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
    };

    if (!job) {
      return null;
    }

    return (
      <Grid style={style}>
        <header>
          <Link className="back" onClick={browserHistory.goBack}>Back</Link>
          <h3 className="page-header">
            {this.props.job.company}
          </h3>
        </header>

        {this.renderJob()}
      </Grid>
    );
  }
}

export default withTracker((props) => {
  Meteor.subscribe('jobs.list');
  console.log(props.params.id);

  return {
    job: Jobs.findOne({_id: props.params.id }),
  };
})(Job);
