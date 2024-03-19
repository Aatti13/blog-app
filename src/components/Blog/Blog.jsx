const Blog = ()=>{
  return (
    <section className="blogTop" id="blog">
      <BlogTitle/>
      <TopPart/>
      <MainBody/>
    </section>
  );
}

const BlogTitle = ()=>{
  return (
      <h2 className="blogHead">Where Dreams Unfold: Navigating Bollywood's Odyssey</h2>
  );
}

const TopPart = ()=>{
  const dateOfWriting = new Date();
  const dateObj = {
    date: dateOfWriting.getDate(),
    day: dateOfWriting.getDay(),
    month: dateOfWriting.getMonth(),
    year: dateOfWriting.getFullYear(),
    time: dateOfWriting.getTime(),
  }
  return (
    <section className="author">
      <div className="authSec">
        <div>
        <img className="circlePic" src="./images/profile.png" alt="circle"/>
        <span className="auth">Anonymous</span>
        </div>
        <span className="spl">Published: {`${dateObj.date}-${dateObj.month}-${dateObj.year}`}</span>
      </div>
      <div>
        
      </div>
    </section>
  );
}

const MainBody = ()=>{
  return (
    <section className="blogPostContainer">
      <div className="barGraphContainer">
      <img src="./images/bollywood.jpg" className="barGraph overRide" alt="bar"/><br/><br/>
      </div>
      <output className="blogPost">
      In the vibrant world of Bollywood, amidst the sparkle of sequins and the rhythm of dance, lies a pivotal moment—a juncture where spectacle meets substance. As we gaze upon the silver screen, a question arises: What lies ahead for Bollywood?<br/><br/>

      Within this enchanting realm of Indian cinema, dreams come alive, capturing hearts and inspiring minds worldwide. With each passing year, the industry thrives, propelled by soaring budgets akin to celestial rockets. Yet, beneath the surface of glitz and glamour, a deeper story unfolds—a tale of transformation, where storytelling evolves amidst the crucible of creativity.<br/><br/>

      The Rise of Mega-Budget Movies: Navigating Bollywood’s Financial Orbit<br/><br/>

      The exponential growth in Bollywood film budgets is unavoidable. The expenses involved in making a film have skyrocketed, from lavish sets to massive marketing efforts. Bollywood films are now expected to have the same level of production value as their Hollywood counterparts, as audiences become increasingly exposed to foreign films.<br/><br/>

      This need for high production value necessitates substantial sums of money to be spent on post-production, set designs, and visual effects. Furthermore, Bollywood's dependence on well-known performers has driven up production costs. A-list actors command high salaries, and their participation often results in a significant increase in production expenditures.<br/><br/>

      In an attempt to reach a wider audience, Bollywood has ventured into producing high-profile films with international locales, excellent special effects, and partnerships with foreign talent. While this expansion opens up additional revenue-generating opportunities, it also escalates the amount that must be budgeted for such endeavors.<br/><br/>

      Moreover, in the digital age, a movie's success hinges entirely on its ability to sell itself. Bollywood producers spare no expense when it comes to promoting their works on various platforms, including television, social media, and outdoor advertising. These marketing initiatives demand significant financial investments, further driving up budgets.<br/><br/>

      In this financial orbit, Bollywood finds itself navigating through uncharted territories, balancing the demands of creativity and commercial viability. The trajectory of mega-budget movies not only shapes the industry's landscape but also sets the expectations of audiences worldwide. As Bollywood continues to evolve, one thing remains certain—the pursuit of cinematic excellence knows no bounds.<br/><br/>

      <h4>Exploring the Infinite: ISRO's Odyssey versus Bollywood's Blockbusters</h4><br/>

      Stay tuned for the next perspective as we delve deeper into the cosmic contrasts between Bollywood’s Odyssey and ISRO's triumphs.<br/><br/>

      <div className="barGraphContainer">
      <img src="./images/bargraph.png" className="barGraph" alt="bar2"/>
      </div>

      <h4>Shifting Gears: Bollywood’s Crossroads</h4><br/>

      As we navigate through the glitz and glamour of Bollywood's big-budget spectacles, it's imperative to pause and contemplate whether it's time for the industry to shift gears. While the allure of grandiose productions may be intoxicating, there are compelling reasons to reassess Bollywood's priorities and refocus its trajectory towards a more sustainable and meaningful path.<br/><br/>

      <h4>Embracing Content-Driven Cinema</h4><br/>

      In recent years, regional language films such as Kantara, Madhumali Boys, and the vibrant landscape of Malayalam cinema have been garnering widespread acclaim. What sets these films apart is their emphasis on rich storytelling and nuanced character development. They prioritize substance over spectacle, championing narratives that resonate with diverse audiences on a deeper level. Bollywood could certainly take a leaf from their playbook, leveraging the power of storytelling to connect with audiences in a more profound way.<br/><br/>
      <h4>Talent Over Stardom</h4><br/>

      In an industry often driven by star power, there's a growing sentiment that talent should reign supreme. Instead of solely relying on celebrity endorsements and box-office draws, Bollywood should invest in nurturing raw talent and providing platforms for emerging voices to shine. By fostering a culture of inclusivity and meritocracy, the industry can unlock a wealth of untapped potential and pave the way for a more diverse and vibrant cinematic landscape.<br/><br/>

      <h4>Originality Over Remakes</h4><br/>

      The trend of recycling past successes through remakes has become increasingly prevalent in Bollywood. However, this reliance on nostalgia often comes at the expense of innovation and originality. Filmmakers should embrace the challenge of forging new narratives and pushing the boundaries of creativity. By championing fresh perspectives and untold stories, Bollywood can carve out its unique identity in the global cinematic arena, fostering a culture of innovation and artistic exploration.<br/><br/>

      <h4>Rediscovering the Purpose of Cinema</h4><br/>

      At its core, cinema is a powerful medium for inspiring, awakening, and celebrating the human experience. Amidst the glitz and glamour, it's easy to lose sight of this fundamental truth. Bollywood must reconnect with its roots and reaffirm its commitment to fostering artistry, vision, and great content. By elevating storytelling to an art form and championing narratives that resonate with the soul, the industry can reclaim its place as a beacon of inspiration and cultural significance.<br/><br/>

      In this era of rapid change and evolving audience preferences, Bollywood stands at a crossroads. It's time to chart a new course, one guided by creativity, authenticity, and a deep sense of purpose. Only then can Bollywood truly fulfill its potential as a transformative force in the world of cinema.<br/><br/>

    </output>
    </section>
  );
}

export default Blog;