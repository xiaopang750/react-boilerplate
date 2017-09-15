import compose from 'recompose/compose';
import withHandlers from 'recompose/withHandlers';
import lifecycle from 'recompose/lifecycle';
import React from 'react';

const enhance = compose(
  withHandlers({
    addOdd: props => () => {
      let {addOdd} = props;
      addOdd();
    },
  }),
  lifecycle({
    componentDidMount() {
      setTimeout(() => {
        this.setState({name: 2});
      }, 2000);
    }
  }),
);

const Counter = (props) => {
  console.log(props);
  let {count, addOdd} = props;
  return (
    <div>
      <span>{count}</span>
      <button onClick={addOdd}>点击</button>
    </div>
  );
};

export default enhance(Counter);
