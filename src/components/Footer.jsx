const Footer = ({ openModal, data }) => {
  return (
    <footer>
      <div className="bg-gradient"></div>
      <div>
        <h1>NASA API PROJECT</h1>
        <h2>{data?.title}</h2>
      </div>
      <button onClick={openModal}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
};

export default Footer;
