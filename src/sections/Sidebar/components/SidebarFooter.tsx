export const SidebarFooter = () => {
  return (
    <footer className="hidden md:block mt-auto">
      <a href="https://gumroad.com/settings" className="flex items-center px-6 py-4 border-t border-white/50 hover:text-pink-300">
        <svg className="w-4 h-4 mr-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.968 2.46A9.669 9.669 0 0 0 5.25 4.649c-.333.31-.435.818-.219 1.219.801 1.48-.037 3.065-1.843 3.156-.443.023-.834.35-.938.78A8.713 8.713 0 0 0 2 11.993c0 .687.074 1.464.22 2.156.09.432.465.743.905.782 1.818.157 2.718 1.543 1.906 3.312-.18.393-.098.863.22 1.156 1.061.983 2.281 1.675 3.718 2.125.41.129.873-.026 1.125-.375 1.112-1.538 2.725-1.544 3.781 0 .25.364.705.539 1.125.406a10.072 10.072 0 0 0 3.75-2.156c.33-.3.417-.787.22-1.187-.833-1.68.124-3.221 1.842-3.25.456-.008.862-.308.97-.75.172-.717.218-1.342.218-2.22 0-.753-.089-1.496-.25-2.218a.994.994 0 0 0-.969-.781c-1.69-.003-2.639-1.665-1.812-3.125a.979.979 0 0 0-.188-1.22 10.153 10.153 0 0 0-3.812-2.186.986.986 0 0 0-1.125.406c-.966 1.5-2.77 1.527-3.719.03-.243-.382-.724-.574-1.156-.436ZM12 7.993a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"/>
        </svg>
        Settings
      </a>
      <a href="https://gumroad.com/help" className="flex items-center px-6 py-4 border-t border-white/50 hover:text-pink-300">
        <svg className="w-4 h-4 mr-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.014 3.999a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4l3.01.01c.425 0 .871.196 1.382.667.2.184.437.414.6.629.18.24.414.697 1.008.694.594-.003.787-.407 1-.688.161-.198.354-.387.553-.571.512-.471 1.021-.741 1.447-.741h3a4 4 0 0 0 4-4v-8a4 4 0 0 0-4-4h-3c-1.21 0-2.266.556-3 1.406-.734-.85-1.789-1.406-3-1.406h-3Zm0 2h3a2 2 0 0 1 2 2l.006 10.649c-.624-.405-1.294-.65-2.006-.65h-3a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Zm9 0h3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3c-.712 0-1.38.257-2.004.662l.004-10.662a2 2 0 0 1 2-2Z"/>
        </svg>
        Help
      </a>
      <button className="flex items-center justify-between w-full px-6 py-4 border-t border-white/50 hover:text-pink-300">
        <div className="flex items-center overflow-hidden flex-1">
          <img src="https://public-files.gumroad.com/01mr18zrf7kgeusag5kcpnzoxsmo" alt="Your avatar" className="w-5 h-5 rounded-full border border-white mr-3" />
          <span className="truncate">MERAJUL ISLAM</span>
        </div>
        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="m19 9.007-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </footer>
  );
};
