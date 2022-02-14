import "./Tours.css";
import Tour from "./tour/Tour";


function Tours(props) {
    return (
        <>
<h1>dddddd</h1>
            {
                props.dataFromHome.map(item => {
                    return <Tour key={item.id} objectFromTours={item}  />
                })

            }
        </>
    )
}

export default Tours