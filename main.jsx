import Hero from "./components/Hero";
import EligibilityForm from "./components/Form";
import Dashboard from "./components/Dashboard";
import Security from "./components/Security";

function App() {
  return (
    <div className="space-y-32 pb-32">
      <Hero />
      <EligibilityForm />
      <Dashboard />
      <Security />
    </div>
  );
}

export default App;