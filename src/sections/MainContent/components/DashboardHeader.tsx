export const DashboardHeader = () => {
  return (
    <header className="box-border caret-transparent gap-x-4 flex flex-col max-w-full gap-y-4 align-bottom p-4 border-b-0 border-solid md:p-8 md:border-b">
      <div className="items-center box-border caret-transparent gap-x-2 flex justify-between max-w-full gap-y-2 align-bottom">
        <h1 className="text-2xl box-border caret-transparent hidden leading-8 max-w-full min-h-0 align-bottom overflow-hidden md:block md:min-h-[auto]">
          Dashboard
        </h1>
        <div className="box-border caret-transparent gap-x-2 grid basis-[0%] grow shrink grid-cols-[repeat(2,minmax(0px,1fr))] max-w-full gap-y-2 align-bottom my-0 md:flex md:basis-auto md:grow-0 md:shrink-0 md:-my-2"></div>
      </div>
    </header>
  );
};
