import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

export const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title} · Boogibooks</title>
    </Helmet>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export const objIsEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

objIsEmpty.propTypes = {
  obj: PropTypes.object.isRequired,
};

export const timeToString = (time, full = false) => {
  const t = new Date(parseInt(time));
  const yy = t.getFullYear().toString();
  const MM = (t.getMonth() + 1).toString().padStart(2, 0);
  const dd = t.getDate().toString().padStart(2, 0);
  const hh = t.getHours().toString().padStart(2, 0);
  const mm = t.getMinutes().toString().padStart(2, 0);
  const ss = t.getSeconds().toString().padStart(2, 0);

  if (full) {
    return `${yy}-${MM}-${dd}-${hh}-${mm}-${ss}`;
  }
  return `${yy}-${MM}-${dd}`;
};
