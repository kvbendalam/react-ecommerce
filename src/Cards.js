import React from 'react'

function Cards(props) {
    return (
        <div class="row" style={{ margin: "2%" }}>
            {
                props.data.map((product) => {
                    return (

                        <div class="col-sm-4">
                            <div class="card" style={{ margin: "2%" }}>
                                <div class="card-body">
                                    <img src={product.img} alt={product.name} />
                                    <h5 class="card-title">{product.name}</h5>
                                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <h5 class="card-title">&#8377; {product.price}/-</h5>
                                    <p class="btn btn-primary" onClick={() => props.handleCartData(product)}>Add to Cart</p>
                                </div>
                            </div>
                        </div>

                    )
                })
            }

        </div >
    )
}

export default Cards