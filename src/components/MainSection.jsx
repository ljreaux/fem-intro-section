import hero from "../assets/image-hero-desktop.png";
import mobileHero from "../assets/image-hero-mobile.png";
import databiz from "../assets/client-databiz.svg";
import audiophile from "../assets/client-audiophile.svg";
import meet from "../assets/client-meet.svg";
import maker from "../assets/client-maker.svg";

export default function MainSection() {
  const clients = [
    { name: "databiz", link: databiz },
    { name: "audiophile", link: audiophile },
    { name: "meet", link: meet },
    { name: "maker", link: maker },
  ];
  return (
    <main>
      <div>
        <div className="main-top">
          <h1>Make remote work</h1>
          <p>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
        </div>
        <button className="btn">Learn more</button>
        <div className="clients">
          {clients.map((client) => {
            return (
              <img src={client.link} alt={client.name} key={client.name} />
            );
          })}
        </div>
      </div>
      <img src={hero} srcSet={`${mobileHero} 500w, ${hero}`} alt="hero image" />
    </main>
  );
}
