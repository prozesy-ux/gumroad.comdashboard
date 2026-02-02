export type ActivityCardProps = {
  title: string;
  tooltipText: string;
  amount: string;
};

export const ActivityCard = (props: ActivityCardProps) => {
  return (
    <section className="text-4xl content-between bg-white box-border caret-transparent gap-x-2 grid leading-[45px] max-w-full gap-y-2 align-bottom border p-8 rounded-bl rounded-br rounded-tl rounded-tr border-solid">
      <h2 className="text-base box-border caret-transparent gap-x-2 flex leading-6 max-w-full gap-y-2 align-bottom">
        {props.title}
        <span className="relative box-border caret-transparent grid max-w-full align-bottom">
          <span className="box-border caret-transparent contents max-w-full align-bottom">
            <span className="[mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDIuMDJjLTUuNTI0IDAtMTAgNC40NzctMTAgMTBzNC40NzYgMTAgMTAgMTBjNS41MjIgMCAxMC00LjQ3NyAxMC0xMHMtNC40NzgtMTAtMTAtMTBabTAgMmE4IDggMCAxIDEtLjAwMSAxNiA4IDggMCAwIDEgMC0xNlptMCAzYTEgMSAwIDEgMCAwIDIgMSAxIDAgMCAwIDAtMlptMCAzYTEgMSAwIDAgMC0xIDF2NWExIDEgMCAwIDAgMiAwdi01YTEgMSAwIDAgMC0xLTFaIiBmaWxsPSIjMDAwIi8+PC9zdmc+)] bg-black box-border caret-transparent content-['_'] block shrink-0 [mask-repeat:no-repeat] [mask-size:120%] max-w-full min-h-6 align-bottom w-4 [mask-position:50%] after:accent-auto after:caret-transparent after:text-black after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-abc_favorit"></span>
          </span>
          <span
            role="tooltip"
            className="absolute text-white bg-black box-border caret-transparent hidden max-w-max align-bottom w-40 z-30 p-3 rounded-md left-2/4 bottom-full"
          >
            <div className="absolute box-border caret-transparent max-w-full align-bottom border-b-transparent border-x-transparent border-[6px] border-solid left-2/4 top-full"></div>
            {props.tooltipText}
          </span>
        </span>
      </h2>
      <div className="box-border caret-transparent max-w-full break-words align-bottom overflow-hidden">
        <span className="box-border caret-transparent max-w-full break-words align-bottom">
          {props.amount}
        </span>
      </div>
    </section>
  );
};
