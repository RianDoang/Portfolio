import PropTypes from "prop-types";

export default function Container({ children }) {
  return <div className="px-5 sm:px-7 md:px-10">{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
