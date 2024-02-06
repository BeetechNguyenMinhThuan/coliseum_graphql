import { Link, useLocation } from "react-router-dom";

const pathNameMapping = {
  author: "著者",
};

function Breadcrumbs() {
  const location = useLocation();
  let currentLink = "";
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      const displayName = pathNameMapping[crumb] || crumb;
      return (
        <div className="">
          <div key={crumb}>
            <Link to={currentLink}>
              {" > "}
              {displayName}
            </Link>
          </div>
        </div>
      );
    });
  return (
    <div className="flex gap-x-3">
      <div>
        <Link to="/">TOP</Link>
      </div>
      {crumbs}
    </div>
  );
}

export default Breadcrumbs;
