import ActiveLink from "../active-link/ActiveLink";
const Navbar = () => {
  return (
    <div className="text-white p-4 pr-0 bg-neutral-800">
      <nav className="flex flex-col gap-5">
        <ActiveLink text="Dashboard" path="/" icon="HomeIcon" />
        <ActiveLink
          text="Categories"
          path="/categories"
          icon="ClipboardDocumentListIcon"
        />
        <ActiveLink
          text="Products"
          path="/products"
          icon="DevicePhoneMobileIcon"
        />
        <ActiveLink text="Settings" path="/settings" icon="Cog6ToothIcon" />
      </nav>
    </div>
  );
};
export default Navbar;
