import React from "react";
import { img_300, img_not_available } from "../../config";
import "./style.css";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { Link } from "react-router-dom";
function SingleCardContent({ data, type }) {
  const title = data.original_title || data.name;
  const id = data.id;
  const ImageURL = data.poster_path
    ? img_300 + data.poster_path
    : img_not_available;
  const media_type = data.media_type ? data.media_type : type;
  const release_date = data.release_date || data.first_air_date;
  const vote_average = parseInt(data.vote_average);
  const original_language = data.original_language || "";
  return (
    <div className="card-wrapper">
      <Link to={`/details/${id}/${media_type}`}>
        <div className="image-banner">
          <img src={ImageURL} alt={title} />
          <div className="type-lan">
            {media_type}
            <b>{original_language}</b>
          </div>

          <div className="circle-rate">
            <RadioButtonUncheckedIcon className="rating-icon" />
            <b>{vote_average}</b>
          </div>
        </div>

        <div className="title-date">
        <div className="release-date">
          <p className="date-title">Release Date</p>
          <small className="rel-date">{release_date}</small>
        </div>
          <div className="name">
            <h3 className="">{title}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default SingleCardContent;
