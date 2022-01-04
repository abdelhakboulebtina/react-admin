import "./user.css"
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@material-ui/icons";
import { Link } from "react-router-dom";
export default function User() {
    return (
        <div className="user">
            <div class="useTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                <button class="userAddButton">Create</button>
                </Link>
            </div>
            <div class="userContainer">
                <div class="userShow"> 
                <div class="userShowTop">
                    <img src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" class="userShowImage"/>
                <div class="userShowTopTitle">
                    <span class="userShowUserName">Anna Becker</span>
                    <span class="userShowUserTitle">Software Engineer</span>
                </div>
                </div>
                <div class="userShowBottom">
                    <span class="userShowTitle">Account Details</span>
                    <div class="userShowInfo">
                    <PermIdentity className="userShowIcon"/>
                    <span class="userShowInfoTitle">Annabeck99</span>
                    </div>
                    <div class="userShowInfo">
                    <CalendarToday className="userShowIcon"/>
                    <span class="userShowInfoTitle">10.12.1999</span>
                    </div>
                    <span class="userShowTitle">Contact details</span>
                    <div class="userShowInfo">
                    <PhoneAndroid className="userShowIcon"/>
                    <span class="userShowInfoTitle">+1 234 567 67</span>
                    </div>
                    <div class="userShowInfo">
                    <MailOutline className="userShowIcon"/>
                    <span class="userShowInfoTitle">annabeck992@gmail.com</span>
                    </div>
                    <div class="userShowInfo">
                    <LocationSearching className="userShowIcon"/>
                    <span class="userShowInfoTitle">New York | USA</span>
                    </div>
                </div>
                </div>
                <div class="userUpdate"> 
                <span class="userUpdateTitle">Edit</span>
                <form  class="userUpdateForm">
                    <div class="userUpdateLeft">
                        <div class="userUpdateItem">
                            <label >Username</label>
                            <input type="text" placeholder="annabeck99" className="userUpdateInput"/>
                        </div>
                        <div class="userUpdateItem">
                            <label >Full Name</label>
                            <input type="text" placeholder="Anna Becker" className="userUpdateInput"/>
                        </div>
                        <div class="userUpdateItem">
                            <label >Email</label>
                            <input type="text" placeholder="annabeck99@gmail.com" className="userUpdateInput"/>
                        </div>
                        <div class="userUpdateItem">
                            <label >phone</label>
                            <input type="text" placeholder="+1 234 567 67" className="userUpdateInput"/>
                        </div>
                        <div class="userUpdateItem">
                            <label >Address</label>
                            <input type="text" placeholder="New York | USA" className="userUpdateInput"/>
                        </div>
                    </div>
                    <div class="userUpdateRight">
                        <div class="userUpdateUpload">
                            <img src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" class="userUpdateImg"/>
                            <label for="file"><Publish className="userUpdateIcon"/></label>
                            <input type="file" style={{display:"none"}} id="file"/>
                        </div>
                        <button class="userUpdateButton">Update</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}
