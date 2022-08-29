import React from 'react'
import { Link , Navigate } from 'react-router-dom'
import Logo from "../assets/img/logo.png"
// import LoginButton from '../components/LoginButton';


const Landing = ({ isAuthenticated }) => {
    if (isAuthenticated) {
        return <Navigate to="/admin" />;
    }

return (
    <section className="landing">
        <div className="dark-overlay">
        <div className="landing-inner">
            <img className="img mb-3" src={Logo} alt=""/>
            <h1 className="x-large">Shamas Rugby Foundation</h1>
            <p className="lead">
            Managemement Information System
            </p>
            <Link to="/home" className="btn btn-light">
                Login
            </Link>
        </div>
        </div>
    </section>
    );
};

// Landing.propTypes = {
//     isAuthenticated: PropTypes.bool
// };

// const mapStateToProps = (state) => ({
//     isAuthenticated: state.auth.isAuthenticated
// });

// export default connect(mapStateToProps)(Landing);

export default Landing;