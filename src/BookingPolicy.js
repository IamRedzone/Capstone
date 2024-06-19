import React from "react";

export default function BookingPolicy(){
    return(
        <article style={{color:'hsla(29,89%,86%,1.0)'}}>
            <h2 className="markazi">BOOKING POLICIES</h2>
            <p className="karla">Online reservations are now open, all tables are reserved for full dining only.</p>
            <br/>
            <p className="karla">Regrettably, it has become necessary to implement a cancellation policy on all online bookings and therefore credit card details will be taken. Nothing will be charged to your card unless you cancel your reservation with 24 hours’ notice or less, or the party fails to attend their booking, where a charge of 20 euros per person will be incurred.</p>
            <br/>
            <p className="karla">Menus vary according to date, time and location. We ask that guests check our online menus prior booking.</p>
            <br/>
            <p className="karla">For larger groups (8+ people), please contact us directly to discuss your requirements</p>
            <br/>
            <h2 className="markazi">FIND US</h2>
            <p className="karla">Address: 123 Main St, Dublin 2, Ireland</p>
            <p className="karla">Phone: +353 1 123 4567</p>
            <p className="karla">Email: [info@restaurant.com](mailto:info@restaurant.com)</p>
            <span style={{color:'hsla(150,6%,93%,1.0)', textDecoration:'underline', cursor:'pointer'}} className="karla">Get directions</span>
        </article>
    )
}