import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav>
        <div>
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                padding: "5px",
                fontSize: "20px",
                backgroundColor: "gray",
                height: "30px",
              }}
            >
              <div>
                <Link to="/">Home</Link>
              </div>
              <div>
                <Link to="/form">Form</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
