import zarrinLogo from '../assets/zarrinLogo.svg'

const Footer = () => {
    return ( 
        <footer>
            <div className="footer-one">
                <h2>Get our stories delivered From us to your inbox weekly.</h2>
                <div className="form">
                    <input type="email" name="" placeholder="Your Email" id="" />
                    <button>Get Started</button>
                </div>
                <p>Get a response tomorrow if you submit by 9pm today. If we received after 9pm will get a reponse the following day.</p>
            </div>
            <div className="logo">
                <img src={zarrinLogo} alt="" />
                <span>Zarrin</span>
            </div>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact Us</a></li>
            </ul>

        </footer>
     );
}
 
export default Footer;