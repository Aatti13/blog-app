const Navbar = ()=>{
  return(
    <section className="navbarContainer">
      <h1 className="mainHeading" title="BollyBlog"><a href="#">BollyBlog</a></h1>
      <NavLinks/>
      <ContactBtn/>
    </section>
  );
}

const NavLinks = ()=>{
  return (
    <section className="navlinksContainer">
      <nav>
        <a href="#home" title="Home"><li className="element">Home</li></a>
        <a href="#about" title="About The Creators"><li className="element">About</li></a>
        <a href="#blog" title="The Blog!"><li className="element">Blog</li></a>
      </nav>
    </section>
  );
}

const ContactBtn = ()=>{
  return (
    <section className="contactBtnContainer">
      <a href="#contact" title="Contact Us"><button className="contactBtn">Contact Us</button></a>
    </section>
  );
};

export default Navbar;