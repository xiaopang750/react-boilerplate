import {Component} from 'react';
import {getTop, setTop} from './util';

let nowScrollTop = 0;

class RestoredScroll extends Component {
  componentDidMount() {
    setTop(nowScrollTop);
  }
  componentWillUnmount() {
    nowScrollTop = getTop();
  }
  render() {
    return this.props.children;
  }
}

export default RestoredScroll;
