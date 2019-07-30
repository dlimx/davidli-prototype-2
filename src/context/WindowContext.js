import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';

const defaultWindow = {
  width: 0,
  scrollY: 0,
};

const WindowContext = createContext(defaultWindow);

export class WindowProvider extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  state = {
    width: window.innerWidth,
    scrollY: 0,
  };

  componentDidMount() {
    window.addEventListener('resize', this.setWidth);
    window.addEventListener('scroll', this.setScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setWidth);
    window.removeEventListener('scroll', this.setScroll);
  }

  setWidth = () => {
    this.setState({
      width: window.innerWidth,
    });
  };

  setScroll = () => {
    this.setState({
      scrollY: window.pageYOffset,
    });
  };

  render() {
    const { children } = this.props;
    const { width, scrollY } = this.state;

    return (
      <WindowContext.Provider value={{ width, scrollY }}>
        {children}
      </WindowContext.Provider>
    );
  }
}

export default WindowContext;
