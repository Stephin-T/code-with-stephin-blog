import React from 'react';
import classes from "./hero.module.css";
import Image from 'next/image';

function Hero() {
  return (
    <section className={classes.hero}>
        <div className={classes.image}>
            <Image src="/images/site/stephint-img.jpg" priority="high" alt="An image showing Stephin" width={300} height={300} />
        </div>
        <h1>
            Hey! I'm Stephin Thathyuse
        </h1>
        <p>
        Welcome to "Code with Stephin", a place where we explore the exciting world of full stack development using JavaScript.
        </p>
        <p> As a passionate developer myself, I created this blog to share my knowledge, insights, and experiences 
        with fellow developers who are eager to learn and grow in this ever-evolving field.</p>
    </section>
  )
}

export default Hero;


// Here, you'll find a variety of articles, tutorials, and resources that cover topics ranging from front-end frameworks like React and Angular to back-end technologies like Node.js and MongoDB. Whether you're a seasoned developer or just starting out, you'll find something of value here to help you take your skills to the next level.

// So join me on this journey as we dive deep into the world of full stack development using JavaScript. Let's learn, grow, and build amazing things together!