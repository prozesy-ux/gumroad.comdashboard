export type OnboardingCardProps = {
  iconSrc: string;
  title: string;
  description: string;
  href?: string;
  badgeVariant: string;
};

export const OnboardingCard = (props: OnboardingCardProps) => {
  const content = (
    <div className="items-center box-border caret-transparent gap-x-1 flex flex-col max-w-full gap-y-1 align-bottom my-3">
      <img
        src={props.iconSrc}
        alt="Icon"
        className="box-border caret-transparent h-[60px] align-bottom w-[60px]"
      />
      <span className="font-semibold box-border caret-transparent block leading-5 max-w-full align-bottom">
        {props.title}
      </span>
      <span className={props.badgeVariant}></span>
      <p className="text-sm box-border caret-transparent leading-5 max-w-full opacity-80 align-bottom">
        {props.description}
      </p>
    </div>
  );

  if (props.href) {
    return (
      <a
        href={props.href}
        className="relative items-center bg-white box-border caret-transparent gap-x-2 flex justify-center max-w-full gap-y-2 align-bottom border px-4 py-3 rounded-bl rounded-br rounded-tl rounded-tr border-solid hover:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgb(0,0,0)_4px_4px_0px_0px]"
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      className="relative items-center bg-white caret-transparent gap-x-2 flex justify-center max-w-full opacity-30 gap-y-2 text-center align-bottom border px-4 py-3 rounded-bl rounded-br rounded-tl rounded-tr border-solid hover:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px]"
    >
      {content}
    </button>
  );
};
