import { useEffect, useState } from "react";
import Wordle from "./components/wordle.js"

function App() {

  const [solution, setSolution] = useState(null)

  useEffect(() => {
    setSolution('hello')
  }, [setSolution])

  return (
    
    <div className="App">
      <h1>BestFriendWordleReactProject</h1>
      {solution && <Wordle solution={solution}/>}
    </div>
  );
}

export default App;
