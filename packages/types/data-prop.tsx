
export interface HeaderProps {
    title: string;
  }

 export interface HomeProperties {
    category: {
      id: string;
      title: string;
      movies: {
        id: string,
        poster: string,
    }[]
    },
    movie: string,
  }

 export interface EpisodeProp {
    episode: {
        id: string,
        title: string,
        poster: string,
        duration: string,
        plot: string,
        video: string,
    },
    onPress: (episode: {
        id: string,
        title: string,
        poster: string,
        duration: string,
        plot: string,
        video: string,
    }) => void
  }

 export type SliderProps = {
    title: string;
    description: string;
    maturityNumber: string;
  };

export interface HomeProps {
    category: {
      id: string;
      title: string;
      movies: {
        id: string;
        title?: string;
        year?: number;
        episodes?: number;
        maturityRating?: string;
        description?: string;
        poster?: string;
        banner?: string;
        casts?: string[];
        genre?: string[];
      }[];
    };
  }

 export  type ProfileProps = {
    profile: {
      name: string;
      avatar: string;
    };
  };
  