const BlogCard = ({ img, tag, date, titile, snippet}) => {
    return ( 
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
     );
}
 
export default BlogCard;