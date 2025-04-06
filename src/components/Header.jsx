import Logo from "./logo";
import Menu from "./Menu.jsx";
const linkHeader = [
    {
        text: "CHARACTERS",
        href: "#"
    },
    {
        text: "COMICS",
        href: "#"
    },
    {
        text: "MOVIES",
        href: "#"
    },
    {
        text: "TV",
        href: "#"
    },
    {
        text: "GAMES",
        href: "#"
    },
    {
        text: "COLLECTIBLES",
        href: "#"
    },
    {
        text: "VIDEOS",
        href: "#"
    },
    {
        text: "FANS",
        href: "#"
    },
    {
        text: "NEWS",
        href: "#"
    },
    {
        text: "SHOPS",
        href: "#"
    },
];

export default function Header() {

    return (<header>

        <Logo />
        <Menu link={linkHeader} />

    </header>)
};
