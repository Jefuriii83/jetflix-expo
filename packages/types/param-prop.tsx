export interface NameProps {
    name1: string;
    name2: string;
    name3: string;
    destination: string;
  }

export  interface VideoPlayerProps {
    episode: {
        id: string,
        title: string,
        poster: string,
        duration: string,
        plot: string,
        video:string,
    },
    isPlaying: boolean;

}

export interface InputProps {
    id: string;
    label: string;
    type?: string;
  }

  export type SubheaderProps = {
    genreTitle: string;
  };