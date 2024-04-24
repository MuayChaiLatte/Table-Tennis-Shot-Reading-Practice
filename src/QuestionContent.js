export default function QuestionContent({videoURL}) {
    return (
        <p><iframe width="400" height="500" src={videoURL} title=":o" allowfullscreen></iframe></p>
    )
}