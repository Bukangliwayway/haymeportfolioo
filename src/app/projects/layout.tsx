export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div id="sub">
    <div className="ani">

    {children}
    </div>
    <div className="ani">

    {children}
    </div>
    <div className="ani">

    {children}
    </div>
    <div className="ani">

    {children}
    </div>
    <div className="ani">

    {children}
    </div>
    <div className="ani">

    {children}
    </div>
    </div>;
}
