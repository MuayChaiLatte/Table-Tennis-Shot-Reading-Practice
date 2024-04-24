import OptionButton from './OptionButton.js';
import QuestionContent from './QuestionContent.js';
export default function Question({szQuestionText,szVideoURL}) {
    return (<div>
        <h2>{szQuestionText}</h2>
        <QuestionContent szVideoURL={szVideoURL} />
        <OptionButton text="topspin" />
        <OptionButton text="backspin" />
    </div>);
}