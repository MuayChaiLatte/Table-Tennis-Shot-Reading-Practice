export default Question

const szQuestionText = "Is this topspin or backspin?"
function Question() {
    return <div>
        <h2>{szQuestionText}</h2>
        <p><iframe width="400" height="500" src="https://www.youtube.com/embed/ZK_vz4FiJuc" title=":o" allowfullscreen></iframe></p>
        <button>Topspin</button>
        <button>Backspin</button>
    </div>
}