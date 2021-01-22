import { connect } from 'react-redux';
import CartList from '../../components/CartList';
import { addToCart, removeFromCart } from '../../actions';

const mapDispatchToProps = (dispatch) => ({
  onAddToCart: (product) => dispatch(addToCart(product)),
  onRemoveFromCart: (product) => dispatch(removeFromCart(product)),
});

const mapStateToProps = (state) => ({
  cartItems: state.cart,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
