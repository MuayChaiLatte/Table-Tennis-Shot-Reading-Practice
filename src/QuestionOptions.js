import OptionButton from './OptionButton.js';
let aPossibleOptionLabels = [
    "Topspin",
    "Backspin"
]
export default function QuestionOptions({aWhichOptionIsCorrect}) {
    return (aPossibleOptionLabels.map((szOptionLabel,lIndex) => {
        return (           
        <li key={lIndex}>
            <OptionButton 
                szButtonText={szOptionLabel} 
                szIsOptionCorrect={aWhichOptionIsCorrect[lIndex]  === 1 ? "True" : "False"} 
            />
        </li>)
    }))
}   