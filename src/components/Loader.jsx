const Loader = ({ size = 36 }) => {
  return (
    <div className="flex items-center justify-center py-10">
      <svg
        className="google-spinner-svg"
        style={{ width: size, height: size }}
        viewBox="25 25 50 50"
      >
        <circle
          className="google-spinner-path"
          cx="50"
          cy="50"
          r="20"
          fill="none"
          strokeWidth="4"
        />
      </svg>
    </div>
  );
};

export default Loader;
