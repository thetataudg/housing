import Image from "next/image";

const officers = [
  { name: "Roen Wainscoat", title: "President", initials: "RW", photo: "/roen.png" },
  { name: "Trevor Hunter", title: "Vice President", initials: "TH", photo: "/trevor.jpeg" },
  { name: "Trent Ward", title: "Treasurer", initials: "TW" },
  { name: "Om Bamane", title: "Secretary", initials: "OB" },
  { name: "Brooke Kubosh", title: "Chapter Representative", initials: "BK", photo: "/brooke.png" },
];

export default function Home() {
  return (
    <main>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center gap-2" href="/">
            <Image src="/coa.png" loading="eager" alt="Theta Tau Coat of Arms" width={36} height={36} />
            Delta Gamma Housing Corporation
          </a>

          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse d-lg-flex justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" href="#">Home</a>
              <a className="nav-link" href="#about">About</a>
              <a className="nav-link" href="#officers">Officers</a>
              <a className="nav-link" href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <section
        className="hero text-center text-white d-flex align-items-center"
        style={{
          backgroundImage: "url('/hero_bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '320px',
          position: 'relative',
        }}
      >
        <div style={{position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.55)', zIndex: 2, pointerEvents: 'none'}} />
        <div className="container py-5" style={{position: 'relative', zIndex: 3}}>
          <h1 className="display-4 fw-bold">Delta Gamma Housing Corporation</h1>
          <p className="lead mb-4">Theta Tau Fraternity - Arizona State University, Tempe, AZ</p>
          <div className="established mb-4"><i>Established May 2, 2026</i></div>
        </div>
      </section>

      <section id="officers" className="py-5">
        <div className="container">
          <h2 className="mb-4">Board of Directors</h2>
          <div className="row g-4 justify-content-center">
            {officers.map((o) => (
              <div key={o.name} className="col-12 col-sm-6 col-md-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body text-center">
                    {o.photo ? (
                      <Image
                        src={o.photo}
                        alt={o.name}
                        width={84}
                        height={84}
                        className="rounded-circle mx-auto mb-3"
                        style={{ objectFit: 'cover' }}
                      />
                    ) : (
                      <div className="avatar mx-auto mb-3">{o.initials}</div>
                    )}
                    <h5 className="card-title mb-1">{o.name}</h5>
                    <p className="text-muted mb-0">{o.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-5 bg-light">
        <div className="container">
          <h3>About</h3>
          <p>
            Delta Gamma Housing Corporation supports Theta Tau Fraternity at Arizona State University by
            providing member housing and a space for community, leadership, and academic support.
          </p>
        </div>
      </section>

      <section id="contact" className="py-4">
        <div className="container text-center">
          <p className="mb-0">Questions? Email the board at <a href="mailto:housing@thetatau-dg.org">housing@thetatau-dg.org</a></p>
        </div>
      </section>
    </main>
  );
}
