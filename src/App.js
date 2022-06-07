import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  NavLink,
} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute'
import AuthRoute from './components/AuthRoute'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import PageNotFound from './pages/pageNotFound'
import NavBar from "./components/NavBar";
import CartPage from "./pages/CartPage";
import InfoPage from "./pages/InfoPage"
import GlobalLoading from "./components/GlobalLoading"
import "./App.css";
function App() {
  return (
    <div className="App">
      <GlobalLoading/>
      <NavBar/><hr/>
      <Routes>
        <Route exact path="/signup" element={
            <AuthRoute>
              <SignUpPage />
            </AuthRoute>
          } />
        <Route exact path="/login" element={
            <AuthRoute>
              <LoginPage />
            </AuthRoute>
          }
        />
        <Route exact path="/" element={
            <PrivateRoute>             
              <HomePage />
            </PrivateRoute>
          }
        ></Route>
        <Route exact path="/cart" element={
            <PrivateRoute>             
              <CartPage />
            </PrivateRoute>
          }
        ></Route>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/info" element={<InfoPage />} />
      </Routes>
    </div>
  );
}

export default App;
