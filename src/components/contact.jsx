export default function Contact(props) {
    const displayName = props.displaynames ?? props.name;
    return (
        <div className={"contact"}>
            <p>{props.name}: <a href={props.url}>{displayName}</a></p>
        </div>
    )
}