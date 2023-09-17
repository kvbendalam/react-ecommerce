import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <p class="navbar-brand" style={{ margin: "1%" }}>Amazon</p>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">

                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                    </ul>
                    <span class="navbar-text">
                        <Link to="/cart">Cart</Link>
                    </span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar