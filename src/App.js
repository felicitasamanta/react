import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import image1 from "./assets/images/1.png";
import image2 from "./assets/images/2.png";
import image3 from "./assets/images/3.png";
import image4 from "./assets/images/4.png";

function App() {
  return (
    <div class="container mt-4 ">
      <section class="text-center ">
        <h2 class="fs-4">Programavimo kursai</h2>
        <div class="d-flex flex-wrap justify-content-around pt-4 text-light fw-bolder gap-3 px-4 flex-shrink-1">
          <div class="card col-md-3 col-sm-5 rounded-0 flex-grow-1">
            <div class="card-header bg-primary rounded-0 ">
              <h3 class="fs-6 m-0 "> React krusai</h3>
            </div>
            <div class="card-body bg-opacity-50 bg-primary">
              <p class="card-text fs-6">
                nuo <span class="fs-1">9.99</span> EUR / mėn.
              </p>
            </div>
          </div>
          <div class="card col-md-3 col-sm-5 rounded-0 flex-grow-1 ">
            <div class="card-header rounded-0  bg-info ">
              <h3 class="fs-6 m-0"> Angular.JS kursai</h3>
            </div>
            <div class="card-body bg-opacity-50 bg-info">
              <p class="card-text fs-6 ">
                nuo <span class="fs-1">29.99</span> EUR / mėn.
              </p>
            </div>
          </div>
          <div class="card col-md-3 col-sm-12 rounded-0  flex-grow-1">
            <div class="card-header rounded-0 bg-primary">
              <h3 class="fs-6 m-0"> PHP kursai</h3>
            </div>
            <div class="card-body bg-opacity-50 bg-primary">
              <p class="card-text fs-6 ">
                nuo <span class="fs-1">49.99</span> EUR / mėn.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="mt-5 h-100 bg-secondary bg-opacity-10 pb-5">
        <h2 class="fs-4">Mūsų dėstytojai</h2>
        <hr></hr>
        <div class="d-flex flex-wrap justify-content-center px-2 gap-3 ">
        <div class="col-md-5 col-sm-12 bg-white border border-secondary border-opacity-50 d-flex justify-content-between p-2 flex-wrap g-3">
            <div class="flex-grow-1 d-flex justify-content-center ">
              <img
                src={image1}
                alt="react logo"
                style={{ height: 100, width: 100 }}
                class="rounded-circle"
              ></img>
            </div>
            <div class="flex-grow-1">
              <h3 class="fs-6 ">
                <strong>Michael</strong> Deo
              </h3>
              <p>
                <small>
                  Ui UX Designer <br></br>
                  795 Folsom Ave, Suite 600 San Francisco, CADGE <br></br> 94107
                </small>
              </p>
            </div>
          </div>
          <div class="col-md-5 col-sm-12 bg-white border border-secondary border-opacity-50 d-flex justify-content-between p-2 flex-wrap g-3">
            <div class="flex-grow-1 d-flex justify-content-center ">
              <img
                src={image2}
                alt="react logo"
                style={{ height: 100, width: 100 }}
                class="rounded-circle"
              ></img>
            </div>
            <div class="flex-grow-1">
              <h3 class="fs-6 ">
                <strong>Michael</strong> Deo
              </h3>
              <p>
                <small>
                  Ui UX Designer <br></br>
                  795 Folsom Ave, Suite 600 San Francisco, CADGE <br></br> 94107
                </small>
              </p>
            </div>
          </div>
          <div class="col-md-5 col-sm-12 bg-white border border-secondary border-opacity-50 d-flex justify-content-between p-2 flex-wrap g-3">
            <div class="flex-grow-1 d-flex justify-content-center ">
              <img
                src={image3}
                alt="react logo"
                style={{ height: 100, width: 100 }}
                class="rounded-circle"
              ></img>
            </div>
            <div class="flex-grow-1">
              <h3 class="fs-6 ">
                <strong>Michael</strong> Deo
              </h3>
              <p>
                <small>
                  Ui UX Designer <br></br>
                  795 Folsom Ave, Suite 600 San Francisco, CADGE <br></br> 94107
                </small>
              </p>
            </div>
          </div>
          <div class="col-md-5 col-sm-12 bg-white border border-secondary border-opacity-50 d-flex justify-content-between p-2 flex-wrap g-3">
            <div class="flex-grow-1 d-flex justify-content-center "> 
              <img
                src={image4}
                alt="react logo"
                style={{ height: 100, width: 100 }}
                class="rounded-circle "
              ></img>
            </div>
            <div class="flex-grow-1">
              <h3 class="fs-6 ">
                <strong>Michael</strong> Deo
              </h3>
              <p>
                <small>
                  Ui UX Designer <br></br>
                  795 Folsom Ave, Suite 600 San Francisco, CADGE <br></br> 94107
                </small>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
