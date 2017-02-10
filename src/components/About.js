import React from 'react'

class About extends React.Component{
  render() {
    return(
      <div className="about-container">
        <h1 className="header-content">Sean Lee</h1>
        <h2 className="subhead">A programmer, a designer and a filmmaker walk into a bar...</h2>
        
        <section className="about-content">
          <p>It sounds like the beginning of a terrible joke, but it's actually my resume.</p>
          <p>A creative at heart with a passion for design and technology, I'm drawn towards projects that use bold, beautiful design choices to improve human/computer interaction.</p>
        </section>

        <section className="skills">
          <h2>My Skills</h2>
            <p>It sounds like the beginning of a terrible joke, but it's actually my resume.</p>
            <p>A creative at heart with a passion for design and technology, I'm drawn towards projects that use bold, beautiful design choices to improve human/computer interaction.</p>
        </section>

            <ul className="key-stats">
              <li>San Francisco, United States</li>
              <li><a href="https://github.com/seanyboy49">https://github.com/seanyboy49 </a></li>
              <li>Searching</li>
              <li>Freelance</li>
              <li>Contact</li>
              <li>https://www.linkedin.com/in/seanboramlee</li>
            </ul>
      </div>
    )
  }
}

export default About;
