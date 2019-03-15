import * as React from "react";

interface IHeaderProps {
  setPageName: React.Dispatch<string>;
}

const Header: React.FunctionComponent<IHeaderProps> = props => {
  const onClick: (event: React.MouseEvent<HTMLSpanElement>) => void = event => {
    console.log(event.currentTarget.id);
    props.setPageName(event.currentTarget.id);
  };
  return (
    <div className="menuWrapper">
      <div className="menuItems">
        <span className="menuLinks" id="addRecipe" onClick={onClick}>
          Add Recipe
        </span>
        <span className="menuLinks" id="viewRecipes" onClick={onClick}>
          View Recipes
        </span>
      </div>
    </div>
  );
};

export { Header };
