import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Divider, Button, Input, Icon } from 'semantic-ui-react';

import { inject, observer } from 'mobx-react';

@inject('listBarStore')
@observer
export default class NavMenu extends Component {
  state = { activeItem: 'home' };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const store = this.props.listBarStore;

    const { activeItem } = this.state;

    return (
      <Menu inverted vertical stackable fixed="left">
        {/* <NavLink to="/home">
          <Menu.Item>
            <img src="../recourses/logo.png" alt="" />
          </Menu.Item>
        </NavLink> */}
        <br />
        {/* <NavLink to="/home">
          <Button primary>Add list</Button>
        </NavLink>
        <Divider /> */}

        <Button
          primary
          onClick={() => {
            //store.addNewList('newOne');
            store.toggleShowAddNewListItemVisibility();
          }}
        >
          Add list
        </Button>

        <Divider />

        <NavLink to="/home">
          <Menu.Item
            name="home"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          >
            <Menu.Header>Home</Menu.Header>
          </Menu.Item>
        </NavLink>

        {/* */}
        {store.showAddNewListLabel ? (
          <div>
            <Divider />
            <Input
              inverted
              transparent
              icon={
                <Icon
                  name="add"
                  onClick={() => store.addNewList()}
                  /*inverted circular*/ link
                />
              }
              iconPosition="right"
              placeholder="set label for a new list"
              onChange={event => this.handleAddNewListLabelChange(event)}
            />
          </div>
        ) : null}
        <Divider />

        {store.listItems.map(item => (
          <NavLink to={item}>
            <Menu.Item
              name={item}
              active={activeItem === item}
              onClick={this.handleItemClick}
            />
          </NavLink>
        ))}

        {/* <NavLink to="authors">
          <Menu.Item
            name="authors"
            active={activeItem === 'authors'}
            onClick={this.handleItemClick}
          />
        </NavLink>

        <NavLink to="projects">
          <Menu.Item
            name="projects"
            active={activeItem === 'projects'}
            onClick={this.handleItemClick}
          />
        </NavLink> */}
      </Menu>
    );
  }

  handleAddNewListLabelChange(event) {
    this.props.listBarStore.addNewListInput = event.target.value;
    //console.log(this.props.listBarStore.addNewListInput);
  }
}
