import PropTypes from "prop-types";

export default function Footer({ handleProfileClick }) {
  return (
    <div>
      <footer className="w-full bg-gray-900">
        <p className="py-4 text-xs text-center text-gray-500 md:text-sm">
          © 2024{" "}
          <button
            onClick={handleProfileClick}
            className="cursor-pointer hover:underline hover:text-gray-400"
          >
            RealmYoke™
          </button>
          . All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

Footer.propTypes = {
  handleProfileClick: PropTypes.func.isRequired,
};
