import React, { useState } from 'react'
import './Navbar.css'
import { FaHospitalAlt } from "react-icons/fa"

function Navbar() {
    const [bar, setbar] = useState("topnav")
    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (bar === "topnav") {
            setbar(bar + " " + "responsive")
        } else {
            setbar("topnav")
            x.className = "topnav";
        }
        console.log(bar);
    }


    return (
        <div class="nav">
            <input type="checkbox" id="nav-check" />
            <div class="nav-header">
                <div class="nav-title">
                    <FaHospitalAlt />
                </div>
            </div>
            <div class="nav-btn">
                <label for="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>

            <div class="nav-links">
                <a href="" target="_blank">Home</a>
                <a href="" target="_blank">About</a>
                <a href="" target="_blank">Log Out</a>
                <a href="" target="_blank">Contact</a>
            </div>
        </div>
    )
}

export default Navbar