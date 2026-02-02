export const EmptyStateSection = () => {
  return (
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
          We&#39;re here to help you get paid for your work.
        </h2>
        <a
          href="https://gumroad.com/products/new"
          className="items-center bg-pink-300 box-border caret-transparent gap-x-2 flex justify-center max-w-full gap-y-2 align-bottom border px-4 py-3 rounded-bl rounded-br rounded-tl rounded-tr border-solid hover:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgb(0,0,0)_4px_4px_0px_0px]"
        >
          Create your first product
        </a>
        <a
          href="https://gumroad.com/help/article/149-adding-a-product"
          className="box-border caret-transparent block max-w-full underline align-bottom"
        >
          Learn more about creating products
        </a>
      </div>
    </div>
  );
};
