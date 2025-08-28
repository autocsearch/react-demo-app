import Navbar from "../components/Navbar";
import Aboutus from "../components/Aboutus";
import Dashboard from "../components/Dashboard";
import Teams from "../components/Teams";
import OurWork from "../components/OurWork";

export default function Home() {
  return (
    <div className="bg-[#dad4b5] min-h-screen">
      <div className="p-4">
        <Navbar />
      </div>
      <div>
        <Dashboard />
      </div>
      <div>
        <Aboutus />
      </div>
      <div>
        <Teams />
      </div>
      <div>
        <OurWork />
      </div>
    </div>
  );
}
