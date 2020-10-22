import React, { Component } from 'react';
import Navbar from "../components/Navbar";
import "../styles/punctualSponsor.css";
import { Link } from "react-router-dom";

export default class PunctualSponsor extends Component {
    render() {
        return (
            <div className="puncSponsor">

                <Navbar />

                 <div className="quote">"It seems to me that the natural world is the greatest source of excitement; the greatest source of visual beauty, the greatest source of intellectual interest. It is the greatest source of so much in life that makes life worth living."<br/>
                        <span>- Sir David Attenborough</span></div>

                <div className="PS">
                   <h1>Monthly Sponsorship</h1>
                   <p>With the monthly sponsorship you can set up a direct debit of the amount of your choice, every month (you can stop direct debit at any time)!
                      Not only will you be providing invaluable care, you will also receive a great gift pack.</p>
                      <h3>How your money will help :</h3>
                
                      <ul className="list">
                   <li>Rescue, care and support the animal of your choice saved from exploitation and captivity</li>
                   <li>Provide care for the animal at our sanctuaries (meals, veterinary care, GPS tracking collar...)</li>
                   <li>Monitor wild populations to inform conservation efforts</li>
                   <li>Run environmental education programmes for local communities and others</li>
                   <li>Campaign against exploitation of wildlife and end trophy and canned hunting practices</li>
                      </ul>
                      <p>and morel...</p>
                   

                   <h3>Monthly Sponsorship Pack :</h3>
                   <p className="line">To thank you for your sponsorship you will receive :</p>
                   <ul className="list">
                   <li>A personalized sponsorship certificate</li>
                   <li>A photo of your sponsored animal to print and keep</li>
                   <li>A fact sheet about your animal</li>
                   <li>A quarterly email including photos and an update on your animal</li>
                   <li>An insider report of all our rescue operations and updates on all the animals at our rescue center</li>
                   </ul>

                   <div className="link-payment"><Link to={`/paymentform`} style={{ color: "#455",}}>
                    Sponsor now !
                  </Link></div>

                </div>

            </div>
        )
    }
};
