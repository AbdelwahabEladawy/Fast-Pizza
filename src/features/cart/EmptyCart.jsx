import { Link } from 'react-router-dom';
import Button from '../../ui/Button';
import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div className='my-5'>
      <LinkButton><Link to="/menu">&larr; Back to menu</Link></LinkButton>

      <p className='mt-7 font-semibold text-yellow-600'>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
