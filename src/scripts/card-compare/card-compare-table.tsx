import { h, JSX } from 'preact';
import { useEffect, useMemo, useState } from 'preact/hooks';
import { useSwipeable } from 'react-swipeable';
import cx from 'classnames';

import { useCompareItemDisplayState } from './use-compare-item-display-state';
import { CardCompareContentNode } from './card-compare-content-node';
import {
  CardDynamicData,
  CardDynamicIconRowNode,
  useDataContainerItems,
} from './use-data-container-items';
import { useMatchMedia } from '../common/use-match-media';
import { RawHtml } from '../common/raw-html';
import { IntersectionHelper } from '../common/intersection-helper';
import { FullBleedContainerFluid } from './containers';
import { CardHeaderSection } from './card-header-section';
import { CardFilterSection } from './card-filter-section';
import { DotPagination, DotPaginationOption } from './dot-pagination';
import { CardStickyNavPortal } from './card-sticky-nav';
import { IgnorePlugin } from 'webpack';

const MOBILE_ITEMS_IN_VIEW = 1;
const DESKTOP_ITEMS_IN_VIEW = 3;

export function CardCompareTable(): JSX.Element | null {
  // Utility to determine layout changes between smaller and larger viewports
  const smallViewport = useMatchMedia('(max-width: 767px)');
  // Gets card data items and emits a new set of items as data changes
  const inputItems = useDataContainerItems();
  // Items to actually display
  const itemState = useCompareItemDisplayState();
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [path,setPath]=useState(false)
  
 
  const hideStickyNav = smallViewport ? false : isIntersecting;

  const paginationOptions = useMemo(
    () => itemState.state.allItems.map((i): DotPaginationOption => ({ id: i.id, label: i.name })),
    [itemState.state.allItems]
  );
  
  const displayPagination = useMemo(
    () =>
      itemState.state.allItems.length > 0 &&
      itemState.state.subsetItems.length < itemState.state.allItems.length,
    [itemState.state.subsetItems, itemState.state.allItems]
  );

  // Finds longest `greatFor` item and generates an index helper array of that length
  const greatForIndexHelper = useMemo(
    () =>
      itemState.state.subsetItems.reduce(
        (acc, i) =>
          i.greatFor.length > acc.length
            ? new Array(i.greatFor.length).fill(0).map((_, i) => i)
            : acc,
        [] as number[]
      ),
    [itemState.state.subsetItems]
  );


  useEffect(() => {
    let route= window.location.href
   if(route.slice(route.length-9)=='view.html')
         setPath(true)
   
  }, []);
  

  useEffect(() => {
    itemState.setItems(inputItems);
   
  }, [inputItems]);

  useEffect(() => {
    itemState.setMaxItemsInView(smallViewport ? MOBILE_ITEMS_IN_VIEW : DESKTOP_ITEMS_IN_VIEW);
  }, [smallViewport]);

  // Determine appropriate column span based on a 12-colum grid, but don't span beyond 50% width
  const columnSpan = Math.min(Math.floor(12 / itemState.state.subsetItems.length), 12);
  const columnClass = `col col-xs-${columnSpan}`;

  const [activeItemIndex, setActiveItemIndex] = useState(0);
 
  
  const activeItem = useMemo(
    (): CardDynamicData | null => itemState.state.subsetItems[activeItemIndex] || null,
    [itemState.state.subsetItems, activeItemIndex]
  );
  const [num,setNum]=useState([])
  
  
if(num.length){
    console.log('1',num)
  var viewActiveItem = useMemo(
    (): CardDynamicData | null => num[activeItemIndex] || null,
    [num, activeItemIndex]
  );
}else{
  console.log('2')
  var viewActiveItem = useMemo(
    (): CardDynamicData | null => itemState.state.allItems[activeItemIndex] || null,
    [itemState.state.allItems, activeItemIndex]
  );
}

 
  const titleId = `card-title=${activeItem?.id}`;
  const viewTitleId=`card-title=${viewActiveItem?.id}`
  
  useEffect(() => {
    setActiveItemIndex(0);
  }, [itemState.state.subsetItems]);

  

  useEffect(() => {
    setActiveItemIndex(0);
  }, [num]);
 

  const handlers = useSwipeable({
    onSwipedLeft: () => itemState.setNext(),
    onSwipedRight: () => itemState.setPrev(),
    preventDefaultTouchmoveEvent: true,
  });
  
  console.log(viewActiveItem,'hello')
  if ( !viewActiveItem || itemState.state.allItems.length === 0 ) {
    return (
      <div className="flex flex-align-center flex-justify-center margin-5-tb">
        <div
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
          class="progress-circle progress-indeterminate progress-lg margin-5-tb"
        ></div>
      </div>
    );
  }

  const navigateToUrl = (val: string) => {
    window.open('../' + val,'_self');
  
  };
  
  return (
    <div className="card-compare-table body-3" {...handlers}>
      {path  ? (
      <div>
       <FullBleedContainerFluid
        key={viewActiveItem.id}>
        <div
          className="card-compare-header-row dls-gray-06 dls-gray-01-bg"
          style={`background-color: ${viewActiveItem.quickCompareColor} !important;`}
        >
          <button className='close-button'>X</button>
          <div className="container-fluid container-fluid-capped">
            <div className="row">
            <div className="col col-xs-3 hidden-sm-down pad-3-tb text-align-center flex-align-self-center">
                <a
                  href={viewActiveItem.pdpUrl}
                  key={viewActiveItem.id}
                  data-content-id="card-header"
                  data-card-id={viewActiveItem.id}
                  className={cx('text-align-center display-block dls-gray-06')}
                  target="_blank"
                >
                  <img
                    className="card-compare-card-image"
                    src={viewActiveItem.image}
                    alt=""
                    aria-labelledby={viewTitleId}
                  />
                  <RawHtml
                    id={viewTitleId}
                    className="heading-4 font-weight-bold margin-2-t"
                    tagName="h3"
                    html={viewActiveItem.name}
                  />
                </a>
                <div
                  key={viewActiveItem.id}
                  data-content-id="card-header-extra"
                  data-card-id={viewActiveItem.id}
                  className={cx('text-align-center legal-1')}
                >
                  <p class="body-3 margin-1-tb">
                    <strong>${viewActiveItem.annualFee}</strong> Annual Fee
                    {typeof viewActiveItem.annualFeeSymbols === 'string' &&
                    viewActiveItem.annualFeeSymbols.length > 0 ? (
                      <sup>{viewActiveItem.annualFeeSymbols}</sup>
                    ) : null}
                  </p>
                  {viewActiveItem.annualFeeSubtext && (
                    <RawHtml tagName="p" html={viewActiveItem.annualFeeSubtext} />
                  )}
                  <p class="margin-1-t">
                    <a class="btn btn-sm" href={viewActiveItem.applyUrl || viewActiveItem.url}>
                      Apply Now
                    </a>
                  </p>
                  <p class="legal-1 margin-1-t">
                    <a
                      href={viewActiveItem.offerAndBenefitTermsUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <sup>♦︎</sup>
                      <sup>‡</sup>
                      <sup>†</sup>Offer &amp; Benefit Terms
                    </a>
                    &ensp;|&ensp;
                    <a href={viewActiveItem.ratesAndFeesUrl} target="_blank" rel="noreferrer noopener">
                      <sup>¤</sup>Rates &amp; Fees
                    </a>
                  </p>
                </div>
              </div>
               <div className="col col-xs-12 col-md-6 pad-3-tb card-compare-content-node-container">
                <div
                  key={viewActiveItem.id}
                  data-content-id="welcome-offer"
                  data-card-id={viewActiveItem.id}
                  className={cx('pad-2-lr')}
                >
                  {viewActiveItem.quickCompare.map((i, idx) => (
                    <CardCompareContentNode key={`${idx}`} node={i} />
                  ))}
                </div>
              </div>
               
            </div>
          </div>
        </div>
        </FullBleedContainerFluid> 
        <CardFilterSection
            className=""
            sectionTitle={<p class="heading-4 font-weight-bold"> All Business Cards from American Express</p>}
            sectionTitleExtraClasses="flex-align-self-center "
            viewActiveItem={viewActiveItem}
            itemState={itemState}
            setActiveItemIndex={ setActiveItemIndex}
            columnClass ={columnClass} 
           setNum={setNum}
           num={num}
            
          >

            
        </CardFilterSection>
        
      </div>
          
      ):(activeItem?
       <div>
         <IntersectionHelper onIntersectChange={(intersecting) => setIsIntersecting(intersecting)}>
        <CardHeaderSection
          className="hidden-sm-down"
          sectionTitle={<p class="heading-4 font-weight-bold">Select a Card</p>}
          sectionTitleExtraClasses="flex-align-self-center hidden-sm-down"
        >
          <div className="row flex-justify-center card-compare-content-node-container">
            {itemState.state.subsetItems.map((item, idx) => (
              <button
                key={item.id}
                data-content-id="card-selection"
                data-card-id={item.id}
                className={cx(columnClass, 'pad-2 card-compare-card-selection-button')}
                onClick={() => setActiveItemIndex(idx)}
                aria-pressed={item.id === activeItem.id}
              >
                <img
                  className="card-compare-card-image"
                  src={item.image}
                  alt=""
                  aria-labelledby={titleId}
                />
              </button>
            ))}
          </div>
        </CardHeaderSection>
      </IntersectionHelper>
      <FullBleedContainerFluid key={activeItem.id}>
        <div
          className="card-compare-header-row dls-gray-06 dls-gray-01-bg"
          style={`background-color: ${activeItem.quickCompareColor} !important;`}
        >
          <div className="container-fluid container-fluid-capped">
            <div className="row">
              <div className="col col-xs-3 hidden-sm-down position-relative">
                <img
                  className="card-header-lifestyle-image margin-3-t"
                  src={activeItem.quickCompareImage}
                  alt=""
                  aria-labelledby={titleId}
                />
              </div>
              <div className="col col-xs-12 col-md-6 pad-3-tb card-compare-content-node-container">
                <div
                  key={activeItem.id}
                  data-content-id="welcome-offer"
                  data-card-id={activeItem.id}
                  className={cx('pad-2-lr')}
                >
                  {activeItem.quickCompare.map((i, idx) => (
                    <CardCompareContentNode key={`${idx}`} node={i} />
                  ))}
                </div>
              </div>
              <div className="col col-xs-3 hidden-sm-down pad-3-tb text-align-center flex-align-self-center">
                <a
                  href={activeItem.pdpUrl}
                  key={activeItem.id}
                  data-content-id="card-header"
                  data-card-id={activeItem.id}
                  className={cx('text-align-center display-block dls-gray-06')}
                  target="_blank"
                >
                  <img
                    className="card-compare-card-image"
                    src={activeItem.image}
                    alt=""
                    aria-labelledby={titleId}
                  />
                  <RawHtml
                    id={titleId}
                    className="heading-4 font-weight-bold margin-2-t"
                    tagName="h3"
                    html={activeItem.name}
                  />
                </a>
                <div
                  key={activeItem.id}
                  data-content-id="card-header-extra"
                  data-card-id={activeItem.id}
                  className={cx('text-align-center legal-1')}
                >
                  <p class="body-3 margin-1-tb">
                    <strong>${activeItem.annualFee}</strong> Annual Fee
                    {typeof activeItem.annualFeeSymbols === 'string' &&
                    activeItem.annualFeeSymbols.length > 0 ? (
                      <sup>{activeItem.annualFeeSymbols}</sup>
                    ) : null}
                  </p>
                  {activeItem.annualFeeSubtext && (
                    <RawHtml tagName="p" html={activeItem.annualFeeSubtext} />
                  )}
                  <p class="margin-1-t">
                    <a class="btn btn-sm" href={activeItem.applyUrl || activeItem.url}>
                      Apply Now
                    </a>
                  </p>
                  <p class="legal-1 margin-1-t">
                    <a
                      href={activeItem.offerAndBenefitTermsUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <sup>♦︎</sup>
                      <sup>‡</sup>
                      <sup>†</sup>Offer &amp; Benefit Terms
                    </a>
                    &ensp;|&ensp;
                    <a href={activeItem.ratesAndFeesUrl} target="_blank" rel="noreferrer noopener">
                      <sup>¤</sup>Rates &amp; Fees
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FullBleedContainerFluid>
      <CardStickyNavPortal>
        <CardHeaderSection
          hidden={hideStickyNav}
          style="order: 1000;"
          className="card-compare-card-header-row card-compare-card-header-row--bottom"
          sectionTitle={
            <div className='row' id='compare-cards-controls'>
              <div className="col-xs-11">
                <p class="heading-4">
                  Compare Card
                  <br />
                  Features and Benefits
                </p>
                <ul id="option-category-input">
                  <li className="container-option" onClick={() => navigateToUrl("best")}>
                    <label>
                      <input type="radio" name="card-category-input-selector" id="card-category-input-selector-1"  className="visually-hidden" value="best" />        
                      <div className="dls-bright-blue icon icon-sm icon-hover dls-icon-favorite"></div>
                      <div className="dls-bright-blue margin-1-l option-text">Best</div>
                    </label>
                  </li>
                  <li className="container-option" onClick={() => navigateToUrl("cash-back")}>
                    <label>
                      <input type="radio" name="card-category-input-selector" id="card-category-input-selector-2"  className="visually-hidden" value="cash-back" />        
                      <div className="dls-bright-blue icon icon-sm icon-hover dls-icon-cashback"></div>
                      <div className="dls-bright-blue margin-1-l option-text">Cash Back</div>
                    </label>
                  </li>
                  <li className="container-option" onClick={() => navigateToUrl("rewards")}>
                    <label>
                      <input type="radio" name="card-category-input-selector" id="card-category-input-selector-3"  className="visually-hidden" value="rewards" />        
                      <div className="dls-bright-blue icon icon-sm icon-hover dls-icon-rewards"></div>
                      <div className="dls-bright-blue margin-1-l option-text">Rewards</div>
                    </label>
                  </li>
                  <li className="container-option" onClick={() => navigateToUrl("travel")}>
                    <label>
                      <input type="radio" name="card-category-input-selector" id="card-category-input-selector-4"  className="visually-hidden" value="travel" />        
                      <div className="dls-bright-blue icon icon-sm icon-hover dls-icon-airplane"></div>
                      <div className="dls-bright-blue margin-1-l option-text">Travel</div>
                    </label>
                  </li>
                  <li className="container-option" onClick={() => navigateToUrl("no-annual-fee")}>
                    <label>
                      <input type="radio" name="card-category-input-selector" id="card-category-input-selector-5"  className="visually-hidden" value="no-fee" />        
                      <div className="dls-bright-blue icon icon-sm icon-hover dls-icon-no-fee"></div>
                      <div className="dls-bright-blue margin-1-l option-text">No Fee</div>
                    </label>
                  </li>
                  <span className='arrowDropdown'></span>
                </ul>
                <div className="row">
                  <div className="col-xs-12" id='backToTop'>
                    <div className="dls-bright-blue icon icon-sm icon-hover dls-glyph-link-out"></div>
                    <div className="dls-bright-blue margin-1-l option-text">Back to the top</div>
                  </div>
                </div>
              </div>
            </div>
          }
          sectionTitleExtraClasses="hidden-sm-down"
        >
          <div className="row flex-justify-center card-compare-content-node-container">
            {itemState.state.subsetItems.map((item) => (
              <div
                key={item.id}
                data-card-id={item.id}
                className={cx(
                  columnClass,
                  'pad-2-t pad-1-b pad-1-lr text-align-center no-scroll flex flex-column flex-justify-between'
                )}
              >
                <div>
                  {/* Here is the code about links to PDFs */}
                  <a href={item.pdpUrl} target="_blank">
                    <div
                      data-content-id="card-header"
                      data-card-id={item.id}
                      className={cx('dls-gray-06 card-compare-card-header-row-condensed-title-grid')}
                    >
                        <img
                          className="card-compare-card-image"
                          src={item.image}
                          alt=""
                          aria-labelledby={titleId}
                          style="max-height: 40px; min-width: 30px;"
                        />
                        <RawHtml id={titleId} className="label-2" tagName="h3" html={item.name} />
                    </div>
                  </a>
                  <div
                    data-content-id="card-header-annual-fee"
                    data-card-id={item.id}
                    className={cx('text-align-center legal-1')}
                  >
                    <p class="label-2 font-weight-normal margin-1-tb">
                      <strong>${item.annualFee}</strong> Annual Fee
                      {typeof item.annualFeeSymbols === 'string' &&
                      item.annualFeeSymbols.length > 0 ? (
                        <sup>{item.annualFeeSymbols}</sup>
                      ) : null}
                    </p>
                    {item.annualFeeSubtext && (
                      <RawHtml tagName="p" className="margin-0-t" html={item.annualFeeSubtext} />
                    )}
                  </div>
                </div>
                <div
                  data-content-id="card-header-extra"
                  data-card-id={item.id}
                  className={cx('text-align-center legal-1')}
                >
                  <p class="margin-1-t">
                    <a class="btn btn-sm dls-white" href={item.applyUrl || item.url}>
                      Apply Now
                    </a>
                  </p>
                  <p class="margin-1-t">
                    <a
                      href={item.offerAndBenefitTermsUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <sup>♦︎</sup>
                      <sup>‡</sup>
                      <sup>†</sup>Offer &amp; Benefit Terms
                    </a>
                    &ensp;|&ensp;
                    <a href={activeItem.ratesAndFeesUrl} target="_blank" rel="noreferrer noopener">
                      <sup>¤</sup>Rates &amp; Fees
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
          {displayPagination && (
            <DotPagination
              selectedOptionId={activeItem.id}
              options={paginationOptions}
              onNext={() => itemState.setNext()}
              onPrev={() => itemState.setPrev()}
              onOptionIndexSelect={(idx) => itemState.setIdx(idx)}
            />
          )}
        </CardHeaderSection>
      </CardStickyNavPortal>
      <CardHeaderSection sectionTitle={<p class="heading-5">Great for</p>}>
        <div className="card-compare-striped-container">
          <div className="row flex-justify-center">
            {itemState.state.subsetItems.map((item) => {
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
          {greatForIndexHelper.map((greatForIdx) => {
            return (
              <div className="row flex-justify-center" key={greatForIdx.toString()}>
                {itemState.state.subsetItems.map((item) => {
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
      </CardHeaderSection>
      <CardHeaderSection sectionTitle={<p class="heading-5">Welcome Offer</p>} className="border-t">
        <div className="row flex-justify-center card-compare-content-node-container">
          {itemState.state.subsetItems.map((item) => (
            <div
              key={item.id}
              data-content-id="welcome-offer"
              data-card-id={item.id}
              className={cx(columnClass, 'pad-2-lr pad-4-tb')}
            >
              {item.welcomeOffer.map((i, idx) => (
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
          {itemState.state.subsetItems.map((item) => (
            <div
              key={item.id}
              data-content-id="earning-rewards"
              data-card-id={item.id}
              className={cx(columnClass, 'pad-2-lr pad-4-tb')}
            >
              {item.earningRewards.map((i, idx) => (
                <CardCompareContentNode key={`${idx}`} node={i} />
              ))}
            </div>
          ))}
        </div>
      </CardHeaderSection>
      <CardHeaderSection
        sectionTitle={<p className="heading-5">Card Benefits & Features</p>}
        className="border-t"
      >
        <div className="row flex-justify-center card-compare-content-node-container">
          {itemState.state.subsetItems.map((item) => (
            <div
              key={item.id}
              data-content-id="featured-benefits"
              data-card-id={item.id}
              className={cx(columnClass, 'pad-2-lr pad-4-tb')}
            >
              {item.moreBenefits.map((i, idx) => (
                <CardCompareContentNode key={`${idx}`} node={i} />
              ))}
            </div>
          ))}
        </div>
      </CardHeaderSection> 
     
      </div>
       :null       
      
)}
    </div>
  );
}
