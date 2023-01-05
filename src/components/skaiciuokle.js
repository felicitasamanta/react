import { useState } from "react";

function Skaiciuokle() {
  const [sk, setSk] = useState(0);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const clickHandler = () => {
    setSk(sk + 1);
    console.log("Paspaudė " + (sk + 1) + " kartus");
  };
  const changeXHandler = (event) => {
    setX(event.target.value);
  };
  const changeYHandler = (event) => {
    setY(event.target.value);
  };

  return (
    <div className="col-md-12">
        <div className="row">
            <div className="col-md-6">
       
    <div className="card mt-3">
      Čia bus skaičiuoklė <br />
      Skaičius: {sk} <br />
      {x} * {y} <br></br>
      <input type="text" value={x} onChange={changeXHandler} /> <br />
      <input type="text" value={y} onChange={changeYHandler} /> <br />
      <button className="btn btn-success" onClick={clickHandler}>
        Pridėti vienetą
      </button>
    </div>
    </div>
    </div>
    </div>
  );
}
export default Skaiciuokle; //galima eksportuoti daug funkciju is vieno failo ir parodom, kaip ekportuojam;
