import { connect } from 'react-redux';
import App from '../../App';

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, null)(App);
