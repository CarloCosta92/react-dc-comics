export default function Menu(props) {

    return (
        <ul>
            {props.link.map((link, index) => (
                <li key={index} >
                    <a href={link.href}>{link.text}</a>
                </li>
            ))}
        </ul>
    );
};