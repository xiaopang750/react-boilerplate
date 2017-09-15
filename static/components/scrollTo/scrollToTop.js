import {Component} from 'react';
import {setTop} from './util';

class ScrollToTop extends Component {
  componentDidMount() {
    setTop(0);
  }
  render() {
    return this.props.children;
  }
}

export default ScrollToTop;
