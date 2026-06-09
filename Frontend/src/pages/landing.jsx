import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
    return (
        <div className="landingPageContainer">
            <nav>
                <div className="navHeader">
                    <h2>Apna Video Call</h2>
                </div>

                <div className="navlist">
                    <Link to="/guest">
                        <p>Join as Guest</p>
                    </Link>

                    <Link to="/auth">
                        <p>Register</p>
                    </Link>

                    <Link to="/auth">
                        <p>Login</p>
                    </Link>
                </div>
            </nav>

            <div className="landingMainContainer">
                <div>
                    <h1>
                        <span style={{ color: "#FF9839" }}>
                            Connect
                        </span>{" "}
                        with your loved Ones
                    </h1>

                    <p>Cover a distance by Apna Video Call</p>

                    <div role="button">
                        <Link to="/auth">Get Started</Link>
                    </div>
                </div>

                <div>
                    <img src="/mobile.png" alt="Video Call" />
                </div>
            </div>
        </div>
    );
}