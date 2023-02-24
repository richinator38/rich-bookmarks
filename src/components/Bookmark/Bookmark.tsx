import React from "react";
import { useNavigate } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiPencil } from "@mdi/js";

export interface BookmarkProps {
  id: number;
  link: string;
  text: string;
}

const Bookmark = (props: BookmarkProps) => {
  const navigate = useNavigate();

  const handleLink = () => {
    window.open(props.link, "_blank");
  };

  const handleEdit = (event: any) => {
    event.preventDefault();
    event.stopPropagation();

    navigate(`/bookmarks/${props.id}`);
  };

  return (
    <div
      className="relative p-3 rounded-lg border border-gray-600 cursor-pointer bg-sky-500/40 hover:bg-sky-500"
      onClick={handleLink}
    >
      <span>{props.text}</span>
      <button onClick={handleEdit} className="float-right">
        <Icon path={mdiPencil} title="Edit Bookmark" size={1} />
      </button>
    </div>
  );
};

export default Bookmark;
