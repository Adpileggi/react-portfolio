import { Outlet } from "react-router-dom"
import Nav from './componets/NavTabs'

function App() {
return (
  <>
    <Nav />
    <main>
      <Outlet />
    </main>
  </>
  );
}

export default App
