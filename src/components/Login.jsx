import React from 'react';
import { Button } from 'semantic-ui-react';
import { inject, observer } from 'mobx-react';

@inject('sessionStore')
@observer
export default class Login extends React.Component {
  componentWillMount() {
    this.props.sessionStore.initClient();
  }
  render() {
    const store = this.props.sessionStore;
    return <Button onClick={() => store.handleAuthClick()}>login</Button>;
  }
}
