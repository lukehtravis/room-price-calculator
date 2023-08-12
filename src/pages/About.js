import React from "react";
import { Link } from "react-router-dom";
import './about.css'

const About = () => {
    return (
        <div className="container">
            <Link to={"calculator"}>Go To Calculator</Link>
            <p>Welcome to the room price calculator! The tool is designed to help groups of people calculate how to split up rent between multiple rooms in a co-operative.</p> 

            <p>The app first asks you to enter the sum of rent you owe for all the rooms, and then the number of rooms there are. For example, say our rent is $1000 dollars, and we have 2 rooms</p>

            <div>
                <span>Rent = $1000</span>
                <br />
                <span>Rooms = 2</span>
            </div>

            <p>After that, you can add any number of attributes that you like to the calculator, and then weight each attribute in accordance with the proportion of rent that you would like it to account for. So in our current example, say we decide we have three attributes, Square Footage, Closets, and Privacy. We want square footage to account for 80% of rent, Closets to account for 10%, and Privacy accounts for another 10%. So the breakdown would look like:</p>

            <div>Square Footage = 80% => $800</div>
            <div>Closets = 10% => <span class="purple">$100</span></div>
            <div>Privacy = 10% => $100</div>
            <br />

            <div>Then, you can go in to each attribute and specify how many units of each attribute can be assigned to each room. The calculation is agnostic about what kind of units you use. So, for example, with square feet, you could say that Room A is 300sqft, and Room B is 100sqft. You would divide the number of units in each room by the total, derive a percent out of that, and then multiply that percentage by the attribute total, and you get the rooms portion for that attribute. So for example, for the square feet attribute</div>

            <br />
            <div>Room A = 300sqft => 300/<span class="red">400</span> => 0.75 => 0.75 x <span class="purple">$100</span> => $75</div>
            <div>Room B = 100sqft => 100/<span class="red">400</span> => 0.25 => 0.25 x <span class="purple">$100</span> => $25</div>
            <div>Total Units = <span class="red">400</span></div>

            <p>You do this for each attribute, and then the calculator lets you know how much everyone should pay for their respective rooms.</p>

            <p>All roomates have to decide together is what weight to ascribe to each attribute, and what share of each attribute each room gets, and the calculator can do the rest.</p>

            <p>Hope you enjoy!</p>
        </div>
    );
}

export default About;