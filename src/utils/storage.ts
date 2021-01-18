const STORAGE_NAMESPACE = 'memoryGame::';

export const readMaxScore = (): number => parseInt(localStorage.getItem(`${STORAGE_NAMESPACE}MaxScore`) || '0', 10);
export const writeMaxScore = (score: number) => localStorage.setItem(`${STORAGE_NAMESPACE}MaxScore`, score?.toString());
