import student from '../assets/student.svg';

function Summit() {
  return (
    <session className="summit">
      <div className="description">
        <div className="container">
          <div className="title-description">
            <h3>Belajar Skill dengan Mentor Expert</h3>
          </div>
          <div className="text-description">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>

        <div className="general-buttons">
          <div className="title-buttons">
            <div id="first" className="button">
              <p > Cari Kelas </p>
            </div>
            <div id="second" className="button">
              <p > Promo 70% </p>
            </div>
          </div>
        </div>

      </div>

      <div className="image-student">
        <img src={student} alt="student" />
      </div>
    </session>
  )
}

export default Summit