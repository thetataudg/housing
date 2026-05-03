import Image from "next/image";

export default function Home() {
  return (
    <main>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center gap-2" href="/">
            <Image src="/coa.png" alt="Theta Tau Coat of Arms" width={30} height={30} />
            Delta Gamma Housing Corporation
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" href="/">Home</a>
            </div>
          </div>
        </div>
      </nav>
    </main>
  );
}
