import { ActivityCard } from "@/sections/ActivitySection/components/ActivityCard";

export const ActivitySection = () => {
  return (
    <div className="box-border caret-transparent gap-x-4 grid max-w-full gap-y-4 align-bottom p-4 md:p-8">
      <h2 className="text-xl box-border caret-transparent leading-[26px] max-w-full align-bottom">
        Activity
      </h2>
      <div className="box-border caret-transparent gap-x-4 grid grid-cols-[repeat(1,minmax(0px,1fr))] max-w-full gap-y-4 align-bottom md:grid-cols-[repeat(4,minmax(0px,1fr))]">
        <ActivityCard
          title="Balance"
          tooltipText="Your current balance available for payout"
          amount="$0"
        />
        <ActivityCard
          title="Last 7 days"
          tooltipText="Your total sales in the last 7 days"
          amount="$0"
        />
        <ActivityCard
          title="Last 28 days"
          tooltipText="Your total sales in the last 28 days"
          amount="$0"
        />
        <ActivityCard
          title="Total earnings"
          tooltipText="Your all-time net earnings from all products, excluding refunds and chargebacks"
          amount="$0"
        />
      </div>
      <div className="bg-white box-border caret-transparent gap-x-3 grid justify-items-center max-w-full gap-y-3 text-center align-bottom border p-6 rounded-bl rounded-br rounded-tl rounded-tr border-dashed">
        <p className="box-border caret-transparent max-w-full align-bottom">
          Followers and sales will show up here as they come in.
          <span className="box-border caret-transparent max-w-full align-bottom">
            {" "}
            For now,{" "}
            <a
              href="https://gumroad.com/products"
              className="box-border caret-transparent max-w-full underline align-bottom"
            >
              create a product
            </a>
            or{" "}
            <a
              href="https://gumroad.com/settings/profile"
              className="box-border caret-transparent max-w-full underline align-bottom"
            >
              customize your profile
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};
