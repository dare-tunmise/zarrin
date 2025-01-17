import Heroimage from '../assets/hero-image.png'
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
        </>
     );
}
 
export default Home;