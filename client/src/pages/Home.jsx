import Heroimage from '../assets/hero-image.png'
import Vrface from '../assets/vrface.jpg'
import data from './data'
import BlogCard from '../components/BlogCard'



const Home = () => {

    const entryElements = data.map((post)=> {

        return(
        <BlogCard 
          key={post.id}
          img={post.img}
          tag={post.tag}
          date={post.date}
          title={post.title}
          snippet={post.snippet}
        
        />
        )
    })
    
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
            {/* latest post or our recents post*/}
            <div className="latest">
               <div className="header">
                    <h1>Our Recent Post</h1>
                    <a href="">View all</a>
                </div>
                <div className="grid-container">
                    { entryElements.slice(0, 4) }
                </div>
            </div>

            <div className="popular">
                <div className="header">
                    <h1>Popular Post</h1>
                    <a href="">View all</a>
                </div>
                <div className="grid-container">
                   { entryElements.slice(4, 10) }
                    {/* <div class="grid-item item">
                        <div className='item-img'><img src="https://images.unsplash.com/photo-1552318965-6e6be7484ada?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                        <div className='item-content'>
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
                    <div class="grid-item item">
                        <div className='item-img'><img src="https://images.unsplash.com/photo-1552318965-6e6be7484ada?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                        <div className='item-content'>
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
                    <div class="grid-item item">
                        <div className='item-img'><img src="https://images.unsplash.com/photo-1552318965-6e6be7484ada?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
                        <div className='item-content'>
                            <div className="header">
                                <h5>DEVELOPMENT</h5>
                                <span>16 March 2023</span>
                            </div>
                            <h2>How to make a Game look more attractive with New VR & AI Technology</h2>
                           <p>Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.
                          </p>
                           <a href="">Read More</a>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
     );
}
 
export default Home;