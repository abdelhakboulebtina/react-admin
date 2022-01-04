import { Language, NotificationsNone, Settings } from "@material-ui/icons"
import "./topbar.css"
export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topBarWrapper">
                <div className="topLeft">
                    <div className="logo">lamaadmin</div>
                </div>
                <div className="topRight" >
                    <div class="topbarIconsContainer">
                        <NotificationsNone/>
                        <span className="topIconBag">2</span>
                        
                    </div>
                    <div class="topbarIconsContainer">
                        <Language/>
                        <span className="topIconBag">2</span>
                        
                    </div>
                    <div class="topbarIconsContainer">
                        <Settings/>
                    </div>
                    <img  className="topAvatar" src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/>
                </div>
            </div>
        </div>
    )
}