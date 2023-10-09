import { h, FunctionComponent } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { RawHtml } from '../common/raw-html';
import cx from 'classnames';
import { CardCompareContentNode } from './card-compare-content-node';

export interface CardSectionProps {
  itemState?: any;
}

export const Compare: FunctionComponent<CardSectionProps> = ({ itemState }) => {
  const [flag, setFlag] = useState(true);
  const [selectedCard, setSelectedCard] = useState<string[]>([]);
  const [filteredCards, setFilteredCards] = useState<string[]>([]);
  const cards = itemState.state.allItems;
  const dummyCard = { type: 'dummy' };
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    // Event listener to update the state when the viewport changes
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Attach the event listener on component mount
    window.addEventListener('resize', handleResize);

    // Remove the event listener on component unmount to prevent memory leaks
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

 

  const handleCardClick = (item: any) => {
    if ((isMobile?selectedCard.length < 2:selectedCard.length < 3) || selectedCard.includes(item.id)) {
      setSelectedCard((prevSelectedCard) => {
        if (prevSelectedCard.includes(item.id)) {
          return prevSelectedCard.filter((id) => id !== item.id); // Deselect the card
        } else if (isMobile?prevSelectedCard.length < 2:prevSelectedCard.length < 3) {
          return [...prevSelectedCard, item.id]; // Select the card
        } else {
          return prevSelectedCard; // Keep the selection as is when three cards are already selected
        }
      });
    }
  };


  const checkDummy=(updatedFilteredCards: any[])=>{
   let count=3

   if(isMobile) count=2
    while (updatedFilteredCards.length < count) {
      updatedFilteredCards.push(dummyCard);
    }

    setFilteredCards(updatedFilteredCards);

  }

  useEffect(() => {
  
    const updatedFilteredCards = selectedCard.map((cardId) => {
      const foundCard = cards.find((card: { id: string }) => card.id === cardId);
      return foundCard
    });

    checkDummy(updatedFilteredCards)
    
  }, [selectedCard,isMobile]);



  useEffect(() => {
   
    const queryParams = new URLSearchParams(window.location.search);
    const selectedCardIds = queryParams.getAll('ids');
    if (selectedCardIds.length) {
      const cardIdsArray = selectedCardIds[0].split(' ');
      const updatedFilteredCards = cardIdsArray.map((cardId) => {
        const foundCard = cards.find((card: { id: string }) => card.id === cardId);
        return foundCard
      });

      checkDummy(updatedFilteredCards)
      setSelectedCard(cardIdsArray);
  
    }
  }, []);

  



  return (
    <div>
      {flag ? (
        <div>
          <div className="cc-heading">
            <h1>Compare Cards</h1>
            <p>
              Compare features and benifits from different Cards from American Express and find the
              best card that suits your needs
            </p>
          </div>
          <div className="card-section">
            {filteredCards.map((item: any) => (
              <div>
                <a onClick={() =>setFlag(false)}>
                  <img
                    src={item.image ? item.image : 'assets/card-filler.webp'}
                    alt="Empty card art"
                    aria-hidden="true"
                    data-qe-id="CardArt"
                  />
                </a>
                {selectedCard.includes(item.id) ? (
                  <button className="close-button" onClick={() => handleCardClick(item)}>
                    X
                  </button>
                ) : null}
              </div>
            ))}
          </div>
          <table>
            <tr>
              <th>Annual Fee</th>
              {filteredCards.map((item: any) => (
                <td>{item.annualFee}</td>
              ))}
            </tr>
            <tr>
              <th>Welcome Offer</th>
              {filteredCards.map((item: any, idx: any) => (
                <td>
                  {item.welcomeOffer
                    ? item.welcomeOffer.map((i: any, idx: any) => (
                        <CardCompareContentNode key={`${idx}`} node={i} />
                      ))
                    : null}
                </td>
              ))}
            </tr>
            <tr>
              <th>Pay Over</th>
              {filteredCards.map((item: any) => (
                <td>
                  {item.highlights ? (
                    <div dangerouslySetInnerHTML={{ __html: item.highlights.payOverTime }} />
                  ) : null}
                </td>
              ))}
            </tr>
            <tr>
              <th>No Preset Spending Limit</th>
              {filteredCards.map((item: any) => (
                <td>
                  {item.highlights ? (
                    <div
                      dangerouslySetInnerHTML={{ __html: item.highlights.noPresetSpendingLimit }}
                    />
                  ) : null}
                </td>
              ))}
            </tr>
          </table>
        </div>
      ) : (
        <div>
          <div className="cc-heading">
            <h1>{`Select Up to ${isMobile ? 2:3 } Cards`}</h1>
            <button class="compare-btn" onClick={()=>setFlag(true)}>
              Compare
            </button>
          </div>

          <div className="cc-container">
            <div className={cx('col col-xs-12  col-md-6  pad-2')}>
              <h2>Rewards</h2>
              {cards.length
                ? cards
                    .filter((item: any) => item.membershipRewards)
                    .map((item: any, idx: any) => (
                      <a
                        key={item.id}
                        data-content-id="card-selection"
                        data-card-id={item.id}
                        className={cx(
                          `col col-xs-12  col-md-4  pad-2 ${
                            selectedCard.includes(item.id) ? 'highlighted' : ''
                          }`
                        )}
                        onClick={() => handleCardClick(item)}
                        aria-pressed=""
                        disabled={(isMobile?selectedCard.length >= 2:selectedCard.length >= 3) && !selectedCard.includes(item.id)}
                      >
                        <img
                          className="card-compare-card-image"
                          src={item.image}
                          alt=""
                          aria-labelledby=""
                        />
                        <RawHtml
                          id=""
                          className="heading-3 font-weight-bold margin-2-t"
                          tagName="h3"
                          html={item.name}
                        />
                        {selectedCard.includes(item.id) ? (
                          <button className="close-button">X</button>
                        ) : null}
                      </a>
                    ))
                : null}
            </div>

            <div className={cx('col col-xs-12  col-md-4  pad-2')}>
              <h2>Cash Back</h2>
              {cards.length
                ? cards
                    .filter((item: any) => item.CashBack)
                    .map((item: any, idx: any) => (
                      <a
                        key={item.id}
                        data-content-id="card-selection"
                        data-card-id={item.id}
                        className={cx(
                          `col col-xs-12  col-md-8  pad-2 ${
                            selectedCard.includes(item.id) ? 'highlighted' : ''
                          }`
                        )}
                        onClick={() => handleCardClick(item)}
                        aria-pressed=""
                        disabled={(isMobile?selectedCard.length >= 2:selectedCard.length >= 3) && !selectedCard.includes(item.id)}
                      >
                        <img
                          className="card-compare-card-image"
                          src={item.image}
                          alt=""
                          aria-labelledby=""
                        />
                        <RawHtml
                          id=""
                          className="heading-3 font-weight-bold margin-2-t"
                          tagName="h3"
                          html={item.name}
                        />
                        {selectedCard.includes(item.id) ? (
                          <button className="close-button">X</button>
                        ) : null}
                      </a>
                    ))
                : null}
            </div>
            <div className={cx('col col-xs-12  col-md-4  pad-2')}>
              <h2>Airline</h2>
              {cards.length
                ? cards
                    .filter((item: any) => item.Airline)
                    .map((item: any, idx: any) => (
                      <a
                        key={item.id}
                        data-content-id="card-selection"
                        data-card-id={item.id}
                        className={cx(
                          `col col-xs-6  col-md-8  pad-2 ${
                            selectedCard.includes(item.id) ? 'highlighted' : ''
                          }`
                        )}
                        onClick={() => handleCardClick(item)}
                        aria-pressed=""
                        disabled={(isMobile?selectedCard.length >= 2:selectedCard.length >= 3) && !selectedCard.includes(item.id)}
                      >
                        <img
                          className="card-compare-card-image"
                          src={item.image}
                          alt=""
                          aria-labelledby=""
                        />
                        <RawHtml
                          id=""
                          className="heading-3 font-weight-bold margin-2-t"
                          tagName="h3"
                          html={item.name}
                        />
                        {selectedCard.includes(item.id) ? (
                          <button className="close-button">X</button>
                        ) : null}
                      </a>
                    ))
                : null}
            </div>
            <div className={cx('col col-xs-12  col-md-4  pad-2')}>
              <h2>Hotel</h2>
              {cards.length
                ? cards
                    .filter((item: any) => item.Hotel)
                    .map((item: any, idx: any) => (
                      <a
                        key={item.id}
                        data-content-id="card-selection"
                        data-card-id={item.id}
                        className={cx(
                          `col col-xs-12  col-md-8  pad-2 ${
                            selectedCard.includes(item.id) ? 'highlighted' : ''
                          }`
                        )}
                        onClick={() => handleCardClick(item)}
                        aria-pressed=""
                        disabled={(isMobile?selectedCard.length >= 2:selectedCard.length >= 3) && !selectedCard.includes(item.id)}
                      >
                        <img
                          className="card-compare-card-image"
                          src={item.image}
                          alt=""
                          aria-labelledby=""
                        />
                        <RawHtml
                          id=""
                          className="heading-3 font-weight-bold margin-2-t"
                          tagName="h3"
                          html={item.name}
                        />
                        {selectedCard.includes(item.id) ? (
                          <button className="close-button">X</button>
                        ) : null}
                      </a>
                    ))
                : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
