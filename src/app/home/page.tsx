import Item from "@/components/Item";
import { Movie } from "../../types";
import Link from "next/link";

export default function home() {
  const array: number[] = Array(100).fill(0);
  const movie: Movie = {
    title: "Kung Fu Panda 3",
    description:
      "Po and his friends must defend the Valley of Peace from a supernatural villain. Po’s long-lost family returns, and he discovers his true destiny as a warrior and leader.",
    releaseDate: "2016-01-29",
    src: "https://occ-0-8407-2705.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABewLMJrpIRVrZuhZu-k0UbVGDFq9LyhxGoBLt0dvCPNqR2A0r1IGAWF84dhFxLoCC4Nr41_X959XNeibIscm-Okg9zYjwLHCrEKGk95MKEzR2xaHxxaydUKPx5FP6NtOWPde-g.jpg?r=7f6",
  };
  return (
    <main className="flex flex-col sm:flex-row flex-wrap items-center p-2 gap-6">
      {array.map(() => (
        <Link href="/show" className="flex items-center w-full justify-center">
          <Item movie={movie} />
        </Link>
      ))}
    </main>
  );
}
