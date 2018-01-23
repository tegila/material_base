import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import List, { ListItem, ListItemText } from 'material-ui/List';

import MercadoLivre from 'mercadolivre';

import CustomAppBar from './CustomAppBar';
import config from '../config';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 0,
  },
  paper: {
    marginTop: theme.spacing.unit * 0,
    marginLeft: theme.spacing.unit * -1,
    marginRight: theme.spacing.unit * -1,
  },
});

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      value: 0
    };
  }

  componentDidMount() {
    let meli = {};
    meli = MercadoLivre(config.meli.client_id, config.meli.client_secret);
    meli.Orders.ready_to_ship(74184676, (order_list) => {
      console.log(order_list);
      this.setState({ orders: order_list });
    });
  }

  _buid_order_list () {
    return this.state.orders.map((object) => {
      return (
        <ListItem button key={object.id}>
          <i className="material-icons" style={{ fontSize: 40, color: 'grey' }}>stop</i>
          <ListItemText
            key={object.id}
            primary={object.buyer.nickname}
            secondary={`${object.shipping.receiver_address.city.name} - 
              ${object.shipping.receiver_address.state.name}`}
          />
        </ListItem>);
    });
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render () {
    return (
      <Paper className={this.props.classes.root}>
        <CustomAppBar>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Importar" />
            <Tab label="Ajustar" />
            <Tab label="Finalizar" />
          </Tabs>
        </CustomAppBar>
        <List>
          { this._buid_order_list() }
        </List>
      </Paper>
    );
  }
}

Orders.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Orders);
