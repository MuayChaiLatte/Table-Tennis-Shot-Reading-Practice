import OptionButton from './OptionButton.js';
import QuestionContent from './QuestionContent.js';
const szQuestionText = "Is this topspin or backspin?";
export default function Question() {
    return (<div>
        <h2>{szQuestionText}</h2>
        <QuestionContent videoURL={"https://www.youtube.com/embed/ZK_vz4FiJuc"} />
        <OptionButton text="topspin" />
        <OptionButton text="backspin" />
    </div>);
}