// import { Recommended } from "./Recommended";
// import { NewWork } from "./NewWork";
// import { Ranking } from "./Ranking";
// import { Featured } from "./Featured";
// import { RandFeatured } from "./RandFeatured";
import { AllComics } from "./Allcomics";

export interface Book {
  id: number;
  creatorid?: string;
  comicid?: number;
  synopsis?: string;
  src: string;
  title: string;
  creator: string;
  tag?: string;
  crown?: string;
  visibility?: string;
  star?: number;
}

export interface Books {
  [code: string]: {
    comics: Book[];
  };
}

export const BookData: any = {
  // Recommended: {
  //   ...Recommended
  // },
  // NewWork: {
  //   ...NewWork
  // },
  // Ranking: {
  //   ...Ranking
  // },

  // Featured: {
  //   ...Featured
  // },
  // RandFeatured: {
  //   ...RandFeatured
  // }
  AllComics: {
    ...AllComics
  }
};
