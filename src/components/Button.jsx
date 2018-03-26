import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { inject, observer } from 'mobx-react';

@inject('testStore')
@observer
class ButtonExampleEmphasis extends Component {
  render() {
    const store = this.props.testStore;
    return (
      <div>
        <Button
          primary
          onClick={() => {
            store.showMessage();
          }}
        >
          Primary
        </Button>
        <Button secondary>Secondary</Button>
      </div>
    );
  }
}

export default ButtonExampleEmphasis;
