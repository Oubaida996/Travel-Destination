import { Link } from "react-router-dom";



function Tour(props) {
    let item = props.objectFromTours;
    // console.log(item , "Item");

    // console.log(props , "kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");

    return (


        <div className="tour">
            {/* <button onClick={props.funFromTours(item)}>hhhhhhhh</button> */}
            <Link to={`city/${item.id}`}>{item.name}
            <img src={item.image} alt="" />
            </Link>
           
        </div>



    );
}

export default Tour