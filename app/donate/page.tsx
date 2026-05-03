import SiteNavbar from "../SiteNavbar";

export default function DonatePage() {
  return (
    <main>
      <SiteNavbar
        brandText="DG Housing Corporation"
        items={[
          { label: "Home", href: "/" },
          { label: "Donate", href: "/donate", active: true },
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
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.65)', zIndex: 2, pointerEvents: 'none' }} />
        <div className="container py-5" style={{ position: 'relative', zIndex: 3 }}>
          <h1 className="display-4 fw-bold">Make a Donation</h1>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-lg-9 text-start">
              <h2 className="mb-3">Donation coming soon</h2>
              <p className="text-muted mb-0">Please check back soon.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
