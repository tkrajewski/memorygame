const sortScores = (collection: any) => {
  collection.sort((elementA: any, elementB: any) => {
    if ( elementA.score < elementB.score ){
      return -1;
    }

    if ( elementA.score > elementB.score ){
      return 1;
    }

    return 0;
  });

  return collection;
};

export default sortScores;
