import OptionButton from './OptionButton.js';
import QuestionContent from './QuestionContent.js';

export default function Question({szQuestionText,oQuestionData}) {
    return (<div>
        <h2>{szQuestionText}</h2>
        <QuestionContent szVideoURL={oQuestionData.szVideoURL} />
        <OptionButton szButtonText="topspin" szIsOptionCorrect="false" />
        <OptionButton szButtonText="backspin" szIsOptionCorrect="true" />
    </div>);
}