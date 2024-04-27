export default function OptionButton({szButtonText, szIsOptionCorrect}) {
    function handleClick() {
        alert(szIsOptionCorrect)
    }
    
    return <button onClick={handleClick}>
        {szButtonText}
    </button>
}