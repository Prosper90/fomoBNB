import Menu from "./component/categories";
import Home from "./component/home/Home";
import NavBar from "./component/nav/NavBar";

function App() {
  return (
    <div className="h-auto pb-24 bg-cover bg-no-repeat" style={{ backgroundImage: "url('/images/uwfomo3dbackground.jpg')" }}>
      <NavBar />
      <Home />
      <Menu/>
    </div>
  );
}

export default App;
