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
                <span className="postTitle">Lorem ipsum dolor, sit amet consectetur
                     adipisicing elit. Assumenda,Lorem ipsum dolor sit amet.
                     voluptatibus?</span>
            </div>
        </div>
    )
}