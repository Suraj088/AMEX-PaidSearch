import { h, FunctionComponent } from 'preact';
import { useState, useEffect} from 'preact/hooks';
import { RawHtml } from '../common/raw-html';
import cx from 'classnames';
import { CardCompareContentNode } from './card-compare-content-node';
import { CardHeaderSection } from './card-header-section';
import {
  CardDynamicData,
  CardDynamicIconRowNode,

} from './use-data-container-items';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
export interface CardSectionProps {
  itemState?: any;
  columnClass?:any;
  greatForIndexHelper?:any;
  activeItemIndex?:any;
}

export const Compare: FunctionComponent<CardSectionProps> = ({ itemState,columnClass,greatForIndexHelper,activeItemIndex }) => {
  const [flag, setFlag] = useState(true);
  const [selectedCard, setSelectedCard] = useState<string[]>([]);
  const [filteredCards, setFilteredCards] = useState<any>([]);
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
    if ((isMobile?selectedCard.length < 3:selectedCard.length < 3) || selectedCard.includes(item.id)) {
      setSelectedCard((prevSelectedCard) => {
        if (prevSelectedCard.includes(item.id)) {
          return prevSelectedCard.filter((id) => id !== item.id); // Deselect the card
        } else if (isMobile?prevSelectedCard.length < 3:prevSelectedCard.length < 3) {
          return [...prevSelectedCard, item.id]; // Select the card
        } else {
          return prevSelectedCard; // Keep the selection as is when three cards are already selected
        }
      });
    }
  };


  const checkDummy=(updatedFilteredCards: any[])=>{
   let count=3

   if(isMobile) count=3
    while (updatedFilteredCards.length < count) {
      updatedFilteredCards.push(dummyCard);
    }

    setFilteredCards(updatedFilteredCards);
console.log(updatedFilteredCards)
  }

  useEffect(()=>{
    fetchAPR()

  },[filteredCards])

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

 
  async function fetchAPR() {
    try {
      const response = await fetch('https://cardshop.americanexpress.com/us/cardshop-api/api/v1/open/content/pzn/open_cd/44601/');
      if (response.ok) {
        const aprData = await response.json();
        console.log(aprData);
      } else {
        console.error('Failed to fetch APR data');
      }
    } catch (error) {
      console.error('An error occurred while fetching APR data:', error);
    }
  }




  return (
    <div>
     {flag?(
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
              <th>APR</th>
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
  
 
    <td>
      <h2>Highlights</h2>
    </td>
 
</tr>
            <tr>
  <th>Pay Over</th>
  {filteredCards.map((item:any) => (
    <td>
      {item.highlights?.payOverTime === true ? (
        <FontAwesomeIcon icon={faCheck} />
      ) : item.highlights?.payOverTime === false ? (
        <FontAwesomeIcon icon={faTimes} />
      ) : null}
    </td>
  ))}
            </tr>

            <tr>
              <th>No Present Spending Limit</th>
              {filteredCards.map((item: any) => (
                 <td>
                 {item.highlights?.noPresetSpendingLimit === true ? (
                   <FontAwesomeIcon icon={faCheck} />
                 ) : item.highlights?.noPresetSpendingLimit === false ? (
                   <FontAwesomeIcon icon={faTimes} />
                 ) : null}
               </td>
              ))}
            </tr>
            <tr>
              <th>Employee Cards</th>
              {filteredCards.map((item: any) => (
                 <td>
                 {item.highlights?.employeeCards === true ? (
                   <FontAwesomeIcon icon={faCheck} />
                 ) : item.highlights?.employeeCards === false ? (
                   <FontAwesomeIcon icon={faTimes} />
                 ) : null}
               </td>
              ))}
            </tr>
            <tr>
              <th>Connect to QuickBooks</th>
              {filteredCards.map((item: any) => (
                 <td>
                 {item.highlights?.connectToQuickBook === true ? (
                   <FontAwesomeIcon icon={faCheck} />
                 ) : item.highlights?.connectToQuickBook === false ? (
                   <FontAwesomeIcon icon={faTimes} />
                 ) : null}
               </td>
              ))}
            </tr>
            <tr>
              <th>Vendor Pay by Bill.com</th>
              {filteredCards.map((item: any) => (
                 <td>
                 {item.highlights?.vendorPayByBillcom === true ? (
                   <FontAwesomeIcon icon={faCheck} />
                 ) : item.highlights?.vendorPayByBillcom === false ? (
                   <FontAwesomeIcon icon={faTimes} />
                 ) : null}
               </td>
              ))}
            </tr>
            <tr>
              <th>Pay with Points</th>
              {filteredCards.map((item: any) => (
                 <td>
                 {item.highlights?.payWithPoints === true ? (
                   <FontAwesomeIcon icon={faCheck} />
                 ) : item.highlights?.payWithPoints === false ? (
                   <FontAwesomeIcon icon={faTimes} />
                 ) : null}
               </td>
              ))}
            </tr>
            <tr>
              <th>No Foreign Transaction Fees</th>
              {filteredCards.map((item: any) => (
                 <td>
                 {item.highlights?.noForeignTransactionFees === true ? (
                   <FontAwesomeIcon icon={faCheck} />
                 ) : item.highlights?.noForeignTransactionFees === false ? (
                   <FontAwesomeIcon icon={faTimes} />
                 ) : null}
               </td>
              ))}
            </tr>
            <tr>
              <th>The Hotel Collection</th>
              {filteredCards.map((item: any) => (
                 <td>
                 {item.highlights?.theHotelCollection === true ? (
                   <FontAwesomeIcon icon={faCheck} />
                 ) : item.highlights?.theHotelCollection === false ? (
                   <FontAwesomeIcon icon={faTimes} />
                 ) : null}
               </td>
              ))}
            </tr>
            <tr>
              <th>Purchase Protection</th>
              {filteredCards.map((item: any) => (
                 <td>
                 {item.highlights?.purchaseProtection === true ? (
                   <FontAwesomeIcon icon={faCheck} />
                 ) : item.highlights?.purchaseProtection === false ? (
                   <FontAwesomeIcon icon={faTimes} />
                 ) : null}
               </td>
              ))}
            </tr>
            <tr>
              <th>Car Rental Loss and Damage Insurance</th>
              {filteredCards.map((item: any) => (
                 <td>
                 {item.highlights?.carRentalLossAndDamageInsurance === true ? (
                   <FontAwesomeIcon icon={faCheck} />
                 ) : item.highlights?.carRentalLossAndDamageInsurance === false ? (
                   <FontAwesomeIcon icon={faTimes} />
                 ) : null}
               </td>
              ))}
            </tr>
            <tr>
              <th>Global Assist® Hotline</th>
              {filteredCards.map((item: any) => (
                 <td>
                 {item.highlights?.globalAssistHotline === true ? (
                   <FontAwesomeIcon icon={faCheck} />
                 ) : item.highlights?.globalAssistHotline === false ? (
                   <FontAwesomeIcon icon={faTimes} />
                 ) : null}
               </td>
              ))}
            </tr>
            <tr>
              <th>Wireless Credit</th>
              {filteredCards.map((item: any) => (
                 <td>
                 {item.highlights?.wirelessCredit === true ? (
                   <FontAwesomeIcon icon={faCheck} />
                 ) : item.highlights?.wirelessCredit === false ? (
                   <FontAwesomeIcon icon={faTimes} />
                 ) : null}
               </td>
              ))}
            </tr>
            <tr>
              <th>Airline Bonus</th>
              {filteredCards.map((item: any) => (
                 <td>
                 {item.highlights?.airlineBonus === true ? (
                   <FontAwesomeIcon icon={faCheck} />
                 ) : item.highlights?.airlineBonus === false ? (
                   <FontAwesomeIcon icon={faTimes} />
                 ) : null}
               </td>
              ))}
            </tr>
            <tr>
              <th>Global Lounge Collection</th>
              {filteredCards.map((item: any) => (
                 <td>
                 {item.highlights?.globalLoungeCollection === true ? (
                   <FontAwesomeIcon icon={faCheck} />
                 ) : item.highlights?.globalLoungeCollection === false ? (
                   <FontAwesomeIcon icon={faTimes} />
                 ) : null}
               </td>
              ))}
            </tr>
            <tr>
              <th>Fee Credit for Global Entry or TSA PreCheck</th>
              {filteredCards.map((item: any) => (
                 <td>
                 {item.highlights?.feeCreditForGlobalEntryorTSAPreCheck === true ? (
                   <FontAwesomeIcon icon={faCheck} />
                 ) : item.highlights?.feeCreditForGlobalEntryorTSAPreCheck === false ? (
                   <FontAwesomeIcon icon={faTimes} />
                 ) : null}
               </td>
              ))}
            </tr>
            <tr>
              <th>Priority Boarding</th>
              {filteredCards.map((item: any) => (
                 <td>
                 {item.highlights?.priorityBoarding === true ? (
                   <FontAwesomeIcon icon={faCheck} />
                 ) : item.highlights?.priorityBoarding === false ? (
                   <FontAwesomeIcon icon={faTimes} />
                 ) : null}
               </td>
              ))}
            </tr>
            <tr><th></th>{filteredCards.map((item: any) => (
            item.id?
          
          <td>
          <div
                        key={item?.id}
                        data-content-id="card-header-extra"
                        data-card-id={item?.id}
                        className={cx('text-align-center legal-1')}
                      >
                       
                        {item?.annualFeeSubtext && (
                          <RawHtml tagName="p" html={item?.annualFeeSubtext} />
                        )}
                        {item?.aprText && (
                          <RawHtml
                            tagName="p"
                            className="dynamicAPR"
                            html={item?.aprText}
                          />
                        )}
                        <p class="margin-1-t">
                          <a
                            class="btn btn-sm"
                            href={item?.applyUrl || item?.url}
                          >
                            Apply Now
                          </a>
                        </p>
                        <p class="legal-1 margin-1-t">
                          <a
                            href={item?.offerAndBenefitTermsUrl}
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <sup>◆</sup>
                            <sup>‡</sup>
                            <sup>†</sup>Offer &amp; Benefit Terms
                          </a>
                          &ensp;|&ensp;
                          <a
                            href={item?.ratesAndFeesUrl}
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <sup>¤</sup>Rates &amp; Fees
                          </a>
                        </p>
                        <div class="learn-more-link">
                        <p class="legal-1 margin-1-t">
                          <a class="btn-sm" href={item?.pdpUrl} target="_blank">
                            Learn More
                          </a>
                        </p>
                      </div>
          </div></td>
          :null))}</tr>
          </table>
          
          
         
         
         
    </div>
     ):(
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
                        disabled={(isMobile?selectedCard.length >= 3:selectedCard.length >= 3) && !selectedCard.includes(item.id)}
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

 {/* <CardHeaderSection sectionTitle={<p class="heading-5">Great for</p>}>
            <div className="card-compare-striped-container">
              <div className="row flex-justify-center">
                {itemState.state.subsetItems.map((item:any) => {
                  return (
                    <div key={item.id} className={cx(columnClass, 'pad-0')}>
                      <div className="pad-2-lr pad-3-tb flex flex-wrap flex-align-center">
                        <RawHtml
                          tagName="span"
                          className="card-compare-great-for-label heading-4 font-weight-bold"
                          html={item.greatForTitle}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              {greatForIndexHelper.map((greatForIdx:any) => {
                return (
                  <div className="row flex-justify-center" key={greatForIdx.toString()}>
                    {itemState.state.subsetItems.map((item:any) => {
                      const greatForItem = item.greatFor[greatForIdx] as
                        | CardDynamicIconRowNode
                        | undefined;

                      return (
                        <div
                          key={item.id}
                          data-content-id={`great-for-row-${greatForIdx}`}
                          data-card-id={item.id}
                          className={cx(columnClass, 'pad-0 flex')}
                        >
                          <div className="pad-2-lr pad-3-tb flex flex-wrap flex-align-center">
                            <span
                              class={cx(
                                'icon icon-lg dls-bright-blue margin-2-r',
                                greatForItem ? `dls-icon-${greatForItem.iconKey}` : null
                              )}
                            ></span>
                            <RawHtml
                              tagName="span"
                              className="card-compare-great-for-label"
                              html={greatForItem?.label || ''}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </CardHeaderSection> */}
          {/* <CardHeaderSection
            sectionTitle={<p class="heading-5">Welcome Offer</p>}
            className="border-t"
          >
            <div className="row flex-justify-center card-compare-content-node-container">
              {filteredCards?.subsetItems?.map((item:any) => (
                <div
                  key={item.id}
                  data-content-id="welcome-offer"
                  data-card-id={item.id}
                  className={cx(columnClass, 'pad-2-lr pad-4-tb')}
                >
                  {item?.welcomeOffer?.map((i:any, idx:any) => (
                    <CardCompareContentNode key={`${idx}`} node={i} />
                  ))}
                </div>
              ))}
            </div>
          </CardHeaderSection>
          <CardHeaderSection
            sectionTitle={<p class="heading-5">Earning Rewards</p>}
            className="border-t"
          >
            <div className="row flex-justify-center card-compare-content-node-container">
              {itemState?.state?.subsetItems?.map((item:any) => (
                <div
                  key={item.id}
                  data-content-id="earning-rewards"
                  data-card-id={item.id}
                  className={cx(columnClass, 'pad-2-lr pad-4-tb')}
                >
                  {item?.earningRewards?.map((i:any, idx:any) => (
                    <CardCompareContentNode key={`${idx}`} node={i} />
                  ))}
                </div>
              ))}
            </div>
          </CardHeaderSection> */}
          {/* <CardHeaderSection
            sectionTitle={<p className="heading-5">Card Benefits & Features</p>}
            className="border-t"
          >
            <div className="row flex-justify-center card-compare-content-node-container" id="cardBenefitsAndFeatures">
              {itemState.state.subsetItems.map((item:any) => (
                <div
                  key={item.id}
                  data-content-id="featured-benefits"
                  data-card-id={item.id}
                  className={cx(columnClass, 'pad-2-lr pad-4-tb')}
                >
                  {item.moreBenefits.map((i:any, idx:any) => (
                    <CardCompareContentNode key={`${idx}`} node={i} />
                  ))}
                </div>
              ))}
            </div>
          </CardHeaderSection>  */}