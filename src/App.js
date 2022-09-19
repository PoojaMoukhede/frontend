import LandingPage from "./components/LandingPage";
import PostView from "./components/PostView";
import Post from "./components/Post";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<PostView />} path="/postview" />
          <Route element={<Post />} path="/post" />
          <Route element={<LandingPage />} path="/" />
        </Routes>
      </Router>
    </>
  );
}

export default App;