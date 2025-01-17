import Heroimage from '../assets/hero-image.png'
const Home = () => {
    
    return ( 
        <div className="main">
            <div className="hero">
                <div>
                    <p>Featured Post</p>
                    <h1>How AI Will Change the Future</h1>
                    <p>The future of AI will see home robots having enhanced intelligence, increased capabilities, and becoming more personal and possibly cute. For example, home robots will overcome navigation, direction</p>
                    <a href="">Read More</a>
                </div>

                <div>
                    <img src={Heroimage} alt="" />
                </div>
            </div>
        </div>
     );
}
 
export default Home;