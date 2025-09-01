import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '../../store/cartSlice';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './myorder.css';
export default function Myorder() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { items, total } = useSelector((state) => state.cart);
    const handleQuantityChange = (id, newQuantity) => {
        dispatch(updateQuantity({ id, quantity: newQuantity }));
    };
    const handleRemoveItem = (id) => {
        dispatch(removeFromCart(id));
    };
    const handleClearCart = () => {
        dispatch(clearCart());
    };
    const handleBackToMenu = () => {
        navigate('/services');
    };
    const handleMakePayment = () => {
        // TODO: Implement payment gateway integration
        alert('Payment gateway integration coming soon!');
    };
    const gstAmount = total * 0.18;
    const finalTotal = total + gstAmount;
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    if (items.length === 0) {
        return (
            <div className="orders-page">
                <Navbar />
                <div className="empty-orders  text-center">
                    <div className="empty-orders-content">
                        <h2>Your cart is empty</h2>
                        <p>Add some delicious items to your cart first!</p>
                        <div className='d-flex justify-content-center align-items-center'>
                            <button className="back-to-menu-btn mt-3" onClick={handleBackToMenu}>
                                <ArrowBackIcon /> Back to Menu
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="orders-page">
            <Navbar />
            <div className="orders-container">
                <div className="orders-header">
                    <button className="back-btn" onClick={handleBackToMenu}>
                        <ArrowBackIcon fontSize='small' /> Back to Menu
                    </button>
                    <h5>Order Summary</h5>
                    <button className="clear-cart-btn" onClick={handleClearCart}>
                        Clear Cart
                    </button>
                </div>
                <div className="orders-content">
                    {/* Left Column - Cart Products */}
                    <div className="cart-products-column">
                        <h2>Your Cart Items</h2>
                        <div className="cart-items-list">
                            {items.map((item) => (
                                <div key={item.id} className="cart-item-card mt-2">
                                    <div className="item-image-container">
                                        <img src={item.image} alt={item.name} className="item-image" />
                                    </div>
                                    <div className="item-details">
                                        <h3 className="item-name">{item.name}</h3>
                                        <p className="item-price">Rs.{parseInt(item.price.replace('Rs.', ''))}</p>
                                        <div className="quantity-section">
                                            <label>Quantity:</label>
                                            <div className="quantity-controls">
                                                <button
                                                    className="quantity-btn"
                                                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                                    disabled={item.quantity <= 1}
                                                >
                                                    <RemoveIcon />
                                                </button>
                                                <span className="quantity-display">{item.quantity}</span>
                                                <button
                                                    className="quantity-btn"
                                                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                                >
                                                    <AddIcon />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="item-total">
                                            <span>Item Total:</span>
                                            <strong>Rs.{parseInt(item.price.replace('Rs.', '')) * item.quantity}</strong>
                                        </div>
                                    </div>
                                    <button
                                        className="remove-item-btn"
                                        onClick={() => handleRemoveItem(item.id)}
                                        title="Remove item"
                                    >
                                        <DeleteIcon />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Right Column - Order Summary */}
                    <div className="order-summary-column">
                        <div className="order-summary-card">
                            <h2>Order Summary</h2>
                            <div className="summary-details">
                                <div className="summary-row">
                                    <span>Total Items:</span>
                                    <span className="summary-value">{totalItems}</span>
                                </div>
                                <div className="summary-row">
                                    <span>Subtotal:</span>
                                    <span className="summary-value">Rs.{total}</span>
                                </div>
                                <div className="summary-row">
                                    <span>GST (18%):</span>
                                    <span className="summary-value">Rs.{gstAmount.toFixed(2)}</span>
                                </div>
                                <div className="summary-divider"></div>
                                <div className="summary-row total-row">
                                    <span>Final Total:</span>
                                    <span className="summary-value final-total">Rs.{finalTotal.toFixed(2)}</span>
                                </div>
                            </div>
                            <button
                                className="make-payment-btn"
                                onClick={handleMakePayment}
                            >
                                Make Payment
                            </button>
                            <div className="payment-info">
                                <p>Secure payment powered by leading payment gateways</p>
                                <div className="payment-methods">
                                    <span>💳 Credit/Debit Cards</span>
                                    <span>🏦 Net Banking</span>
                                    <span>📱 UPI</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
