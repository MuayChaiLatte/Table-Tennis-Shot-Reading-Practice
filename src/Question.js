
import OptionButton from './OptionButton.js';
const szQuestionText = "Is this topspin or backspin?"
export default function Question() {
    return (<div>
        <h2>{szQuestionText}</h2>
        <p><iframe width="400" height="500" src="https://www.youtube.com/embed/ZK_vz4FiJuc" title=":o" allowfullscreen></iframe></p>
        <OptionButton text="topspin" />
        <OptionButton text="backspin" />
    </div>);
}