import "./Footer.css";
import { FaGithub } from 'react-icons/fa';

function Footer(props) {
  return (
    <div className="footer">
        <p>Created By : Obieda Jehad</p>
        <div className="aDiv"><FaGithub /> <a href="https://github.com/Oubaida996" className="a"> gitHub</a></div>
    </div>
  );
}

export default Footer;
