import React from 'react';

export const DeliveryAddress = () => {

    return (
        <div>
            <form>
                <input 
                placeholder="Full Name:"
                /><br/>
                <input 
                placeholder="Address:"
                /><br/>
                <input 
                placeholder="City:"
                /><br/>
                <input 
                placeholder="County or State"
                /><br/>
                <input 
                placeholder="Postcode or Zipcode"
                /><br/>
                <input 
                placeholder="Country"
                /><br/>
                <input 
                placeholder="Email:"
                /><br/>
                <input 
                placeholder="Phone Number"
                /><br/>
                <button>Checkout</button>
            </form>
        </div>
    )
}