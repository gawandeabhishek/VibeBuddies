import { Movie } from "@/types";
import { PlayCircle } from "lucide-react";
import Image from "next/image";

export default function pages() {
  const movie: Movie = {
    title: "Kung Fu Panda 3",
    description:
      "Po and his friends must defend the Valley of Peace from a supernatural villain. Po’s long-lost family returns, and he discovers his true destiny as a warrior and leader.",
    releaseDate: "2016-01-29",
    src: "https://occ-0-8407-2705.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABewLMJrpIRVrZuhZu-k0UbVGDFq9LyhxGoBLt0dvCPNqR2A0r1IGAWF84dhFxLoCC4Nr41_X959XNeibIscm-Okg9zYjwLHCrEKGk95MKEzR2xaHxxaydUKPx5FP6NtOWPde-g.jpg?r=7f6",
  };
  return (
    <main className="flex flex-col items-center">
      <div className="relative group flex flex-col items-center sm:items-start gap-10 mx-4 my-6 rounded-3xl">
        <img
          src="https://occ-0-8407-2705.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABewLMJrpIRVrZuhZu-k0UbVGDFq9LyhxGoBLt0dvCPNqR2A0r1IGAWF84dhFxLoCC4Nr41_X959XNeibIscm-Okg9zYjwLHCrEKGk95MKEzR2xaHxxaydUKPx5FP6NtOWPde-g.jpg?r=7f6"
          alt=""
          className="w-screen h-80 object-cover rounded-3xl z-0 group-hover:blur-[2px]"
        />
        <div className="hidden group-hover:flex absolute flex-col sm:w-full gap-2 sm:gap-4 z-10 p-10 group-hover:bg-secondary/20 w-[90%] h-full">
          <h4 className="text-4xl sm:text-6xl font-extrabold text-secondary-foreground w-fit">
            {movie.title}
          </h4>
          <p className="text-xs sm:text-sm text-accent-foreground w-[80%]">
            {movie.description}
          </p>
          <span className="w-fit text-accent font-bold text-sm">
            {movie.releaseDate}
          </span>
          <span className="hidden absolute inset-1/2 top-[40%] z-20 group-hover:block">
            <PlayCircle className="text-accent/60 h-20 w-20" />
          </span>
        </div>
      </div>
    </main>
  );
}
