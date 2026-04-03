import "bootstrap/dist/css/bootstrap.min.css";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";
import Product from "./Product";
import "./App.css";

// ── Provide your first name here 
const firstName = "Alele Chi";

function App() {
  return (
    <div className="app-root">
      {/* Ambient background blobs */}
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />

      <div className="container py-5">
        {/* Header */}
        <header className="text-center mb-5">
          <p className="store-eyebrow">PREMIUM AUDIO</p>
          <h1 className="store-title">The Sound Shop</h1>
        </header>

        {/* Product Card */}
        <div className="row justify-content-center">
          <div className="col-12 col-md-9 col-lg-7">
            <div className="product-card">
              {/* Badge */}
              <span className="badge-new">New Drop</span>

              {/* Image */}
              <Image />

              {/* Body */}
              <div className="card-body-inner">
                <Name />

                <div className="divider" />

                <Description />

                <div className="card-footer-row">
                  <Price />
                  <button className="btn-buy">
                    <span>Add to Cart</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Greeting Section */}
        <div className="greeting-section text-center mt-5">
          <div className="greeting-pill">
            {firstName ? (
              <>
                <span className="greeting-wave">👋</span>
                <span className="greeting-text">
                  Hello, <strong>{firstName}</strong>! Enjoy your shopping.
                </span>
              </>
            ) : (
              <>
                <span className="greeting-wave">✨</span>
                <span className="greeting-text">Hello, there!</span>
              </>
            )}
          </div>

          {/* Conditional image when name is provided */}
          {firstName && (
            <div className="welcome-image-wrap mt-4">
              <img
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=700&q=80"
                alt="Welcome"
                className="welcome-image"
              />
              <p className="welcome-caption">
                Handpicked for you, {firstName} 🎧
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;