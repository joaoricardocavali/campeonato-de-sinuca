import './App.css';
import RegisterTeam from "./pages/register_team"
import RegisterCompetition from "./pages/register_competition"

function App() {
  return (
    <div className="main-text">
      <div>
        <h1>Campeonato de Sinuca</h1>
      </div>
      <div className="lists">
        <div>
          <RegisterTeam />
        </div>
        <div>
          <RegisterCompetition />
        </div>
      </div>
    </div>
  );
}

export default App;
