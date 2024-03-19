const About = ()=>{
  return (
    <section className="about" id="about">
      <CreatorDes/>
      <img />
    </section>
  );
}

const CreatorDes = ()=>{
  return (
    <section className="creatorDesc">
      <div className="container">
        <div className="desc">
        <h2>About Us</h2>
        <hr className="grad"/>
        <h3>We are Team XYZ,</h3>
        <p className="aboutPara">A dynamic collective of creative minds enthusiastically participating in the Blog-a-thon competition. Our innovative approach and collaborative spirit have culminated in the creation of a captivating blogging website that delves into pertinent cultural inquiries.

At the forefront of our contributions is a thought-provoking blog titled "Where is Bollywood Headed?" This incisive exploration navigates the contemporary trajectory of Indian cinema, particularly focusing on recent cinematic ventures whose budgets rival or exceed that of esteemed space missions, such as ISRO and even regional cinema.</p>
          <h3>The Team</h3>
          <ol>
            <li className="teamMember">Ansh Desai</li>
            <li className="teamMember">Ishan Rath</li>
            <li className="teamMember">Atul Kumar</li>
            <li className="teamMember">Aattreya.K.S</li>
          </ol>
        </div>
        <img alt="vector-random" src="./images/group-photo-final.jpg" className="vector"/>
      </div>
      <div className="container">
        
      </div>
    </section>
  );
}

export default About;