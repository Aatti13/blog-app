const Contact = ()=>{
  return (
    <Info/>
  );
}

const Info = ()=>{
  return (
    <section className="contactContainer" id="contact">
      <img className="contactVector" src=".//images/vector-img.jpg" alt="a"/>
      <div className="contactInfo">
        <h2 className="contactHead">Contact Us</h2>
        {/* <hr/> */}
        <ul>
          <li className="element">GitHub: <a href="https://github.com/Aatti13" target="_blank" rel="noreferrer">Aatti13</a></li>
          <li className="element">Email: 
          <li><a href="mailto: aattreya.ks@gmail.com" target="_blank">aattreya.ks@gmail.com</a></li>
          <li><a href="mailto: atulkzz747@gmail.com" target="_blank" rel="noreferrer">atulkzz747@gmail.com</a></li>
          <li><a href="mailto: anshd0403@gmail.com" target="_blank" rel="noreferrer">anshd0403@gmail.com</a></li>
          <li><a href="mailto: ishan007rath@gmail.com" target="_blank" rel="noreferrer">ishan007rath@gmail.com</a></li>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;