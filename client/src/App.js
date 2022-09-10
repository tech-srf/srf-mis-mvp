import React, { Fragment } from 'react'

// import { useDispatch } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Login from './pages/auth/Login'
// import Create from './pages/auth/Create'
import Admin from './pages/Admin'
import Attendance from './pages/attendance/Attendance'
import Counseling from './pages/counseling/Counseling'
// import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Profiles from './pages/profiles/Profiles'
import Profile from './pages/profiles/Profile'
import Registration from './pages/registration/Registration'

import RegistrationList from './pages/registration/registrationList'
import RegistrationCard from './pages/registration/registrationCard'
import Settings from './pages/Settings'
import Signup from './pages/signup/Signup'
import SignupCreate from './pages/signup/SignupCreate'
import SignupList from './pages/signup/signupList'
import SignupCards from './pages/signup/signupCards'
import SignupCard from './pages/signup/signupCard'
import Visits from './pages/visit/Visits'
import Landing from './pages/Landing'
import Education from './pages/education/Education'
import Lifeskills from './pages/Lifeskills'
import UploadDocumentsPage from './pages/upload/UploadDocumentsPage'
// import { LOGOUT } from './actions/types';
import './custom.scss';
//Redux
// import { Provider } from 'react-redux';
// import store from './store';
// import { loadUser } from './actions/auth';
// import setAuthToken from './utils/setAuthToken';

const App = () => {

  // useEffect(() => {
  //   // check for token in LS when app first runs
  //   if (localStorage.token) {
  //     // if there is a token set axios headers for all requests
  //     setAuthToken(localStorage.token);
  //   }
  //   // try to fetch a user, if no token or invalid token we
  //   // will get a 401 response from our API
  //   store.dispatch(loadUser());

  //   // log user out from all tabs if they log out in one tab
  //   window.addEventListener('storage', () => {
  //     if (!localStorage.token) store.dispatch({ type: LOGOUT });
  //   });
  // }, []);

  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
            {/* <Route exact path="/login" element={<Login />} />
            <Route exact path="/create" element={<Create />} /> */}
            <Route exact path="/admin" element={<Admin />} />
            <Route exact path="/visits" element={<Visits />}/>
            <Route exact path="/attendance" element={<Attendance />} />
            <Route exact path="/counseling" element={<Counseling />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/education" element={<Education />} />
            <Route exact path="/lifeskills" element={<Lifeskills />} />
            <Route exact path="/profiles" element={<Profiles />} />
            <Route exact path="/registration" element={<Registration />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/registrationlist" element={<RegistrationList />} />
            <Route exact path="/registrationcard" element={<RegistrationCard />} />
            <Route exact path="/settings" element={<Settings />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/signuplist" element={<SignupList />} />
            <Route exact path="/signupcreate" element={<SignupCreate />} />
            <Route exact path="/signupcards" element={<SignupCards />} />
            <Route exact path="/signupcard" element={<SignupCard />} />
            <Route exact path="/registration/uploads" element={<UploadDocumentsPage />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;