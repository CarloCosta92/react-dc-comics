import comics from "./../data/comics.js"

export default function Card() {
    return (
        <div className="card-container">
            {comics.map((comic) => (
                <div key={comic.id} className="cards" >
                    <img src={comic.thumb} alt={comic.title} className="img-card" />
                    <div>{comic.series}</div>
                </div>

            ))}
        </div>
    )
}