import React from 'react';
import { browserHistory } from 'react-router';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
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

  render() {
    const style = {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
    };
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

    return (
      <div style={style}>
        <Card style={cardStyle} expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
          <CardHeader
            title="Sr. Front End Developer"
            subtitle="Shopify posted this job"
            avatar={<i className="fa fa-building"></i>}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText expandable={true}>
            Shopify is looking for an experienced front end developer to lead
            our continued partnership with Coinbase and develop new consumer facing
            crypto systems.
          </CardText>
          <CardActions style={{textAlign: 'right'}}>
            <RaisedButton style={buttonStyle.outer} buttonStyle={buttonStyle.inner} secondary={true} label="Refer" />
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default Index;
