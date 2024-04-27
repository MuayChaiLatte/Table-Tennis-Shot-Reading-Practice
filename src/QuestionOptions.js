import OptionButton from './OptionButton.js';
let aPossibleOptionLabels = [
    "Topspin",
    "Backspin"
]
export default function QuestionOptions(aWhichOptionIsCorrect) {
    aPossibleOptionLabels.map((szOptionLabel,lIndex) => {
        return (
        <li key={lIndex}>
            <OptionButton 
                szButtonText={szOptionLabel} 
                szIsOptionCorrect={aWhichOptionIsCorrect[lIndex] ? "True":"False"} 
            />
        </li>)
    })
}