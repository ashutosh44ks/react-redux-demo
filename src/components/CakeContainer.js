//OLD METHOD

import { buyCake } from "../redux";
import { connect } from 'react-redux'

const CakeContainer = (props) => {
  return (
    <div>
      <h2>Number of Cakes - {props.numOfCakes}</h2>
      <button onClick ={props.buyCake}>Buy Cake</button>
    </div>
  );
};

//The below functions have an optional second argument called "ownProps" which contains the props sent to this component
const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes
  }
} //takes our state and converts it to props for us to use
const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  }
} //takes our action and converts it to props for us to use

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
