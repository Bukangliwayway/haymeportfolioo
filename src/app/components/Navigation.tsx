import TransitionLink from "./TransitionLink";

const Navigation = () => {
  return (
    <nav className="w-full p-5 flex flex-row justify-between space-x-20 fixed top-0 backdrop-blur-xs">
      <h1 className="text-3xl tracking-tight font-bold text-neutral-900">
        hayme
      </h1>

      <div className="flex gap-5">
        <TransitionLink href="/" label="Home" />
        <TransitionLink href="/projects" label="Projects" />
        <TransitionLink href="/about" label="About" />
      </div>
    </nav>
  );
};

export default Navigation;
