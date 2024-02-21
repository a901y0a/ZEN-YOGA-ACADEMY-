import React from 'react';
import '../assets/about.css';

function About() {


  return (
    <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>id card practice</title>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        <div className="profile-card">
          <div className="head">
            <div className="profile-image">
            <img src="https://png.pngtree.com/png-vector/20230426/ourmid/pngtree-yoga-day-lifestyle-fitness-illustration-png-image_6732547.png" alt="Attila Nagy" />
            </div>
            <div className="name-headline">
              <h1>ZEN YOGA</h1>
              <h2>ACADEMY</h2>
              <span>from</span>
              <p><i className="fa fa-map-marker" /> Hyderabad</p>
            </div>
          </div>
          <div className="content">
            <p className="about">
            This Application is constructed to facilitate online admissions for the YOGA Academy. Customers have the capability to add, edit, view, and delete admissions. Administrators are empowered to add, edit, and delete courses, institutes, and students, with full viewing privileges for each.
            </p>
            <section className="links">
              <h2> ABOUT US </h2>
            </section></div></div></div>
  );
}

export default About;
