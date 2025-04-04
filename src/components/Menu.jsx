export default function Menu(props) {

    return (
        <ul>
            {props.link.map((link) => (
                <li >
                    <a href={link.href}>{link.text}</a>
                </li>
            ))}
        </ul>
    );
};