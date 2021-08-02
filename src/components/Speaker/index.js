import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import speakerOn from '../../assets/svg/speaker-on.svg';
import speakerOff from '../../assets/svg/speaker-off.svg';

// Speaker, keep self state for switch button icon
export default class Speaker extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  };

  constructor(...args) {
    super(...args);

    this.state = {
      speaker: speakerOn
    };
  }

  handleClick = () => {
    const { speaker } = this.state;
    const prevStatus = speaker === speakerOn;
    this.setState({
      speaker: prevStatus ? speakerOff : speakerOn
    });
    this.props.onClick(!prevStatus);
  };

  render() {
    const { speaker } = this.state;
    return (
      <Button onClick={this.handleClick}>
        <img src={speaker} alt="speaker" />
      </Button>
    );
  }
}
