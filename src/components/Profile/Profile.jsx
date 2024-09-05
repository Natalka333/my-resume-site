import images from '../../assets/myImage.jpg'

const Profile = () => {
    return (
        <div>
            <img src={images} alt="My Profile" style={{ width: '250px' }} />
        </div>
    )
}

export default Profile