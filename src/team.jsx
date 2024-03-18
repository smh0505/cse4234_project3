import zealand from "./assets/noodle_headshot.jpeg";
import justin from "./assets/Spoingus.png";
import liam from "./assets/ThisguIcon.jpg";
import minho from "./assets/minho.png";
import ben from "./assets/Snek2.jpg";

let members = [
  {
    name: "Zealand Brennan",
    info: "I really love what I do, and dedicate myself whole-heartedly to every project I am given.",
    thumb: zealand,
    alt: "Zealand alt headshot",
  },
  {
    name: "Justin Swanson",
    info: "I am most interested in fields such as: machine learning, and autonomous systems.",
    thumb: justin,
    alt: "Justin's headshot",
  },
  {
    name: "Liam Sapper",
    info: "I enjoy working with databases and html. I'm fairly proficient in java, python, and html.",
    thumb: liam,
    alt: "Liam's headshot",
  },
  {
    name: "Minho Son",
    info: "I am originally born in South Korea and recently naturalized to the United States.",
    thumb: minho,
    alt: "Minho's headshot",
  },
  {
    name: "Ben Allerton",
    info: "Hi all, I am currently a Junior CS student who is currently enjoying front end web development much more than Java or Python",
    thumb: ben,
    alt: "Ben's headshot",
  },
];

export default function Team() {
  return (
    <main className="products">
      <section className="centered-content">
        <h1>The Team</h1>
      </section>

      <section className="team-section">
        {members.map((member) => (
          <article key={member.name} className="team-member">
            <img src={member.thumb} alt={member.alt} className="headshot" />
            <h3>{member.name}</h3>
            <div className="info">
              <p>{member.info}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
