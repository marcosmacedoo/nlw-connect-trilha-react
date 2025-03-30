import Image from "next/image";

import medalGold from "../../../assets/medal-gold.svg";
import medalSilver from "../../../assets/medal-silver.svg";
import medalCooper from "../../../assets/medal-cooper.svg";
import { getRanking } from "@/http/api";

const medals = [
  { src: medalGold, alt: "medalha de ouro" },
  { src: medalSilver, alt: "medalha de prata" },
  { src: medalCooper, alt: "medalha de bronze" },
];

export async function Ranking() {
  const { ranking } = await getRanking();

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        {ranking.map(({ id, name, score }, index) => {
          const positionRanking = index + 1;
          const medal = medals[positionRanking - 1];

          return (
            <div
              className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3"
              key={id}
            >
              <span className="text-sm text-gray-300 leading-none">
                <span className="font-semibold">{positionRanking}º</span> |{" "}
                {name}
              </span>

              <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                {score}
              </span>

              <Image
                src={medal.src}
                alt={medal.alt}
                className="absolute top-0 right-8"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
