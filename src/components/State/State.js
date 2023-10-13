import React, { useState, useEffect } from 'react';

function State() {
  const [locationData, setLocationData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Get current location using the HTML Geolocation API
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          // Fetch sunrise/sunset data from the Sunrise-Sunset API
          fetch(`https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&formatted=0`)
            .then((response) => response.json())
            .then((data) => {
              setLocationData({
                latitude,
                longitude,
                todaySunrise: new Date(data.results.sunrise).toLocaleTimeString(),
                todaySunset: new Date(data.results.sunset).toLocaleTimeString(),
                tomorrowSunrise: new Date(data.results.sunrise).toLocaleTimeString(),
                tomorrowSunset: new Date(data.results.sunset).toLocaleTimeString(),
              });
            })
            .catch((error) => {
              setError('Error fetching sunrise/sunset data');
            });
        },
        (error) => {
          setError('Error getting geolocation data');
        }
      );
    } else {
      setError('Geolocation is not available in this browser.');
    }
  }, []);

  return (
    <div className="location-info">
      {locationData ? (
        <div>
          <p>Latitude: {locationData.latitude.toFixed(4)}</p>
          <p>Longitude: {locationData.longitude.toFixed(4)}</p>
          <p>Today's Sunrise: {locationData.todaySunrise}</p>
          <p>Today's Sunset: {locationData.todaySunset}</p>
          <p>Tomorrow's Sunrise: {locationData.tomorrowSunrise}</p>
          <p>Tomorrow's Sunset: {locationData.tomorrowSunset}</p>
        </div>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <p>Loading location and sunrise/sunset data...</p>
      )}
    </div>
  );
}

export default State;