import exp from "constants";
import React from "react";

export default function Footer() {
    return(
        <footer className="footer">
            <div className="flex"></div>
                <div className="flex-auto">
                    <div className="col-12 col-md-6">
                        <h2>About Us</h2>
                        <p>Moqo is a website that helps you to search a movie by quotes.</p>
                    </div>
                </div>
                <div className="flex-auto">
                    <div className="col-12 col-md-6">
                        <h2>Quick Links</h2>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Search</a></li>
                            <li><a href="#">About Us</a></li>
                        </ul>
                    </div>
            </div>
        </footer>    
    );
}

