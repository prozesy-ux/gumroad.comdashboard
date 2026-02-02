export const WorkflowsPage = () => {
  return (
    <main className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-full align-bottom overflow-auto">
      <div className="box-border caret-transparent max-w-full align-bottom">
        <header className="box-border caret-transparent gap-x-4 flex flex-col max-w-full gap-y-4 align-bottom p-4 border-b-0 border-solid md:p-8 md:border-b">
          <div className="items-center box-border caret-transparent gap-x-2 flex justify-between max-w-full gap-y-2 align-bottom">
            <h1 className="text-2xl box-border caret-transparent leading-8 max-w-full min-h-0 align-bottom overflow-hidden">
              Workflows
            </h1>
            <a
              href="https://gumroad.com/workflows/new"
              className="items-center bg-pink-300 box-border caret-transparent gap-x-2 flex justify-center max-w-full gap-y-2 align-bottom border px-4 py-3 rounded-bl rounded-br rounded-tl rounded-tr border-solid hover:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgb(0,0,0)_4px_4px_0px_0px]"
            >
              New workflow
            </a>
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
              No workflows yet
            </h2>
            <p className="box-border caret-transparent max-w-full align-bottom">
              Automate your business with workflows
            </p>
            <a
              href="https://gumroad.com/workflows/new"
              className="items-center bg-pink-300 box-border caret-transparent gap-x-2 flex justify-center max-w-full gap-y-2 align-bottom border px-4 py-3 rounded-bl rounded-br rounded-tl rounded-tr border-solid hover:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgb(0,0,0)_4px_4px_0px_0px]"
            >
              Create your first workflow
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};
