import * as React from 'react';
import { useLocation } from 'react-router-dom';

export type NavigationManagerType = {
  showScores: boolean;
};

export default function useNavigationManager(): NavigationManagerType {
  const { pathname } = useLocation();
  const [showScores, setShowScores] = React.useState<boolean>(false);
  
  React.useEffect(() => {
    setShowScores(pathname.includes('game'));
  }, [pathname]);

  return {
    showScores,
  };
}