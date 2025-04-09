import PropTypes from "prop-types";

const SystemControl = ({ status, onClick }) => (
    <button
        className={`system-Control ${status === "running" ? "running" : "pausing"}`}
        onClick={onClick}
        aria-label="Pause Control"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="800"
            height="800"
            fill="none"
            viewBox="0 0 28 28"
        >
            <path
                className="running"
                d="M10.5 9.8a.8.8 0 0 1 .8-.8h.4a.8.8 0 0 1 .8.8v8.4a.8.8 0 0 1-.8.8h-.4a.8.8 0 0 1-.8-.8V9.8ZM16.3 9a.8.8 0 0 0-.8.8v8.4a.8.8 0 0 0 .8.8h.4a.8.8 0 0 0 .8-.8V9.8a.8.8 0 0 0-.8-.8h-.4Z"
            />
            <path
                className="outline"
                fillRule="evenodd"
                d="M1 14C1 6.82 6.82 1 14 1s13 5.82 13 13-5.82 13-13 13S1 21.18 1 14ZM14 3C7.925 3 3 7.925 3 14s4.925 11 11 11 11-4.925 11-11S20.075 3 14 3Z"
                clipRule="evenodd"
            />
            <path
                className="pausing"
                d="m17.655 12.676-5.852-3.473c-.98-.581-2.198.154-2.198 1.324v6.946c0 1.171 1.219 1.905 2.198 1.324l5.852-3.472c.987-.585.987-2.063 0-2.649"
            />
        </svg>
    </button>
);

SystemControl.propTypes = {
    status: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default SystemControl;
