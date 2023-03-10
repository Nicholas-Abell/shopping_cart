import { Button, Card } from 'react-bootstrap';
import { useShoppingCart } from '../context/shoppingCartContext';

import { formatCurrency } from '../utils/formatCurrency';

type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    img: string
}

const StoreItem = ({ id, name, price, img }: StoreItemProps) => {
    const { getItemQuantity, increaseQuantity, decreaseQuantity, removeFromCart } = useShoppingCart();
    const quantity = getItemQuantity(id);

    return (
        <Card className='h-100'>
            <Card.Img
                variant='top'
                src={img}
                height='200px'
                style={{ objectFit: 'cover' }}
            />
            <Card.Body className='d-flex flex-column'>
                <Card.Title className='d-flex justify-content-between align-itemss-baseline mb-4'>
                    <span className='fs-2'>{name}</span>
                    <span className='ms-2 text-muted'>{formatCurrency(price)}</span>
                </Card.Title>
                <div className='mt-auto'>
                    {quantity === 0
                        ? <Button onClick={() => increaseQuantity(id)} className='w-100'>Add to Cart</Button>
                        : <div className='d-flex align-items-center 
                        flex-column' style={{ gap: '.5rem' }}
                        >
                            <div className='d-flex align-items-center 
                            justify-content-center' style={{ gap: '.5rem' }}
                            >
                                <Button onClick={() => decreaseQuantity(id)}>-</Button>
                                <div>
                                    <span className='fs-3'>{quantity}</span>
                                    in cart
                                </div>
                                <Button onClick={() => increaseQuantity(id)}>+</Button>
                            </div>
                            <Button onClick={() => removeFromCart(id)} variant='danger'>Remove</Button>
                        </div>}
                </div>
            </ Card.Body>
        </Card>
    )
}

export default StoreItem;