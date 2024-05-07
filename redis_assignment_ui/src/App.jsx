
import MainLayout from "./layouts/MainLayout.jsx";
import {Route, Routes} from "react-router-dom";
import RequireAuth from "./auth/RequireAuth.jsx";
import ContentContainer from "./components/ContentContainer.jsx";
import LoginPage from "./components/LoginPage.jsx";

function App() {

  return (
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="login" element={<LoginPage/>} />
          <Route element={<RequireAuth/>}>
            <Route path="/" element={<ContentContainer/>}/>
          </Route>
        </Route>
      </Routes>
  )
}

export default App
