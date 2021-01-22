import { connect } from 'react-redux';
import ProductsList from '../../components/ProductsList';
import { addToCart, removeFromCart } from '../../actions';

const mapDispatchToProps = (dispatch) => ({
  onAddToCart: (product) => dispatch(addToCart(product)),
  onRemoveFromCart: (product) => dispatch(removeFromCart(product)),
});

const mapStateToProps = (state) => ({
  products: state.products,
  cart: state.cart,
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);
