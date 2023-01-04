//grazina komponenta, DOM'o elementa
function Course(props) {
  const title = props.course.title;
  const price = props.course.price;
  const cssClass1 = "card-header rounded-0 " + props.course.cssClass1;
  const cssClass2 = "card-body bg-opacity-50 " + props.course.cssClass2;

  return (
    <div class="card col-md-3 col-sm-5 rounded-0 flex-grow-1">
      <div class={cssClass1}>
        <h3 class="fs-6 m-0 ">{title}</h3>
      </div>
      <div class={cssClass2}>
        <p class="card-text fs-6">
          nuo <span class="fs-1">{price}</span> EUR / mėn.
        </p>
      </div>
    </div>
  );
}
export default Course;
