import { useEffect } from 'react';
import { useNavigate, useLocation as useRouterLocation } from 'react-router-dom';
import { useLocation } from '../contexts/LocationContext';

export default function LocationRedirect() {
  const navigate = useNavigate();
  const { userCity, isLoading } = useLocation();
  const location = useRouterLocation();

  useEffect(() => {
    if (!isLoading && userCity && location.pathname === '/') {
      navigate(`/autoankauf-${userCity}`, { replace: true });
    }
  }, [userCity, isLoading, navigate, location]);

  return null;
}
