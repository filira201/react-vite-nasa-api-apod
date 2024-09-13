const SideBar = ({ closeModal, data }) => {
  return (
    <div className="sidebar">
      <div onClick={closeModal} className="bg-overlay"></div>
      <div className="sidebar-container">
        <h2>{data?.title}</h2>
        <div className="description-container">
          <p className="description-title">{data?.date}</p>
          <p>{data?.explanation}</p>
        </div>
        <button onClick={closeModal}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
