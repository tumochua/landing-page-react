import React from "react";
import { useState, useEffect } from "react";
function Course(props) {
  const [add, setAdd] = useState("");
  // const [couse, setCouse] = useState([]);
  const handleOnclick = () => {
    props.handlAddCourse(add);
    setAdd("");
  };
  //   useEffect(() => {
  //     console.log(props);
  //     setCouse(props.course);
  //   }, []);
  const handlOnchange = (e) => {
    setAdd(e.target.value);
  };
  return (
    <>
      <label>Name:</label>
      <input value={add} onChange={handlOnchange} />
      <button onClick={handleOnclick}>ADD</button>
      {/* <div>
        {couse &&
          couse.length > 0 &&
          couse.map((item, index) => {
            return <div key={item.id}>{item.name}</div>;
          })}
      </div> */}
    </>
  );
}
export default Course;
