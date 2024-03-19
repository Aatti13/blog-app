const Hero = ()=>{
  // linear-gradient(90deg, purple, blue, magenta);
  return (
    <section className="heroContainer">
      <LeftSide/>
      <RightSide/>
    </section>
  );
}

const LeftSide = ()=>{
  return (
    <section className="left">
      <div className="welcome">
        <h2 className="heroText">Crazy about Bolly?</h2>
        <h2 className="heroText">Welcome to BollyBlog</h2>
      </div>
      <a href="#about"><button className="exploreBolly">Explore BollyBlog</button></a>
    </section>
  );
}

const RightSide = ()=>{
  return (
    <section className="right">
    <div className="circles">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <span></span>
    </div>
  </section>
  );
}

export default Hero;