import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map1 = ({ places }) => {
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    const map = L.map('map').setView([12.971599, 77.594566], 14); // Set center and zoom level
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map); // Use OpenStreetMap tiles

    places.forEach((place) => {
      // Preload the images
      preloadImage(place.photo);

      const customIcon = L.icon({
        iconUrl: loadedImages[place.photo] || 'https://b.zmtcdn.com/data/collections/2e5c28a5fbcb2b35d84c0a498b0e1ba2_1674823998.jpg?fit=around|562.5:360&crop=562.5:360;*,*',
        iconSize: [30, 30],
      });

      const marker = L.marker([place.latitude, place.longitude], { icon: customIcon }).addTo(map);
      marker.bindPopup('Custom Marker Popup Content');
    });
  }, [places, loadedImages]);

  // Preload an image and add it to the loadedImages state
  const preloadImage = (photo) => {
    if (photo) {
      const img = new Image();
      img.src = photo.images.large.url;
      img.onload = () => {
        setLoadedImages((prevLoadedImages) => ({
          ...prevLoadedImages,
          [photo]: photo.images.large.url,
        }));
      };
    }
  };

  return <div id="map" style={{ height: '400px' }} />;
};

export default Map1;
