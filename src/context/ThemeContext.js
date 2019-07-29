import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';

const defaultTheme = {
  width: window.innerWidth,
};

const ThemeContext = createContext(defaultTheme);

export class ThemeProvider extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  state = {
    width: window.innerWidth,
  };

  componentDidMount() {
    window.addEventListener('resize', this.setWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setWidth);
  }

  setWidth = () => {
    this.setState({
      width: window.innerWidth,
    });
  };

  render() {
    const { children } = this.props;
    const { width } = this.state;

    return (
      <ThemeContext.Provider value={{ width }}>
        {children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContext;
