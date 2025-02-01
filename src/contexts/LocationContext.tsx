import React, { createContext, useState, useEffect, useContext } from 'react';

interface LocationContextType {
  userCity: string | null;
  isLoading: boolean;
}

const LocationContext = createContext<LocationContextType>({ userCity: null, isLoading: true });

export const useLocation = () => useContext(LocationContext);

const SUPPORTED_CITIES = [
  'berlin', 'hamburg', 'muenchen', 'koeln', 'frankfurt', 'stuttgart',
  'duesseldorf', 'leipzig', 'dortmund', 'bochum', 'essen', 'bremen', 'dresden'
];

export const LocationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userCity, setUserCity] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const detectCity = async () => {
      try {
        const response = await fetch('https://ipinfo.io/json?token=c31b49ab42727b');
        const data = await response.json();
        const detectedCity = data.city.toLowerCase();
        
        // Check if detected city is in our supported cities list
        const matchedCity = SUPPORTED_CITIES.find(city => 
          detectedCity.includes(city) || city.includes(detectedCity)
        );
        
        setUserCity(matchedCity || null);
      } catch (error) {
        console.error('Error detecting location:', error);
        setUserCity(null);
      } finally {
        setIsLoading(false);
      }
    };

    detectCity();
  }, []);

  return (
    <LocationContext.Provider value={{ userCity, isLoading }}>
      {children}
    </LocationContext.Provider>
  );
};