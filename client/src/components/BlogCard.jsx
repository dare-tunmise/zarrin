const BlogCard = ({ img, tag, date, title, snippet}) => {
    return ( 
        <div class="grid-item item">
            <div className='item-img'><img src={img} alt="" /></div>
            <div className='item-content'>
                <div className="header">
                    <h5>{tag}</h5>
                    <span>{date}</span>
                </div>
                <h2>{title}</h2>
            <p>{ snippet }</p>
            <a href="">Read More</a>
            </div>
        </div>
     );
}
 
export default BlogCard;