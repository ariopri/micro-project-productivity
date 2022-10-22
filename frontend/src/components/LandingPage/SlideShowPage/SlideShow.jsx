import "../LandingPage.scss";
import Background from "../img/bg.png";

const SlideShow = () => {
  return (
    <div className="custom">
      <div className="container">
        <div className="row">
          <div className="custom-section col-md-12 col-lg-6">
            <h2>Mengatur, Merencanakan, dan Berkolaborasi Dengan Mudah</h2>
            <p>
              Mengingat semua dan tangani proyek apa pun dengan catatan, tugas,
              dan jadwal Kamu semuanya di satu tempat mudah dan cepat.
            </p>
            <a href="/login">Mulai</a>
          </div>
          <div className="col-md-6 custom-img">
            <img src={Background} alt="Gambar" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
