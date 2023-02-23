import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/shoppingCartContext";
import StoreItems from '../data/items.json'
import { formatCurrency } from "../utils/formatCurrency";

type CartItemProps = {
    id: number,
    quantity: number
}

const CartItem = ({ id, quantity }: CartItemProps) => {
    const { removeFromCart } = useShoppingCart();
    const item = StoreItems.find(i => i.id === id)
    if (item == null) return null;

    return (
        <Stack direction="horizontal" gap={2} className='d-flex align-items-center'>
            <img src={item.img} style={{ width: '125px', height: '125px', objectFit: 'cover' }} alt="" />
            <div className="me-auto">
                <div>
                    {item.name} <span className="text-muted" style={{ fontSize: '.75rem' }}>x{quantity}</span>
                    {formatCurrency(item.price)}
                </div>
            </div>
            <div>{formatCurrency(item.price * quantity)}</div>
            <Button onClick={() => removeFromCart(item.id)} variant="danger">Remove</Button>
        </Stack>
    )
}

export default CartItem;