const STORAGE_NAMESPACE = 'memoryGame::';

export const readMaxScore = (): number => parseInt(localStorage.getItem(`${STORAGE_NAMESPACE}MaxScore`) || '0', 10);
export const writeMaxScore = (score: number) => localStorage.setItem(`${STORAGE_NAMESPACE}MaxScore`, score?.toString());

export const readLeaderboards = (): any =>
  JSON.parse((localStorage.getItem(`${STORAGE_NAMESPACE}Leaderboards`) as string));
export const saveLeaderboards = (leaderboards: any) => localStorage.setItem(`${STORAGE_NAMESPACE}Leaderboards`, JSON.stringify(leaderboards));