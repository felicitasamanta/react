import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Course from "./components/course";
import coursesData from "./data/coursesData";
import teachersData from "./data/teachersData";
import Teacher from "./components/teacher";
import SpecialOffers from "./components/specialOffer";
import specialOffersData from "./data/specialOffersData";
//jei importuojam css, rasome galune, jei js, nerasome - taip atskiria dokumentus

function App() {
  const courses = coursesData;
  const specialOffers = specialOffersData;

  const teachers = teachersData;

  const coursesAll = [];
  for (let i = 0; i < courses.length; i++) {
    coursesAll.push(
      // ar cia butinass div??? jei taip ,ar galima deti div su visom klasem
      // <div class="d-flex flex-wrap justify-content-around pt-4 text-light fw-bolder gap-3 px-4 flex-shrink-1">

      <Course course={courses[i]}></Course>
    );
  }
  const specialOffersAll = [];
  for (let i = 0; i < specialOffers.length; i++) {
    specialOffersAll.push(
      <SpecialOffers specialOffer={specialOffers[i]}></SpecialOffers>
    );
  }
  
  return (
    <div class="container mt-4 ">
      <section class="text-center mt-5">
        <h2 class="fs-4">Programavimo kursai</h2>
        <div class="d-flex flex-wrap justify-content-around pt-4 text-light fw-bolder gap-3 px-4 flex-shrink-1">
          {coursesAll}
        </div>
        <div class=" d-flex row mt-5">
          <h2 class="fs-4"> Specialus pasiūlymas</h2>
          <div class="col-6 d-flex flex-grow-1">{specialOffersAll}</div>
        </div>
      </section>

      <section class="mt-5 h-100 bg-secondary bg-opacity-10 pb-5">
        <h2 class="fs-4">Mūsų dėstytojai</h2>
        <hr></hr>
        <div class="d-flex flex-wrap justify-content-center px-2 gap-3 ">
          <Teacher teacher={teachers[0]}></Teacher>
          <Teacher teacher={teachers[1]}></Teacher>
          <Teacher teacher={teachers[2]}></Teacher>
          <Teacher teacher={teachers[3]}></Teacher>
          <div></div>
        </div>
      </section>
    </div>
  );
}

export default App;
