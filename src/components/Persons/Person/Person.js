import React, { Component } from 'react';

import classes from './Person.css';

class Person extends Component {
  render() {
    console.log('[Person.js] rendering...');
    return (
      <div className={classes.Person}>
        Todo...
      </div>
    );
  }
}

export default Person;
