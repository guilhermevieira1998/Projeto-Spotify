document.addEventListener('DOMContentLoaded', () => {
    const artistsData = [
        { name: 'Linkin Park', image: './assets/artista-linkin-park.jpg' },
        { name: 'Guns N` Roses', image: './assets/artista-guns-n-roses.jpg' },
        { name: 'Red Hot Chili Peppers', image: './assets/artista-red-hot.jpg' },
        { name: 'Metallica', image: './assets/artista-metallica.jpg' },
        { name: 'Post Malone', image: './assets/artista-post-malone.jpg' },
        { name: 'System Of A Down', image: './assets/artista-system.jpg' }
    ];
    
    const albumsData = [
        { name: 'From Zero', artist: 'Linkin Park', image: './assets/album-linkin-park.jpg' },
        { name: 'Appetite For Destruction', artist: 'Guns N` Roses', image: './assets/album-guns-n-roses.jpg' },
        { name: 'Unlimited Love', artist: 'Red Hot Chili Peppers', image: './assets/album-red-hot.jpg' },
        { name: '72 Seasons', artist: 'Metallica', image: './assets/album-metallica.jpg' },
        { name: 'Hollywood`s Bleeding', artist: 'Post Malone', image: './assets/album-post-malone.jpg' },
        { name: 'Toxicity', artist: 'System Of A Down', image: './assets/album-system.jpg' }
    ];

    const artistGrid = document.querySelector('.artists-grid');
    const albumsGrid = document.querySelector('.albums-grid');
    const searchInput = document.querySelector('.search-bar input');

    
    function createCard(item, isArtist) {
        const card = document.createElement('div');
        card.classList.add(isArtist ? 'artist-card' : 'album-card');
        
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}" loading="lazy">
            <div>
                <h3>${item.name}</h3>
                <p>${isArtist ? 'Artista' : item.artist}</p>
            </div>
        `;
        
        return card;
    }

    
    function populateGrids(artists, albums) {
        artistGrid.innerHTML = '';
        albumsGrid.innerHTML = '';
        
        artists.forEach(artist => artistGrid.appendChild(createCard(artist, true)));
        albums.forEach(album => albumsGrid.appendChild(createCard(album, false)));
    }

    
    populateGrids(artistsData, albumsData);

    
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredArtists = artistsData.filter(artist => 
            artist.name.toLowerCase().includes(searchTerm)
        );
        const filteredAlbums = albumsData.filter(album => 
            album.name.toLowerCase().includes(searchTerm) || 
            album.artist.toLowerCase().includes(searchTerm)
        );
        
        populateGrids(filteredArtists, filteredAlbums);
    });
});