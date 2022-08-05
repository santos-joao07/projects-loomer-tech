import certification from '../assets/certification.svg';

function Certification() {
  return (
    <session className="certification" >
      <div className="image-certification">
        <img src={certification} alt="certification" />
      </div>
      <div className="certification-container">
        <div className="description-certification">
          <div className="text-certification">
            <h3>Gabung Kelas dan Dapatkan <b>Sertifikat</b></h3>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut</p>
          </div>

          <div className="title-buttons">
            <div id="second" className="button">
              <p > Promo 70% </p>
            </div>
          </div>
        </div>
      </div>
    </session>
  )
}

export default Certification