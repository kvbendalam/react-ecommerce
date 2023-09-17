import React from 'react'

function Cart(props) {
    var total = 0;

    props.data.map((product) => {
        return (
            total = total + product.data.price
        )
    })

    console.log(props.data)
    return (
        <div class="row" style={{ margin: "2%" }}>
            {
                props.data.map((cartItem) => {
                    return (
                        <div class="col-sm-4" key={cartItem.data.id}>
                            <div class="card" style={{ margin: "2%" }}>
                                <div class="card-body">
                                    <img src={cartItem.data.img} alt={cartItem.data.name} />
                                    <h5 class="card-title">{cartItem.data.name}</h5>
                                    <p class="card-text">{cartItem.data.price}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <div>
                Total Cart Value : {total}
            </div>
        </div>
    )
}

export default Cart