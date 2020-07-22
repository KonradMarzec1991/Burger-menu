import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from 'axios';


class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Konrad Marzec',
                address: {
                    street: 'Dziwna',
                    zipCode: '72-420',
                    country: 'Poland'
                },
                email: 'konri@konri.com'
            },
            deliverMethod: 'fastest'
        }

        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false, purchasing: false });
            })
            .catch(error => {
                this.setState({ loading: false, purchasing: false });
            });
    }

    render() {
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                <form action="">
                    <input className={classes.Input} type="text" name="name" placeholder="Your name" />
                    <input className={classes.Input} type="email" name="email" placeholder="Your email" />
                    <input className={classes.Input} type="text" name="street" placeholder="Street" />
                    <input className={classes.Input} type="text" name="postal" placeholder="Postal code" />
                </form>
                <Button btnType="Success" clicked={this.orderHandler }>ORDER</Button>
            </div>
        );
    }
}

export default ContactData;