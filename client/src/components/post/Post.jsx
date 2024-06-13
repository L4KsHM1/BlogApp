import './post.css'

export default function Post() {
    return (
        <div className="post">
            <img 
            className='postImg'
            src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="noimage" 
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur, adipisicing 
                elit. Laboriosam recusandae nihil dolores maiores cupiditate
                 quidem eius qui fuga, minima perspiciatis asperiores aspernatur illo quibusdam,
                 ex ipsum doloribus dolor architecto esse. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Harum reprehenderit molestiae tempora ad eligendi id numquam ut optio, praesentium aspernatur doloribus cumque voluptatum vero dolores, incidunt quam fugiat natus fuga.
            </p>
        </div>
    )
}