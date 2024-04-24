import './App.css';
import Question from './Question.js';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Question 
        szQuestionText="Is this topspin or backspin?"
        szVideoURL="https://www.youtube.com/embed/ZK_vz4FiJuc"
        />
      </header>
    </div>
  );
}

export default App;
