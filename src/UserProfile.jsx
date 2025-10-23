import style from './CSS/UserProfile.module.css';

function UserProfile() {
    return (
        <div>
            {/* <h>User Profile</h> */}
            <div className={style.card}>
                <img className={style.img} src="https://img.freepik.com/premium-vector/vector-mens-fashion-logo_1103520-161.jpg?w=826" alt="User Profile" />
                <div className={style.textWrap}>
                    <h2>John Doe</h2>
                    <p>Software Engineer at TechCorp</p>
                </div>

            </div>
        </div>
    )
}

export default UserProfile;