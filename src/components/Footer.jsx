import PropTypes from "prop-types";

export default function Footer({ handleProfileClick }) {
  return (
    <div>
      <footer className="w-full bg-slate-800">
        <p className="py-4 text-xs text-center text-gray-400 md:text-sm">
          © 2024{" "}
          <button
            onClick={handleProfileClick}
            className="cursor-pointer hover:underline"
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
