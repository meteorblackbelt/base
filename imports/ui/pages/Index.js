import React from 'react';
import { browserHistory } from 'react-router';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import Jobs from '../../api/jobs/jobs.js';
import { withTracker } from 'meteor/react-meteor-data';
import autoBind from 'auto-bind';

class Index extends React.Component {
  constructor(props) {
    super(props);
		autoBind(this);
    this.state = {
      expanded: null,
    };
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };

  handleApply = (job, event) => {
    console.log(job)
    browserHistory.push(`/jobs/${job._id}`);
  };

  renderJobs() {
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

    return this.props.jobs.map((job) => (
      <Card key={job._id} style={cardStyle} >
        <CardHeader
          title={job.title}
          subtitle={[job.company, "posted this job"].join(' ')}
          avatar={<i className="fa fa-building"></i>}
        />
        <CardText>
          {job.description}
        </CardText>
        <CardActions style={{textAlign: 'right'}}>
          <RaisedButton onClick={this.handleApply.bind(this, job)} style={buttonStyle.outer} buttonStyle={buttonStyle.inner} secondary={true} label="Apply / Refer" />
        </CardActions>
      </Card>
    ));
  }

  render() {
    const style = {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
    };

    return (
      <div id="IndexPage" className="job-list" style={style}>
        {this.renderJobs()}
      </div>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('jobs.list');

  return {
    jobs: Jobs.find({}, { sort: { createdAt: -1 } }).fetch(),
  };
})(Index);
