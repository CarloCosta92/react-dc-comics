import Card from "./card"

export default function Main() {
    return (<main>
        <div className="jumbo">
        </div>
        <div className="jumbotron">

            <div className="current-series">CURRENT SERIES</div>

            <Card />

            <button type="button" className="load-more">LOAD MORE</button>

        </div>
    </main>)
};