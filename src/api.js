export async function getAllTracks() {
    const response = await fetch('https://skypro-music-api.skyeng.tech/catalog/track/all/');
    const tracks = await response.json();
    if (!response.ok) {
      throw new Error('Ошибка соеденения');
    }
    return tracks;
  }

  export async function getTrackById(trackId) {
    const response = await fetch(`https://skypro-music-api.skyeng.tech/catalog/track/${trackId}`);
  
    if (!response.ok) {
      throw new Error('Ошибка соеденения');
    }
  
    const track = await response.json();
    return track;
  }