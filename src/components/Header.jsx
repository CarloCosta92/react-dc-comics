import Logo from "./logo";
import Menu from "./Menu.jsx";
import { linkHeader } from './arrays.jsx';

export default function Header() {

    return (<header>

        <Logo />
        <Menu link={linkHeader} />

    </header>)
};
