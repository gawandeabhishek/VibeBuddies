import { Movie } from "../types";

type ItemProps = {
  movie: Movie;
}

export default function Item({ movie }: ItemProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-10 px-4 py-6 w-[80%] sm:w-fit hover:bg-white/5 hover:backdrop-blur-3xl rounded-xl">
      <img src={movie.src} alt="" className="w-fit h-60 rounded-3xl" />
      <div className="flex flex-col max-w-fit w-[90%] sm:w-full gap-2 sm:gap-4">
        <h4 className="text-4xl sm:text-6xl font-bold text-secondary-foreground w-fit">
          {movie.title}
        </h4>
        <p className="text-xs sm:text-sm text-accent w-[80%]">
          {movie.description}
        </p>
        <span className="w-fit text-accent-foreground text-sm">
          {movie.releaseDate}
        </span>
      </div>
    </div>
  );
}
