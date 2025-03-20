import { Link } from "react-router";

export interface MyDropdownProps {
  image: string;
  title: string;
}

function dropdowncontent({ title, image }: MyDropdownProps) {
  return (
    <Link to="/consommable">
      <h3>{title}</h3>
      <img src={image} alt="placeholder" />
    </Link>
  );
}

export default dropdowncontent;
