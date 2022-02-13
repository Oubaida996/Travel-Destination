import "./Tours.css";

function Tours(props) {
    let item =props.dataFromHomeComponent ;
    console.log();
  return (
      <>
      <div className="tour">
          <h2>{item.name}</h2>
          <img src={item.image} alt="" />
      </div>
      </>
    
  )
}

export default Tours