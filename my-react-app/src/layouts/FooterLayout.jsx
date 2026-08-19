export default function FooterLayout() {
  return (
    <footer className="bg-dark text-white text-center text-md-start py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-3 mb-md-0">
            <h5 className="text-uppercase">My Project</h5>
            <p className="text-secondary">
              Building lightweight and accessible web experiences.
            </p>
          </div>

          <div className="col-md-6 text-md-end">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled d-flex justify-content-md-end justify-content-center gap-3">
              <li><a href="#" className="text-white text-decoration-none">Home</a></li>
              <li><a href="#" className="text-white text-decoration-none">About</a></li>
              <li><a href="#" className="text-white text-decoration-none">Services</a></li>
              <li><a href="#" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary my-3" />

        <div className="text-center text-secondary small">
          © {new Date().getFullYear()} My Project. All rights reserved.
        </div>
      </div>
    </footer>
  );
}