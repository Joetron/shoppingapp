import { connect } from 'react-redux';
import CheckoutList from '../../components/CheckoutList';
import { purchaseProducts } from '../../actions';

const mapDispatchToProps = (dispatch) => ({
  onPurchaseProducts: (product) => dispatch(purchaseProducts(product)),
});

const mapStateToProps = (state) => ({
  products: state.products,
  cart: state.cart,
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutList);
