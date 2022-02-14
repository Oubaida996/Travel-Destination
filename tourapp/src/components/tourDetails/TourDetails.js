import { useParams } from "react-router-dom";
import { useState } from "react";




function TourDetails(props) {
  let {id} =useParams();

  const [show ,setShow] =useState(false);

  function handleShow(){
    setShow(!show);
  }

  let newArr = props.data.filter(item =>{
    return id === item.id;
  });
  // let item = props.data;
  // console.log(item);
  return (
    
    <div className="TourDetails">
      <h2>{newArr[0].name}</h2>
      <img src={newArr[0].image} alt="" />
      <p>
        {!show ?newArr[0].info : newArr[0].info.substring(0 ,300)}
        {!show?<button onClick={handleShow}>less</button> : <button onClick={handleShow}>read more</button>}
      </p>
    </div>
  );
}

export default TourDetails;
