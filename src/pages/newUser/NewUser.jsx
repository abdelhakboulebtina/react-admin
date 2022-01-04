import "./newUser.css"

export default function NewUser() {
    return (
        <div className="newUser">
            <h1 class="newUserTitle">New User</h1>
            <form  class="newUserForm">
                <div class="newUserItem">
                    <label >Username</label>
                    <input type="text" placeholder="John"/>
                </div>
                <div class="newUserItem">
                    <label >Full Name</label>
                    <input type="text" placeholder="John Smith"/>
                </div>
                <div class="newUserItem">
                    <label >Email</label>
                    <input type="email" placeholder="John@gmail.com"/>
                </div>
                <div class="newUserItem">
                    <label >Password</label>
                    <input type="password" placeholder="password" />
                </div>
                <div class="newUserItem">
                    <label >Phone</label>
                    <input type="text" placeholder="+1 123 456 78"/>
                </div>
                <div class="newUserItem">
                    <label >Address</label>
                    <input type="text" placeholder="New York | USA"/>
                </div>
                <div class="newUserItem">
                <label >Gender</label>
                    <div class="newUserGender">
                    <input type="radio" name="gender" id="male" value="male"/>
                    <label for="male">Male</label>
                    <input type="radio" name="gender" id="female" value="female"/>
                    <label for="female">Female</label>
                    <input type="radio" name="gender" id="other" value="other"/>
                    <label for="other">Other</label>
                    </div>
                </div>
                <div class="newUserItem">
                    <label >Active</label>
                    <select name="active" id="active" class="newUserSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button class="newUserButton">Create</button>
            </form>
        </div>
    )
}
