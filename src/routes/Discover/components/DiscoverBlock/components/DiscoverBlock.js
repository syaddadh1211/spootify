import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import DiscoverItem from "./DiscoverItem";
import "../styles/_discover-block.scss";

function scrollContainer(id, { isNegative } = {}) {
  return () => {
    const scrollableContainer = document.getElementById(id);
    const amount = isNegative
      ? -scrollableContainer.offsetWidth
      : scrollableContainer.offsetWidth;

    scrollableContainer.scrollLeft = scrollableContainer.scrollLeft + amount;
  };
}

export default function DiscoverBlock({
  text,
  id,
  data,
  imagesKey = "images",
}) {
  if (text === "RELEASED THIS WEEK") {
    return (
      <div className="discover-block">
        <div className="discover-block__header">
          <h2>{text}</h2>
          <span />
          {data.length ? (
            <div className="animate__animated animate__fadeIn">
              <FontAwesomeIcon
                icon={faChevronLeft}
                onClick={scrollContainer(id, { isNegative: true })}
              />
              <FontAwesomeIcon
                icon={faChevronRight}
                onClick={scrollContainer(id)}
              />
            </div>
          ) : null}
        </div>

        <div className="discover-block__row" id={id}>
          {data.map((images, name) => (
            <DiscoverItem
              key={name}
              images={images.albums.items[name].images}
              name={images.albums.items[name].name}
            />
          ))}
        </div>
      </div>
    );
  }

  if (text === "FEATURED PLAYLISTS") {
    return (
      <div className="discover-block">
        <div className="discover-block__header">
          <h2>{text}</h2>
          <span />
          {data.length ? (
            <div className="animate__animated animate__fadeIn">
              <FontAwesomeIcon
                icon={faChevronLeft}
                onClick={scrollContainer(id, { isNegative: true })}
              />
              <FontAwesomeIcon
                icon={faChevronRight}
                onClick={scrollContainer(id)}
              />
            </div>
          ) : null}
        </div>

        <div className="discover-block__row" id={id}>
          {data.map((images, name) => (
            <DiscoverItem
              key={name}
              images={images.playlists.items[name].images}
              name={images.playlists.items[name].name}
            />
          ))}
        </div>
      </div>
    );
  }

  if (text === "BROWSE") {
    return (
      <div className="discover-block">
        <div className="discover-block__header">
          <h2>{text}</h2>
          <span />
          {data.length ? (
            <div className="animate__animated animate__fadeIn">
              <FontAwesomeIcon
                icon={faChevronLeft}
                onClick={scrollContainer(id, { isNegative: true })}
              />
              <FontAwesomeIcon
                icon={faChevronRight}
                onClick={scrollContainer(id)}
              />
            </div>
          ) : null}
        </div>

        <div className="discover-block__row" id={id}>
          {data.map((images, name) => (
            <DiscoverItem
              key={name}
              images={images.categories.items[3].icons}
              name={images.categories.items[3].name}
            />
          ))}
        </div>
      </div>
    );
  }
}
