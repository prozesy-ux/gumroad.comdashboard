export const AnalyticsPage = () => {
  return (
    <main className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-full align-bottom overflow-auto">
      <div className="box-border caret-transparent max-w-full align-bottom">
        <header className="box-border caret-transparent gap-x-4 flex flex-col max-w-full gap-y-4 align-bottom p-4 border-b-0 border-solid md:p-8 md:border-b">
          <div className="items-center box-border caret-transparent gap-x-2 flex justify-between max-w-full gap-y-2 align-bottom">
            <h1 className="text-2xl box-border caret-transparent leading-8 max-w-full min-h-0 align-bottom overflow-hidden">
              Analytics
            </h1>
          </div>
        </header>
        <div className="box-border caret-transparent gap-x-4 grid max-w-full gap-y-4 align-bottom p-4 md:p-8">
          <div className="box-border caret-transparent gap-x-4 grid grid-cols-[repeat(1,minmax(0px,1fr))] max-w-full gap-y-4 align-bottom md:grid-cols-[repeat(3,minmax(0px,1fr))]">
            <section className="text-4xl content-between bg-white box-border caret-transparent gap-x-2 grid leading-[45px] max-w-full gap-y-2 align-bottom border p-8 rounded-bl rounded-br rounded-tl rounded-tr border-solid">
              <h2 className="text-base box-border caret-transparent leading-6 max-w-full align-bottom">
                Total sales
              </h2>
              <div className="box-border caret-transparent max-w-full break-words align-bottom overflow-hidden">
                <span className="box-border caret-transparent max-w-full break-words align-bottom">$0</span>
              </div>
            </section>
            <section className="text-4xl content-between bg-white box-border caret-transparent gap-x-2 grid leading-[45px] max-w-full gap-y-2 align-bottom border p-8 rounded-bl rounded-br rounded-tl rounded-tr border-solid">
              <h2 className="text-base box-border caret-transparent leading-6 max-w-full align-bottom">
                Total customers
              </h2>
              <div className="box-border caret-transparent max-w-full break-words align-bottom overflow-hidden">
                <span className="box-border caret-transparent max-w-full break-words align-bottom">0</span>
              </div>
            </section>
            <section className="text-4xl content-between bg-white box-border caret-transparent gap-x-2 grid leading-[45px] max-w-full gap-y-2 align-bottom border p-8 rounded-bl rounded-br rounded-tl rounded-tr border-solid">
              <h2 className="text-base box-border caret-transparent leading-6 max-w-full align-bottom">
                Conversion rate
              </h2>
              <div className="box-border caret-transparent max-w-full break-words align-bottom overflow-hidden">
                <span className="box-border caret-transparent max-w-full break-words align-bottom">0%</span>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};
