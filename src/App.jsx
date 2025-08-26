import "./App.css";
import Signin from "./pages/Signin";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function App() {
  return (
    <main className="flex items-center justify-center min-h-[700px] w-screen">
      <Card>
        <CardContent>
          <Signin />
        </CardContent>
      </Card>
    </main>
  );
}

export default App;
