import "./singlePost.css"

export default function SinglePost() {
  return (
  <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="singlePostImg" />
      </div>

      <h1 className="singlePostTitle">Lorem ipsum dolor sit amet.
        <div className="singlePostEdit">
        <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
        <i className="singlePostIcon fa-regular fa-trash-can"></i>
        </div>
      </h1>
      <div className="singlePostIcon">
        <span className="singlePostAuthor">Author: <b>Lakshmi</b></span>
        <span className="singlePostDate">1 hour ago</span>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti 
        soluta asperiores quia nemo ullam a consequuntur nesciunt dignissimos labore, eius molestias et quaerat error culpa! Modi 
        architecto voluptate accusantium veniam!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, eaque nostrum minus saepe officiis sequi quam veniam 
        itaque enim voluptatum dolores a nisi autem totam ipsa architecto corporis est provident unde, quia dolor voluptas! Repellat
         quas doloremque, dicta eaque omnis sint expedita, voluptatum, repudiandae itaque iusto nemo 
        quisquam quia voluptatibus Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam esse repellendus quos maxime beatae sed id dolorum possimus sit quis quisquam magni nulla, doloribus temporibus provident est nostrum modi vitae facilis libero quidem? Perspiciatis ex consequatur esse deleniti unde mollitia quidem. Magnam distinctio nobis blanditiis 
        ratione magni quisquam iusto dolore!.</p>
        
  </div>
);
}