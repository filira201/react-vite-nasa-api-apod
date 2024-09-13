const Main = ({ data }) => {
  return (
    <div className="img-container">
      <img
        className="bg-image"
        alt={data?.title || "image from NASA"}
        src={data?.url}
      />
    </div>
  );
};

export default Main;
