import { StyledOffer } from './styled';
import { StyledSectionTitle } from '../../utils/styled';
import Image from 'next/image';

export default function Offer() {
    return (
        <StyledOffer>
            <div className="container">
                <StyledSectionTitle>
                    Moje usługi
                    <p>jakie oferuje</p>
                </StyledSectionTitle>
                <div className="offerElement">
                    <div className="offer-image">
                        <Image src="/images/coding.png" width="150px" height="150px"/>
                    </div>
                    <div className="offer-content">
                        <h3>Wdroże Twój projekt strony internetowej</h3>
                        <p>Stworzę dla Ciebie stronę www z danego szablonu i wdroże go do produkcji</p>
                    </div>
                </div>
                <div className="offerElement">
                    <div className="offer-image">
                        <Image className="offer-image" src="/images/search-engine.png" width="150px" height="150px"/>
                    </div>
                    <div className="offer-content">
                        <h3>Zadbam o SEO Twojej strony internetowej</h3>
                        <p>Zajmę się pozycjonowaniem twojej strony, aby była częściej wyszukiwana i lepiej widoczna dla wyszukiwarek i botów</p>
                    </div>
                </div>
                <div className="offerElement">
                    <div className="offer-image">
                        <Image src="/images/devices.png" width="150px" height="150px"/>
                    </div>
                    <div className="offer-content">
                        <h3>Responsywność aplikacji internetowej</h3>
                        <p>Zadbam o to, aby twoja strona była idealnie przystosowana do różnego rodzajów urządzeń , od smarfonów do komputerów</p>
                    </div>
                </div>
            </div>
        </StyledOffer>
    )
}