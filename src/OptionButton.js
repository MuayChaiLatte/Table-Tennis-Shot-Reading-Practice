export default function OptionButton({text, isAnswerCorrect}) {
    function handleClick() {
        alert(isAnswerCorrect)
    }
    
    return <button onClick={handleClick}>
        {text}
    </button>
}