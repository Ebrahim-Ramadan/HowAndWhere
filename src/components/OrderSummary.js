import {useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export const OrderSummary = () => {
    const navigate = useNavigate()
    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }} >
            <p>Order confirmed</p>
            <Button onClick = {()=>navigate('/')}>Go Home</Button>
        </div>
    );
};
