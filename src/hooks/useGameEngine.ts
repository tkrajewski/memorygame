export type NavigationManagerType = {
  cards: number[];
};

export default function useNavigationManager(): NavigationManagerType {
  const cards = [1];

  return {
    cards,
  };
}