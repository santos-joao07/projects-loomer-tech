import Card from '../components/Card'
import { useId } from 'react';
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import tiktok from '../assets/tiktok.svg'

function Baseboard() {

    const generateId = useId()

    const data = [
        {
            id: generateId,
            image: facebook,
        },
        {
            id: generateId,
            image: instagram,
        },
        {
            id: generateId,
            image: tiktok,
        },
    ];

    return (
        <session className="baseboard">
            <div className="baseboard-description">
                <div className="baseboard-paragraph">
                    <div className="baseboard-title">
                        <h3>Dapatkan <b>Points</b> Setiap Selesai Kelas</h3>
                    </div>

                    <div className="baseboard-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit, sed do eiusmod.</p>
                    </div>
                </div>
                <div id="second" className="button">
                    <p > Promo 70% </p>
                </div>
            </div>

            <div className="baseboard-icons">
                <Card boxData={data} />
            </div>

        </session>
    )
}

export default Baseboard;