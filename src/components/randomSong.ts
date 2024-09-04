export default function randSong() {
    const songs = ["https://open.spotify.com/embed/track/7wsIu8lWXBZ5g6iGidf3QL?utm_source=generator", "https://open.spotify.com/embed/track/2eYZH6TtHrS2Phdp5dN1aZ?utm_source=generator"]
    const randomSong = songs[Math.floor(Math.random() * songs.length)];
    return (`
    <iframe style="border-radius:0px; margin-top: 3px;" src="${randomSong}" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    `)
}
