import React from "react";
import "./ListPage.css";
import ListItem from "../../components/LIstItem/ListItem";

type ListProps = { items: string[] };
const ListPage: React.FC<ListProps> = ({ items }) => {
  return (
    <>
      {items.map((i) => (
        <ListItem item={i}></ListItem>
      ))}
    </>
  );
};
export default ListPage;
