import Footer from "../footer/Footer";
import Header from "../header/Header";
import Tours from "../tours/Tours";
import "./Home.css";

function Home(props) {
  //console.log(props.dataFromAppComponent);
  return (
    <div className="home">
      <Header />
      
      {props.dataFromAppComponent.map((item) => {
        return <Tours key={item.id} dataFromHomeComponent={item} />;
      })}
      <Footer />

    </div>

    
  );
}

export default Home;
