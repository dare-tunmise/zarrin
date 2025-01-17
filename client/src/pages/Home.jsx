import Heroimage from '../assets/hero-image.png'
import Vrface from '../assets/vrface.jpg'
const Home = () => {
    
    return ( 
        <>
            <div className="hero">
                <div className='hero-text'>
                    <h5>Featured Post</h5>
                    <h1>How AI Will Change the Future</h1>
                    <p>The future of AI will see home robots having enhanced intelligence, increased capabilities, and becoming more personal and possibly cute. For example, home robots will overcome navigation, direction</p>
                    <a href="">Read More</a>
                </div>

                <div className='hero-image'>
                    <img src={Heroimage} alt="" />
                </div>
            </div>
            {/* feature */}
            <div className="features">
                <div className="feature">
                    <div className="featured-img">
                        <img src={Vrface} alt="" />
                    </div>
                    <div className="featured-post">
                        <div className="header">
                            <h5>DEVELOPMENT</h5>
                            <span>16 March 2023</span>
                        </div>
                        <h2>How to make a Game look more attractive with New VR & AI Technology</h2>
                        <p>Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.
                        </p>
                        <a href="">Read More</a>
                    </div>
                </div>
            </div>
            {/* latest post */}
            <div className="latest">
               <div className="header">
                    <h1>Our Recent Post</h1>
                    <a href="">View all</a>
                </div>
                <div className="grid-container">
                    <div className="grid-item item1">
                        <div className='item1-img'><img src={Vrface} alt="" /></div>
                        <div className='item1-content'>
                            <div className="header">
                                <h5>DEVELOPMENT</h5>
                                <span>16 March 2023</span>
                            </div>
                            <h2>How to make a Game look more attractive with New VR & AI Technology</h2>
                           <p>Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.
                          </p>
                           <a href="">Read More</a>
                        </div>
                    </div>
                    <div class="grid-item item2">2</div>
                    <div class="grid-item item3">3</div>
                    <div class="grid-item item4">4</div>
                </div>
            </div>
        </>
     );
}
 
export default Home;