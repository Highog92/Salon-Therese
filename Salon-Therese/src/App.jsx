import './Global.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from './Layout/Main';
import { Homepage } from './Pages/Homepage';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout title='Homepage' />}>
            <Route path="/" element={<Homepage title="Homepage" />} />
            <Route path="/welcome" index element={<Homepage title='Homepage' />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
