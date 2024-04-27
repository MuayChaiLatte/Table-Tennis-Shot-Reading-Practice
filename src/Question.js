import QuestionContent from './QuestionContent.js';
import QuestionOptions from './QuestionOptions.js';

export default function Question({szQuestionText,oQuestionData}) {
    return (<div>
        <h2>{szQuestionText}</h2>
        <QuestionContent szVideoURL={oQuestionData.szVideoURL} />
        <ul>
            <QuestionOptions aWhichOptionIsCorrect={oQuestionData.aWhichOptionIsCorrect} />
        </ul>
    </div>);
}