import React from 'react';

import linkedin from '../images/linkedin.svg';
import github from '../images/github.svg';

const Home = () => {
  return (
    <div>
      <section className="jumbotron">
        <h2 className="display-4">Sho Weimer</h2>
        <hr className="my-3" />
        <h3 className="lead">Front-End Web Developer</h3>
      </section>

      <footer>
        <img className="icon" src={github} alt="" />
        <img className="icon" src={linkedin} alt="" />

        {/* <a href="https://github.com/showeimer"><img className="icon" src={github} alt="" /></a>
        <a href="https://www.linkedin.com/in/sho-weimer/"><img className="icon" src={linkedin} alt="" /></a> */}
      </footer>
    </div>
  )
}

export default Home;
