import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators, wrapDispatch, wrapAction} from 'multireducer';
import counter from '../../components/counter';
let {Counter} = counter;
// import * as CounterActions from '../../reducer/counter';

const mapDispatchToProps = dispatch => ({
  incrementIfOdd1: bindActionCreators(counter.actions.incrementIfOdd, dispatch, 'counter1'),
  incrementIfOdd2: bindActionCreators(counter.actions.incrementIfOdd, dispatch, 'counter2'),
});

class CounterMulti extends Component {
  render() {
    console.log(this.props);
    let {multiCounters: {counter1: count1, counter2: count2}, incrementIfOdd1, incrementIfOdd2} = this.props;
    return (
      <div>
        <Counter count={count1} addOdd={incrementIfOdd1} />
        <Counter count={count2} addOdd={incrementIfOdd2} />
      </div>
    );
  }
}

export default connect(state => state, mapDispatchToProps)(CounterMulti);
