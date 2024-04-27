import './App.css';
import Question from './Question.js';
let oExampleQuestionData = {
  szVideoURL: "https://www.youtube.com/embed/ZK_vz4FiJuc"
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Question 
        szQuestionText="Is this topspin or backspin?"
        oQuestionData={oExampleQuestionData}
        />
      </header>
    </div>
  );
}

export default App;
