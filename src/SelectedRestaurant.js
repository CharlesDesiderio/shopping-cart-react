import React, { useState } from 'react'

const SelectedRestaurant = (data) => {
    const [cart, setCart] = useState([])
    
    const cartUpdate = (x) => {
    
        let newMenu = [...cart];
    
        if (newMenu.includes(x)) {
            newMenu[newMenu.indexOf(x)+1]++;
            console.log(newMenu);
        } else {
            newMenu.push(x, 1);
            console.log(newMenu);
        }
        
        setCart(newMenu);
    
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