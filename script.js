const container = document.getElementById("album-grid");

albums.forEach(album => {
  const card = document.createElement("div");
  card.className = "album-card";

  const trackList = album.tracks.map(track => `<li>${track}</li>`).join("");

  card.innerHTML = `
    <img src="${album.image}" alt="${album.title}" class="album-cover" />
    <div class="album-info">
      <h3>${album.title}</h3>
      <p>${album.artist}</p>
      <div class="score">
        <span>Critic: ${album.criticScore}</span>
        <span>User: ${album.userScore}</span>
      </div>
    </div>
    <div class="track-overlay">
      <h4>추천 곡</h4>
      <ul>${trackList}</ul>
    </div>
  `;

  container.appendChild(card);
});
