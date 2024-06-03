import "./topbar.css"
export default function TopBar() {
  return (
    <div className='top'>
<div className="topLeft"><i class="fa-brands fa-square-facebook"></i><i class="fa-brands fa-square-twitter"></i>
<i class="fa-brands fa-square-pinterest"></i><i class="fa-brands fa-square-instagram"></i></div>
<div className="topCenter">
    <ul className="topList">
        <li className="topListItem">HOME</li>
        <li className="topListItem">ABOUT</li>
        <li className="topListItem">CONTACT</li>
        <li className="topListItem">WRITE</li>
<li className="topListItem">LOGOUT</li>
    </ul>
</div>
<div className="topRight"></div>
    </div>
  )
}
