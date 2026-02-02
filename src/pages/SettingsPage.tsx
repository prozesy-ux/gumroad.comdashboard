export const SettingsPage = () => {
  return (
    <main className="box-border caret-transparent flex basis-[0%] flex-col grow max-w-full align-bottom overflow-auto">
      <div className="box-border caret-transparent max-w-full align-bottom">
        <header className="box-border caret-transparent gap-x-4 flex flex-col max-w-full gap-y-4 align-bottom p-4 border-b-0 border-solid md:p-8 md:border-b">
          <div className="items-center box-border caret-transparent gap-x-2 flex justify-between max-w-full gap-y-2 align-bottom">
            <h1 className="text-2xl box-border caret-transparent leading-8 max-w-full min-h-0 align-bottom overflow-hidden">
              Settings
            </h1>
          </div>
        </header>
        <div className="box-border caret-transparent max-w-full align-bottom p-4 md:p-8">
          <div className="bg-white box-border caret-transparent max-w-full align-bottom border p-6 rounded-bl rounded-br rounded-tl rounded-tr border-solid">
            <div className="box-border caret-transparent gap-x-4 grid max-w-full gap-y-4 align-bottom">
              <a href="https://gumroad.com/settings/profile" className="flex items-center justify-between p-4 hover:bg-stone-50 rounded border-b">
                <span className="font-semibold">Profile</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://gumroad.com/settings/payments" className="flex items-center justify-between p-4 hover:bg-stone-50 rounded border-b">
                <span className="font-semibold">Payments</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://gumroad.com/settings/account" className="flex items-center justify-between p-4 hover:bg-stone-50 rounded border-b">
                <span className="font-semibold">Account</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://gumroad.com/settings/advanced" className="flex items-center justify-between p-4 hover:bg-stone-50 rounded">
                <span className="font-semibold">Advanced</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
