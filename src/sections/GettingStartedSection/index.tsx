import { OnboardingCard } from "@/sections/GettingStartedSection/components/OnboardingCard";

export const GettingStartedSection = () => {
  return (
    <div className="box-border caret-transparent gap-x-4 grid max-w-full gap-y-4 align-bottom p-4 md:p-8">
      <div className="items-center box-border caret-transparent flex justify-between max-w-full align-bottom">
        <h2 className="text-xl box-border caret-transparent leading-[26px] max-w-full align-bottom">
          Getting started
        </h2>
        <a
          href="https://gumroad.com/dashboard"
          aria-label="Minimize getting started"
          className="items-center box-border caret-transparent gap-x-1 flex max-w-full gap-y-1 underline align-bottom"
        >
          <span className="box-border caret-transparent block max-w-full align-bottom">
            Show less
          </span>
          <span className="[mask-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTExLjk5OCAyLjAxNGExIDEgMCAwIDAtMSAxdjMuNTYybC0yLTEuOTY4LTEuNDA2IDEuNDA2IDMuNjg3IDMuNzJhMS4wMyAxLjAzIDAgMCAwIDEuNDM4IDBsMy42ODctMy43Mi0xLjQwNi0xLjQwNi0yIDEuOTY4VjMuMDE0YTEgMSAwIDAgMC0xLTFtLTcgOWExIDEgMCAwIDAgMCAyaDE0YTEgMSAwIDAgMCAwLTJ6bTcgM2MtLjI1NiAwLS41MjMuMDg2LS43Mi4yODFsLTMuNjg3IDMuNzIgMS40MDcgMS40MDUgMi0xLjk2OHYzLjU2MmExIDEgMCAwIDAgMiAwdi0zLjU2MmwyIDEuOTY4IDEuNDA2LTEuNDA2LTMuNjg3LTMuNzE5YTEgMSAwIDAgMC0uNzItLjI4Ii8+PC9zdmc+)] bg-black box-border caret-transparent content-['_'] block shrink-0 h-5 [mask-repeat:no-repeat] [mask-size:120%] max-w-full min-h-[22.3906px] align-bottom w-5 [mask-position:50%] after:accent-auto after:caret-transparent after:text-black after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[22.4px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-abc_favorit"></span>
        </a>
      </div>
      <div className="box-border caret-transparent gap-x-4 grid grid-cols-[repeat(1,minmax(0px,1fr))] max-w-full gap-y-4 align-bottom w-full md:grid-cols-[repeat(4,minmax(0px,1fr))]">
        <OnboardingCard
          iconSrc="https://c.animaapp.com/ml3j3t2c1ppih4/assets/icon-2.svg"
          title="Welcome aboard"
          description="Make a Gumroad account."
          badgeVariant="[mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMiAyMS42MWE5LjYgOS42IDAgMSAwIDAtMTkuMiA5LjYgOS42IDAgMCAwIDAgMTkuMlptNC40NS0xMS4xNTJhMS4yIDEuMiAwIDAgMC0xLjY5OC0xLjY5N2wtMy45NTEgMy45NTItMS41NTItMS41NTJhMS4yIDEuMiAwIDAgMC0xLjY5NyAxLjY5N2wyLjQgMi40YTEuMiAxLjIgMCAwIDAgMS42OTcgMGw0LjgtNC44WiIgZmlsbD0iIzAwMCIvPjwvc3ZnPg==)] absolute text-teal-600 bg-teal-600 box-border caret-transparent content-['_'] block shrink-0 [mask-repeat:no-repeat] [mask-size:120%] max-w-full min-h-[22.3906px] align-bottom w-4 [mask-position:50%] right-2 top-2 after:accent-auto after:caret-transparent after:text-teal-600 after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[22.4px] after:list-outside after:list-disc after:pointer-events-auto after:text-center after:indent-[0px] after:normal-case after:visible after:border-separate after:font-abc_favorit"
        />
        <OnboardingCard
          iconSrc="https://c.animaapp.com/ml3j3t2c1ppih4/assets/icon-3.svg"
          title="Make an impression"
          description="Customize your profile."
          badgeVariant="[mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMiAyMS42MWE5LjYgOS42IDAgMSAwIDAtMTkuMiA5LjYgOS42IDAgMCAwIDAgMTkuMlptNC40NS0xMS4xNTJhMS4yIDEuMiAwIDAgMC0xLjY5OC0xLjY5N2wtMy45NTEgMy45NTItMS41NTItMS41NTJhMS4yIDEuMiAwIDAgMC0xLjY5NyAxLjY5N2wyLjQgMi40YTEuMiAxLjIgMCAwIDAgMS42OTcgMGw0LjgtNC44WiIgZmlsbD0iIzAwMCIvPjwvc3ZnPg==)] absolute text-teal-600 bg-teal-600 box-border caret-transparent content-['_'] block shrink-0 [mask-repeat:no-repeat] [mask-size:120%] max-w-full min-h-[22.3906px] align-bottom w-4 [mask-position:50%] right-2 top-2 after:accent-auto after:caret-transparent after:text-teal-600 after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[22.4px] after:list-outside after:list-disc after:pointer-events-auto after:text-center after:indent-[0px] after:normal-case after:visible after:border-separate after:font-abc_favorit"
        />
        <OnboardingCard
          iconSrc="https://c.animaapp.com/ml3j3t2c1ppih4/assets/icon-4.svg"
          title="Showtime"
          description="Create your first product."
          href="https://gumroad.com/products/new"
          badgeVariant="[mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyLjAxNCAyLjAwMmMtNS41MjIgMC0xMCA0LjQ3Ny0xMCAxMHM0LjQ3OCAxMCAxMCAxMGM1LjUyNCAwIDEwLTQuNDc3IDEwLTEwcy00LjQ3Ni0xMC0xMC0xMFptMCAyYTggOCAwIDEgMSAwIDE2IDggOCAwIDAgMSAwLTE2WiIgZmlsbD0iIzAwMCIvPjwvc3ZnPg==)] absolute text-neutral-800 bg-neutral-800 box-border caret-transparent content-['_'] block shrink-0 [mask-repeat:no-repeat] [mask-size:120%] max-w-full min-h-[22.3906px] align-bottom w-4 [mask-position:50%] right-2 top-2 after:accent-auto after:caret-transparent after:text-neutral-800 after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[22.4px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-abc_favorit"
        />
        <OnboardingCard
          iconSrc="https://c.animaapp.com/ml3j3t2c1ppih4/assets/icon-5.svg"
          title="Build your tribe"
          description="Get your first follower."
          href="https://gumroad.com/followers"
          badgeVariant="[mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyLjAxNCAyLjAwMmMtNS41MjIgMC0xMCA0LjQ3Ny0xMCAxMHM0LjQ3OCAxMCAxMCAxMGM1LjUyNCAwIDEwLTQuNDc3IDEwLTEwcy00LjQ3Ni0xMC0xMC0xMFptMCAyYTggOCAwIDEgMSAwIDE2IDggOCAwIDAgMSAwLTE2WiIgZmlsbD0iIzAwMCIvPjwvc3ZnPg==)] absolute text-neutral-800 bg-neutral-800 box-border caret-transparent content-['_'] block shrink-0 [mask-repeat:no-repeat] [mask-size:120%] max-w-full min-h-[22.3906px] align-bottom w-4 [mask-position:50%] right-2 top-2 after:accent-auto after:caret-transparent after:text-neutral-800 after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[22.4px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-abc_favorit"
        />
        <OnboardingCard
          iconSrc="https://c.animaapp.com/ml3j3t2c1ppih4/assets/icon-6.svg"
          title="Cha-ching"
          description="Make your first sale."
          href="https://gumroad.com/dashboard/sales"
          badgeVariant="[mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyLjAxNCAyLjAwMmMtNS41MjIgMC0xMCA0LjQ3Ny0xMCAxMHM0LjQ3OCAxMCAxMCAxMGM1LjUyNCAwIDEwLTQuNDc3IDEwLTEwcy00LjQ3Ni0xMC0xMC0xMFptMCAyYTggOCAwIDEgMSAwIDE2IDggOCAwIDAgMSAwLTE2WiIgZmlsbD0iIzAwMCIvPjwvc3ZnPg==)] absolute text-neutral-800 bg-neutral-800 box-border caret-transparent content-['_'] block shrink-0 [mask-repeat:no-repeat] [mask-size:120%] max-w-full min-h-[22.3906px] align-bottom w-4 [mask-position:50%] right-2 top-2 after:accent-auto after:caret-transparent after:text-neutral-800 after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[22.4px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-abc_favorit"
        />
        <OnboardingCard
          iconSrc="https://c.animaapp.com/ml3j3t2c1ppih4/assets/icon-7.svg"
          title="Money inbound"
          description="Get your first pay out."
          href="https://gumroad.com/settings/payments"
          badgeVariant="[mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyLjAxNCAyLjAwMmMtNS41MjIgMC0xMCA0LjQ3Ny0xMCAxMHM0LjQ3OCAxMCAxMCAxMGM1LjUyNCAwIDEwLTQuNDc3IDEwLTEwcy00LjQ3Ni0xMC0xMC0xMFptMCAyYTggOCAwIDEgMSAwIDE2IDggOCAwIDAgMSAwLTE2WiIgZmlsbD0iIzAwMCIvPjwvc3ZnPg==)] absolute text-neutral-800 bg-neutral-800 box-border caret-transparent content-['_'] block shrink-0 [mask-repeat:no-repeat] [mask-size:120%] max-w-full min-h-[22.3906px] align-bottom w-4 [mask-position:50%] right-2 top-2 after:accent-auto after:caret-transparent after:text-neutral-800 after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[22.4px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-abc_favorit"
        />
        <OnboardingCard
          iconSrc="https://c.animaapp.com/ml3j3t2c1ppih4/assets/icon-8.svg"
          title="Making waves"
          description="Send out your first email blast."
          href="https://gumroad.com/posts"
          badgeVariant="[mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyLjAxNCAyLjAwMmMtNS41MjIgMC0xMCA0LjQ3Ny0xMCAxMHM0LjQ3OCAxMCAxMCAxMGM1LjUyNCAwIDEwLTQuNDc3IDEwLTEwcy00LjQ3Ni0xMC0xMC0xMFptMCAyYTggOCAwIDEgMSAwIDE2IDggOCAwIDAgMSAwLTE2WiIgZmlsbD0iIzAwMCIvPjwvc3ZnPg==)] absolute text-neutral-800 bg-neutral-800 box-border caret-transparent content-['_'] block shrink-0 [mask-repeat:no-repeat] [mask-size:120%] max-w-full min-h-[22.3906px] align-bottom w-4 [mask-position:50%] right-2 top-2 after:accent-auto after:caret-transparent after:text-neutral-800 after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[22.4px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-abc_favorit"
        />
        <OnboardingCard
          iconSrc="https://c.animaapp.com/ml3j3t2c1ppih4/assets/icon-9.svg"
          title="Smart move"
          description="Sign up for Small Bets."
          href="https://gumroad.com/small-bets"
          badgeVariant="[mask-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyLjAxNCAyLjAwMmMtNS41MjIgMC0xMCA0LjQ3Ny0xMCAxMHM0LjQ3OCAxMCAxMCAxMGM1LjUyNCAwIDEwLTQuNDc3IDEwLTEwcy00LjQ3Ni0xMC0xMC0xMFptMCAyYTggOCAwIDEgMSAwIDE2IDggOCAwIDAgMSAwLTE2WiIgZmlsbD0iIzAwMCIvPjwvc3ZnPg==)] absolute text-neutral-800 bg-neutral-800 box-border caret-transparent content-['_'] block shrink-0 [mask-repeat:no-repeat] [mask-size:120%] max-w-full min-h-[22.3906px] align-bottom w-4 [mask-position:50%] right-2 top-2 after:accent-auto after:caret-transparent after:text-neutral-800 after:text-base after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[22.4px] after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-abc_favorit"
        />
      </div>
    </div>
  );
};
