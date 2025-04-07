import comics from "./../data/comics.js"

export default function Card() {
    return (
        <div>
            {comics.map((comic) => (
                <div key={comic.id}>
                    <img src={comic.thumb} alt={comic.title} />
                    <span>{comic.series}</span>
                </div>

            ))}
        </div>
    )
}