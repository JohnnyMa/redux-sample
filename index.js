import React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

// React component
class Counter extends React.Component {
  render(){
    const { value, onIncreaseClick } = this.props;
    const { value2, onReduceClick } = this.props;
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
        <button onClick={onReduceClick}>Reduce</button>
      </div>
    );
  }
}

// Action:
const increaseAction = {type: 'increase'};
const reduceAction = {type: 'reduce'};


// Reducer:
function counter(state={count: 0}, action) {
  let count = state.count;
  switch(action.type){
    case 'increase':
      return {count: count + 2};
    case 'reduce':
      return {count: count - 2};
    default:
      return state;
  }
}

// Store:
let store = createStore(counter);

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.count
  };
}


// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction),
    onReduceClick: () => dispatch(reduceAction)
  };
}


// Connected Component:
let App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

React.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('container')
);
