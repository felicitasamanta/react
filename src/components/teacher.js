function Teacher(props) {
  const firstName = props.teacher.firstName;
  const lastName = props.teacher.lastName;
  const profession = props.teacher.profession;
  const address = props.teacher.address;
  const zipCode = props.teacher.zipCode;

  const image = props.teacher.image;

  return (
    <div class="col-md-5 col-sm-12 bg-white border border-secondary border-opacity-50 d-flex justify-content-between p-2 flex-wrap g-3">
      <div class="flex-grow-1 d-flex justify-content-center ">
        <img
          src={image}
          alt="react logo"
          style={{ height: 100, width: 100 }}
          class="rounded-circle"
        ></img>
      </div>
      <div class="flex-grow-1">
        <h3 class="fs-6 ">
          <strong>{firstName}</strong> {lastName}
        </h3>
        <p>
          <small>
            {profession} <br></br>
            {address}
            <br></br> {zipCode}
          </small>
        </p>
      </div>
    </div>
  );
}

export default Teacher;
