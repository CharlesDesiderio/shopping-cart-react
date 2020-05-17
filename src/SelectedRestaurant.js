import React, { useState } from 'react'

const SelectedRestaurant = (data) => {
    const [cart, setCart] = useState([])
    
    const cartUpdate = (x) => {
        if (cart.includes(x[0])) {
            console.log(cart.indexOf(x[0]))
        }
        setCart(cart.concat([x[0], x[1]]))
    }

    return (
        <div>
            {data.data.name}
            
            {data.data.menu.map((x) => {
                return (
                    <div>
                        {x.type}
                        {x.menu.map((x) => {
                            return (
                            <div onClick={() => cartUpdate(x)}>{x[0]} ${x[1]} {x[2]}</div>
                                )
                        })}
                    </div>
                
                                )
            })}
            <div>Current Cart: {cart}</div>
        </div>
    )
}

export default SelectedRestaurant