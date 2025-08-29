import Navbar from "../components/Navbar";
import Aboutus from "../components/Aboutus";
import Dashboard from "../components/Dashboard";
import Teams from "../components/Teams";
import OurWork from "../components/Work/OurWork";

export default function Home() {
  return (
    <div className="bg-[#dad4b5] min-h-screen">
      <div className="p-4">
        <Navbar />
      </div>
      <div id="Home">
        <Dashboard />
      </div>
      <div id="AboutUs">
        <Aboutus />
      </div>
      <div id="Teams">
        <Teams />
      </div>
      <div id="OurWork">
        <OurWork />
      </div>
    </div>
  );
}
