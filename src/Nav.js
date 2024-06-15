import React from "react";

export default function Nav() {
    return (
<>
<ul className="navbar">
    <li><a href="/home" role="button">Home</a></li>
    <li><a href="/about" role="button">About</a></li>
    <li><a href="/menu" role="button">Menu</a></li>
    <li><a href="/reserve" role="button">Reservations</a></li>
    <li><a href="/order" role="button">Order online</a></li>
    <li><a href="/login" role="button">Login</a></li>
</ul>
</>
    )
}