import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  Play,
  Send,
  SkipBack,
  SkipForward,
  UserRoundSearch,
} from "lucide-react";

const tempData = [
  {
    src: "https://img.freepik.com/free-vector/follow-me-social-business-theme-design_24877-52233.jpg?ga=GA1.2.1951620604.1692790835&semt=ais_hybrid",
    name: "Abhishek Gawande",
    message: "Hi, there!",
  },
  {
    src: "https://img.freepik.com/premium-photo/young-smiling-woman-ann-avatar-3d-vector-people-character-illustration-cartoon-minimal-style_1240525-12709.jpg?ga=GA1.2.1951620604.1692790835&semt=ais_hybrid",
    name: "Jane Doe",
    message: "Any updates?",
  },
];

const array: number[] = Array(20).fill(0);

export default function pages() {
  return (
    <main className="flex p-2 gap-2">
      <div className="relative h-[calc(100vh-5.50rem)] w-[30%]">
        <div className="flex flex-col pl-2 absolute bottom-0 gap-2">
          <img
            src="https://occ-0-8407-2705.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABewLMJrpIRVrZuhZu-k0UbVGDFq9LyhxGoBLt0dvCPNqR2A0r1IGAWF84dhFxLoCC4Nr41_X959XNeibIscm-Okg9zYjwLHCrEKGk95MKEzR2xaHxxaydUKPx5FP6NtOWPde-g.jpg?r=7f6"
            alt=""
            className="rounded-md w-full"
          />
          <h4 className="text-secondary-foreground font-semibold text-lg">
            Kung Fu Panda 3
          </h4>
          <div className="marquee w-40">
            <p className="text-xs text-secondary-foreground/40 animate-marquee marquee-text">
              Po and his friends must defend the Valley of Peace
            </p>
          </div>
          <div className="flex items-center gap-2 self-center">
            <SkipBack className="text-secondary-foreground rounded-full p-2 bg-white/5 backdrop-blur-sm h-10 w-10" />
            <Play className="text-secondary-foreground rounded-full p-2 bg-white/5 backdrop-blur-sm h-10 w-10" />
            <SkipForward className="text-secondary-foreground rounded-full p-2 bg-white/5 backdrop-blur-sm h-10 w-10" />
          </div>
          <div>
            <div className="relative w-full flex items-center self-center justify-center gap-2 pt-2 cursor-pointer z-50">
              <p className="text-xs font-semibold text-slate-700 dark:text-white">
                {/* {(audioTrack?.progress / 60).toFixed(2) === "NaN"
                ? "0.00"
                : (audioElement?.current?.currentTime / 60).toFixed(2)} */}
                0.00
              </p>
              <div
                // ref={dragRef}
                // onClick={updatePlaybar}
                // onMouseDown={handleMouseDown}
                // onTouchStart={handleTouchStart}
                className="h-5 group relative w-full flex items-center justify-center"
              >
                <div className="w-full h-1 bg-gray-200 group dark:bg-gray-700 relative rounded-full overflow-hidden group cursor-pointer">
                  <div
                    className="w-full h-1 bg-slate-700 dark:bg-white group-hover:bg-slate-400 rounded-full absolute z-10 flex items-center justify-end"
                    // style={{ width: `${audioTrack?.progress}%` }}
                  >
                    <div className="h-3 w-3 bg-transparent fixed group-hover:bg-slate-700 dark:group-hover:bg-white rounded-full z-20 cursor-pointer -mr-1.5" />
                  </div>
                </div>
              </div>
              <p className="text-xs font-semibold text-slate-700 dark:text-white">
                {/* {(audioTrack?.length / 60).toFixed(2) === "NaN"
                ? "0.00"
                : (audioTrack?.length / 60).toFixed(2)} */}
                3.43
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative m-2 rounded-md bg-primary-foreground h-[calc(100vh-5.50rem)] w-full">
        <div className="absolute left-0 w-[21%] bg-secondary-foreground/5 h-[93.5%] rounded-md m-4 py-2 pr-2 overflow-scroll scroll-smooth no-scrollbar">
          <div className="sticky top-2 right-2 z-30 flex items-center pl-2 pt-1 rounded-md">
            <UserRoundSearch className="absolute -top-1 right-2 text-secondary-foreground rounded-md bg-secondary-foreground/5 backdrop-blur-sm h-8 w-8 p-2 z-30" />
            <Input
              type="text"
              placeholder="Search..."
              className="flex z-20 bg-secondary-foreground/5 text-secondary-foreground backdrop-blur-sm font-semibold mb-6"
            />
          </div>
          {array.map((_, primaryIdx) =>
            tempData.map((data, idx) => (
              <div
                className={cn(
                  "relative flex ml-6 mt-2 items-center gap-2 h-11 rounded-md z-10",
                  primaryIdx == 0 && idx == 0
                    ? "bg-primary/10"
                    : "bg-secondary-foreground/5"
                )}
                key={idx}
              >
                <img
                  src={data.src}
                  alt=""
                  className="absolute -left-4 h-8 w-8 top-1 rounded-md object-cover"
                />
                <div className="absolute left-6 flex flex-col">
                  <h4 className="text-sm text-accent-foreground">
                    {data.name}
                  </h4>
                  <p className="text-xs text-secondary-foreground/60 truncate">
                    {data.message}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="relative left-[23%] w-[74%] h-full">
          <img
            src="https://img.freepik.com/premium-photo/young-smiling-woman-ann-avatar-3d-vector-people-character-illustration-cartoon-minimal-style_1240525-12709.jpg?ga=GA1.2.1951620604.1692790835&semt=ais_hybrid"
            alt=""
            className="absolute -right-2 h-8 w-8 top-4 rounded-md object-cover"
          />
          <p className="absolute bottom-32 left-3 py-2 px-4 rounded-tl-none rounded-sm text-secondary-foreground bg-secondary-foreground/5">
            Hi, There!
          </p>
          <p className="absolute bottom-20 right-3 py-2 px-4 rounded-tr-none rounded-sm text-secondary-foreground bg-secondary-foreground/5">
            Hello!
          </p>
          <div className="absolute ml-2 bottom-4 w-full">
            <Input
              type="text"
              placeholder="Message..."
              className="text-secondary-foreground bg-secondary-foreground/5 backdrop-blur-sm"
            />
            <Send className="absolute bottom-0 m-2 text-secondary-foreground bg-white/5 backdrop-blur-sm rounded-md right-[2%] p-2 h-10 w-10" />
          </div>
        </div>
      </div>
    </main>
  );
}
