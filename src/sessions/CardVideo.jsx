import Card from '../components/Card'
import { useId } from 'react';
import frontEnd from '../assets/frontEnd.svg'
import uxResearch from '../assets/uxResearch.svg'
import basicPhotography from '../assets/basicPhotography.svg'

function CardVideo() {

    const generateId = useId()

    const data = [
        {
            id: generateId,
            image: frontEnd,
        },
        {
            id: generateId,
            image: uxResearch,
        },
        {
            id: generateId,
            image: basicPhotography,
        },
    ];

    return (
        <session className="cards">
            <div>
                <div className="title-cards">
                    <h3>Akses Jutaan Video tanpa Batas</h3>
                </div>

                <div className="images-cards">
                    <Card boxData={data} />
                </div>
            </div>

            <div className="more-cards">
                <p>
                    Lihat Video Lainnya
                </p>
            </div>
        </session>
    )
}

export default CardVideo