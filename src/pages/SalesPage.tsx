export const SalesPage = () => {
  return (
    <main className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-full align-bottom overflow-auto">
      <div className="box-border caret-transparent max-w-full align-bottom">
        <header className="box-border caret-transparent gap-x-4 flex flex-col max-w-full gap-y-4 align-bottom p-4 border-b-0 border-solid md:p-8 md:border-b">
          <div className="items-center box-border caret-transparent gap-x-2 flex justify-between max-w-full gap-y-2 align-bottom">
            <h1 className="text-2xl box-border caret-transparent leading-8 max-w-full min-h-0 align-bottom overflow-hidden">
              Sales
            </h1>
          </div>
        </header>
        <div className="box-border caret-transparent max-w-full align-bottom p-4 md:p-8">
          <div className="bg-white box-border caret-transparent gap-x-3 grid justify-items-center max-w-full gap-y-3 text-center align-bottom border p-6 rounded-bl rounded-br rounded-tl rounded-tr border-dashed">
            <figure className="box-border caret-transparent max-w-full align-bottom w-full">
              <img
                src="https://assets.gumroad.com/packs/static/20f9d3e0a6869c1b28a1.png"
                role="presentation"
                className="box-border caret-transparent max-w-full align-bottom w-full"
              />
            </figure>
            <h2 className="text-xl box-border caret-transparent leading-[26px] max-w-full align-bottom">
              No sales yet
            </h2>
            <p className="box-border caret-transparent max-w-full align-bottom">
              Your sales and customers will appear here once you make your first sale
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
