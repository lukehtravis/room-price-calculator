import React from "react";
import { Link } from "react-router-dom";
import "./about.css";

const About = () => {
  return (
    <div className="container">
      <Link to={"calculator"}>Go To Calculator</Link>
      <p>
        Welcome to the room price calculator! The tool is designed to help
        groups of people calculate how to split up rent between multiple rooms
        in a co-operative.
      </p>

      <p>
        The app first asks you to enter the sum of rent you owe for all the
        rooms, and then the number of rooms there are. For example, say our rent
        is $1000 dollars, and we have 2 rooms
      </p>

      <div>
        <span>Rent = $1000</span>
        <br />
        <span>Rooms = 2</span>
      </div>

      <p>
        After that, you can add any number of attributes that you like to the
        calculator, and then weight each attribute in accordance with the
        proportion of rent that you would like it to account for. So in our
        current example, say we decide we have three attributes, Square Footage,
        Closets, and Privacy. We want square footage to account for 80% of rent,
        Closets to account for 10%, and Privacy accounts for another 10%. So the
        breakdown would look like:
      </p>

      <div>
        Square Footage = 80% =&gt; <span className="purple">$800</span>
      </div>
      <div>Closets = 10% =&gt; $100</div>
      <div>Privacy = 10% =&gt; $100</div>
      <br />

      <div>
        Then, you can go in to each attribute and specify how many units of each
        attribute can be assigned to each room. The calculation is agnostic
        about what kind of units you use. So, for example, with square feet, you
        could say that Room A is 300sqft, and Room B is 100sqft. You would
        divide the number of units in each room by the total, derive a percent
        out of that, and then multiply that percentage by the attribute total,
        and you get the rooms portion for that attribute. So for example, for
        the square feet attribute
      </div>

      <br />
      <div>
        Room A = 300sqft =&gt; 300/<span className="red">400</span> =&gt; 0.75
        =&gt; 0.75 x <span className="purple">$800</span> =&gt; $600
      </div>
      <div>
        Room B = 100sqft =&gt; 100/<span className="red">400</span> =&gt; 0.25
        =&gt; 0.25 x <span className="purple">$800</span> =&gt; $200
      </div>
      <div>
        Total Units = <span className="red">400</span>
      </div>

      <p>
        You do this for each attribute, and then the calculator lets you know
        how much everyone should pay for their respective rooms.
      </p>

      <p>
        All roomates have to decide together is what weight to ascribe to each
        attribute, and what share of each attribute each room gets, and the
        calculator can do the rest.
      </p>

      <p>Hope you enjoy!</p>
    </div>
  );
};

export default About;
