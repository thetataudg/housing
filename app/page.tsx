import Image from "next/image";
import SiteNavbar from "./SiteNavbar";

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
      <SiteNavbar
        brandText="DG Housing Corporation"
        items={[
          { label: "Home", href: "/", active: true },
          { label: "Donate", href: "/donate" }
        ]}
      />

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
        <div style={{position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.65)', zIndex: 2, pointerEvents: 'none'}} />
        <div className="container py-5" style={{position: 'relative', zIndex: 3}}>
          <h1 className="display-4 fw-bold">Delta Gamma Housing Corporation</h1>
          <p className="lead mb-4">Theta Tau Fraternity - Arizona State University, Tempe, AZ</p>
          <div className="mb-4"><i>Established May 2, 2026</i></div>
        </div>
      </section>

      <section id="about" className="py-5 bg-light">
        <div className="container">
          <div className="about-section">
            <div className="about-copy">
              <h3><strong>Building a home for Delta Gamma</strong></h3>
              <p className="about-lead">
                The Theta Tau Delta Gamma Housing Corporation was founded with a single mission: to put our chapter in a house it will own forever.
              </p>
              <p>
                Founded by alumni of the Delta Gamma Chapter at Arizona State University, the Housing Corporation is an independent nonprofit purpose-built to protect and grow the chapter's housing fund. Separating housing assets from undergraduate leadership means the fund is never raided, never mismanaged, and never starts over.
              </p>
              <p>
                The path to a chapter house is built on decades of disciplined stewardship. Delta Gamma has called ASU home since 1995, and this corporation is the first formal step toward owning a piece of it. We are beginning that work now, so the brothers who come after us won't have to start from zero.
              </p>
              <p className="mb-0">
                A chapter house is a recruitment advantage, a gathering place, and proof that this chapter is here to stay. If you believe DG has earned one, we want you involved.
              </p>

              <div className="mt-4">
                <a className="btn btn-primary btn-lg" href="/donate">
                  Donate
                </a>
              </div>
            </div>

            <div className="about-panel">
              <div className="card">
                <div className="card-body">
                  <div className="text-uppercase text-muted small fw-bold">Mission</div>
                  <div className="h5 fw-bold">Permanent Housing</div>
                  <p className="mb-0 text-muted small">Purchase and preserve a home for our future brothers.</p>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <div className="text-uppercase text-muted small fw-bold">Structure</div>
                  <div className="h5 fw-bold">Alumni-led Nonprofit</div>
                  <p className="mb-0 text-muted small">Alumni-run so the fund outlasts any single leadership term.</p>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <div className="text-uppercase text-muted small fw-bold">Administration</div>
                  <div className="h5 fw-bold">House stewardship</div>
                  <p className="mb-0 text-muted small">Administer the chapter house after purchase so it stays maintained and ready for the brothers who will call it home.</p>
                </div>
              </div>
            </div>
          </div>
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

      <section id="get-involved" className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-lg-9 text-start">
              <h2 className="mb-3">Get Involved</h2>
              <p className="text-muted mb-3">
                <strong>This is your corporation too. </strong><br /><br />
                Every initiated alumnus of the Delta Gamma Chapter in good standing is automatically a Member of the Theta Tau Delta Gamma Housing Corporation: no application and no fee. Membership comes with voting rights on the decisions that matter most: electing the Board of Directors, amending bylaws, and approving major milestones like the purchase of a house. <br /><br />
                We also welcome all active fraternity members and alumni to attend our meetings as participants. You don't need to be on the Board to stay informed, ask questions, or weigh in during open discussion. The more alumni who are engaged, the stronger this organization becomes.<br /><br />
                The fastest way to make a difference is to donate. <br /><br />
                Chapter fees and assessments build our fund steadily over time, but a direct alumni donation is the only thing that immediately shortens the timeline to a house. Every dollar contributed is a dollar that doesn't have to wait to be collected one semester at a time. <br /><br />
                Getting a chapter house has never been something any one class or Board could do alone. It takes alumni who stay connected, who give when they can, and who remember what this chapter meant to them and their time at ASU. The housing fund is a shared asset, and building it is a shared responsibility.
              </p>
              <div className="d-flex flex-column flex-sm-row justify-content-start gap-3 mt-4">
                <a className="btn btn-outline-dark" href="mailto:general@thetatau-dg.org?subject=Housing%20Corporation%20Inquiry">
                  Contact Us
                </a>
                <a className="btn btn-primary" href="/donate">
                  Donate
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-4">
        <div className="container text-center">
          <p className="mb-0">
            Questions? Email us at <a href="mailto:general@thetatau-dg.org?subject=Housing%20Corporation%20Inquiry">general@thetatau-dg.org</a>
          </p>
        </div>
      </section>
    </main>
  );
}
