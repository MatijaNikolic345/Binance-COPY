import HomeBody from "../ui/HomeBody";
import HomeNav from "../ui/HomeNav";
import Nav from "../ui/Nav";
import Support from "../ui/Support";
function Home() {
  return (
    <div className="h-full relative">
      <Nav>
        <HomeNav />
      </Nav>

      <HomeBody />
      <Support />
    </div>
  );
}

export default Home;
