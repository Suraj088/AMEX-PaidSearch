import { h, FunctionComponent } from 'preact';
import { useState, useMemo, useRef, useEffect } from 'preact/hooks';
import cx from 'classnames';
import { CappedContainerFluid, FullBleedContainerFluid } from './containers';
import { RawHtml } from '../common/raw-html';
import { CardCompareContentNode } from './card-compare-content-node';
import { CardDynamicData } from './use-data-container-items';

export interface CardSectionProps {
  style?: string | undefined;
  className?: string | undefined;
  hidden?: boolean;
  sectionTitle: ReturnType<FunctionComponent>;
  sectionTitleExtraClasses?: string;
  itemState?: any;
  setActiveItemIndex?: any;
  activeItemIndex: number;
  smallViewport: boolean;
 
}

export const CardFilterSection: FunctionComponent<CardSectionProps> = ({
  style,
  className,
  hidden,
  sectionTitle,
  sectionTitleExtraClasses,
  itemState,
  setActiveItemIndex,
  activeItemIndex,
  smallViewport,
 
}) => {
  const allCards = itemState.state.allItems; //all cards
  
  const [data, setData] = useState([...allCards]);
  const [flag, setFlag] = useState(false); //to toggle between pop-up and card
  const [check, setCheck] = useState(false); //to toggle between pop-up and card
  const [count, setCount] = useState(-1); //to keep count of click and unclkick
  const [store, setStore] = useState([0]); //to keep all data
  const [toggle, setToggle] = useState(''); // to keep old card data
  const [input,setInput]=useState([])
  const popUp = useRef<HTMLDivElement>(null);
 

  const graph=['membershipRewards','CashBack','Airline','Hotel','NoAnnualFee' ,'Dining','Gas','Travel','Technology','Supplies','Advertising','Shipping'
  ]

 


  useEffect(() => {
    scrollToViewAllCards()
    console.log('hi')
    if (smallViewport) {
      document.getElementById('vcp_filter')?.classList.add('visibility');
    } else {
      document.getElementById('vcp_filter')?.classList.remove('visibility');
    }
  }, [smallViewport]);

  var viewActiveItem = useMemo((): CardDynamicData => data[activeItemIndex] || null, [
    activeItemIndex,
    count,
  ]);

  const viewTitleId = `card-title=${data[activeItemIndex]?.id}`;
  console.log(data[activeItemIndex], activeItemIndex, '1');

  const handleClick = (e: any) => {
    
    setFlag(false);
    setActiveItemIndex(0);
    filterData(e.target.value, e.target.checked);
    removeClass();
    
    
   
  };


  const filterData = (value: string, checked: boolean) => {
    let filteredData: any;
    let inputData:any;
    var cardId: any = [];
    if (checked) {
      setCount(() => count + 1);
     
      filteredData = allCards.filter((i: any) => {
        if (i[value]) return i;
      });
      if (store[0] == 0) store.pop();
      setStore(() => [...store, ...filteredData]);
    } else {
      setCount(() => count - 1);
      
      let arr: any = [];
      let set = new Set();
      
      filteredData = store.filter((i: any) => {
        if (!i[value]) {
          return i;
        } else if (set.has(i)) {
          arr.push(i);
        } else {
          set.add(i);
        }
      });
     

      filteredData = filteredData.concat(arr);
      const counts: { [key: string]: number } = {}; //creating empty obj
      setStore(() => [...filteredData]);

      filteredData.forEach(function (i: any) {
        counts[i['id']] = (counts[i['id']] || 0) + 1;
      });
      //storing cards's id and it's count as object in counts
      for (const key in counts) {
        if (counts[key] == count) {
          cardId.push(key);
        }
      }
      console.log(filteredData);
    }

    console.log(store, 'store', filteredData, '2', cardId);

    displayData(filteredData, checked, cardId,inputData);
  };




  function displayData(filteredData: any, checked: boolean, cardId: any,inputData:any) {
    let common: any;
    if (data.length == allCards.length) {
      setData(() => filteredData);
      disableInput(filteredData)
    }
    else if (checked) {
      let arr = [...data, ...filteredData];
      
      common = arr.filter(function (element, index) {
        return arr.indexOf(element) !== index;
      });
        
      setData(() => common);
     disableInput(common)
      
      
    } else if (count == 0) {
      setStore(() => []);
      setData(() => allCards);
   let check=document.querySelectorAll('[name=check]')
   let checkbox=document.querySelectorAll('[name=checkbox]')
   for(var i=0;i<checkbox.length;i++){
           checkbox[i]?.removeAttribute('disabled')
           check[i]?.removeAttribute('disabled')
   }
    } else if (count == 1){
      let set = new Set(filteredData);
      setData(() => {
        return [...set];
      });
      enableInput([...set])
    }
      
    else {
      const uniqueElements = new Set(cardId);
      const filteredElements = filteredData.filter((item: any) => {
        if (uniqueElements.has(item['id'])) {
          return item;
        }
      });
      let set = new Set(filteredElements);
      setData(() =>[...set])
       enableInput([...set])

    }
  }

  function disableInput(common:any){
    
    let Box=[]
    for(let i=0;i<common.length;i++){
      for(let j=0;j<graph.length;j++){
        if(common[i][graph[j]]){
          Box.push(graph[j])
        }
      }
       
    }
    let set=new Set(Box)
    let container=[...set]
   
    let unique1 = graph.filter((o) => container.indexOf(o) === -1);
    let unique2 = container.filter((o) => graph.indexOf(o) === -1);

    const unique = unique1.concat(unique2);

    console.log(unique,'unique');

    for(let i=0;i<unique.length;i++){
      document.getElementById(`${unique[i]}`)?.setAttribute('disabled', '')
      document.querySelector(`[data-id=${unique[i]}]`)?.setAttribute('disabled', '')
  }
  
  let arr:any=[]
  for(let i=0;i<graph.length;i++){
    let element=document.getElementById(`${graph[i]}`)as HTMLInputElement|null
    if(element?.disabled){
      arr.push(graph[i])
    }
  }  

  
           setInput(()=>arr)
}
    
function enableInput(common:any){
  console.log('input',input,common)
  let Box:any=[]
    for(let i=0;i<input.length;i++){
      for(let j=0;j<common.length;j++){
        if(common[j][input[i]]){
              Box.push(input[i])
        }
      }

    }
          console.log(Box,'Box')
  for(let i=0;i<Box.length;i++){
    document.getElementById(`${Box[i]}`)?.removeAttribute('disabled')
    document.querySelector(`[data-id=${Box[i]}]`)?.removeAttribute('disabled')
}

}
    

  

  function setindex(idx: number, item: any) {
    setFlag(true);
    setActiveItemIndex(() => idx);
    console.log(viewActiveItem.id, 'active id');
    console.log(activeItemIndex, data[idx].id, 'index', idx);
    setToggle(() => data[idx].id);
    addClass(idx);
    scrollTop();

    if (toggle != data[idx].id) removeClass();
  }

  function scrollToViewAllCards() {
    document.getElementById('data-6')?.scrollIntoView()
    
  }

  function scrollTop() {
    if (popUp.current) popUp.current.scrollIntoView();
    else document.documentElement.scrollTop = 0;
  }

  function Close() {
    setFlag(false);
    removeClass();
  }

  function addClass(idx: number) {
    console.log(data[idx].id,'addclass')
    document
      .querySelector(`[data-card-id=${data[idx].id}][data-content-id="card-selection"]`)
      ?.classList.add('visibility');
  }

  function removeClass() {
    console.log(toggle,'removeclass')
    document
      .querySelector(`[data-card-id=${toggle}][data-content-id="card-selection"]`)
      ?.classList.remove('visibility');
  }

  function clearAll() {
    let check = document.getElementsByName('check')! as NodeListOf<HTMLElement>;
   let checkbox=document.querySelectorAll('[name=checkbox]')
    for (var i = 0; i < check.length; i++) {
      let input = check[i]! as HTMLInputElement;
      checkbox[i]?.removeAttribute('disabled')
      check[i]?.removeAttribute('disabled')
      input.checked = false;
    }
    setData(allCards);
    setInput([])
    setCount(-1)
    setStore([0])
    

  }

  function closeFilter() {
    setCheck((prev) => !prev);
    console.log(check);
    if (check) document.getElementById('vcp_filter')?.classList.add('visibility');
    else document.getElementById('vcp_filter')?.classList.remove('visibility');
  }

  return (
    <CappedContainerFluid className={cx(className)} style={style} hidden={hidden}>
      <div className="row vcp_wrapper">
        <div class={cx('max-vw-width col col-xs-12 col-md-3 ', sectionTitleExtraClasses)}>
          {sectionTitle}
          <button className="filterBtn" onClick={() => closeFilter()}>
            Filter by
          </button>
          <div className="vcp_filter" id="vcp_filter">
            <button className="close-btnfil" onClick={() => closeFilter()}></button>
            <div>
              <h3 className="heading-4 font-weight-bold margin-2-t margin-2-b">Card Features</h3>
              <div className="vcp_checkWrap" data-id="membershipRewards" name='checkbox'>
                <input
                  type="checkbox"
                  value="membershipRewards"
                  id="membershipRewards"
                  name="check"
                  onChange={(e) => handleClick(e)}
                />
                <label for="vehicle1"> Membership Rewards&reg; Points</label>
              </div>

              <div className="vcp_checkWrap"  data-id="CashBack" name='checkbox'>
                <input
                  type="checkbox"
                  value="CashBack"
                  name="check"
                  id="CashBack"
                  onChange={(e) => handleClick(e)}
                />
                <label for="vehicle3"> Cash Back</label>
              </div>
              <div className="vcp_checkWrap"   data-id="Airline" name='checkbox'>
                <input
                  type="checkbox"
                  value="Airline"
                  id="Airline"
                  name="check"
                  onChange={(e) => handleClick(e)}
                />
                <label for="vehicle3"> Airline</label>
              </div>
              <div className="vcp_checkWrap"  data-id="Hotel" name='checkbox'>
                <input
                  type="checkbox"
                  value="Hotel"
                  id="Hotel"
                  name="check"
                  onChange={(e) => handleClick(e)}
                />
                <label for="vehicle3"> Hotel</label>
              </div>
              <div className="vcp_checkWrap"  data-id="NoAnnualFee" name='checkbox'>
                <input
                  type="checkbox"
                  value="NoAnnualFee"
                  name="check"
                  id="NoAnnualFee"
                  onChange={(e) => handleClick(e)}
                />
                <label for="vehicle2"> No Annual Fee</label>
              </div>
            </div>
            <div>
              <h3 className="heading-4 font-weight-bold margin-2-t margin-2-b">Great For</h3>
               <div className="vcp_checkWrap"   data-id="Dining" name='checkbox'>
                <input
                  type="checkbox"
                  value="Dining"
                  name="check"
                  id="Dining"
                  onChange={(e) => handleClick(e)}
                />
                <label for="vehicle1"> Dining</label>
              </div>
              <div className="vcp_checkWrap"   data-id="Travel" name='checkbox'>
                <input
                  type="checkbox"
                  value="Travel"
                  name="check"
                  id="Travel"
                  onChange={(e) => handleClick(e)}
                />
                <label for="vehicle3"> Travel</label>
              </div>
              <div className="vcp_checkWrap"   data-id="Technology" name='checkbox'>
                <input
                  type="checkbox"
                  value="Technology"
                  name="check"
                  id="Technology"
                  onChange={(e) => handleClick(e)}
                />
                <label for="vehicle2"> Technology</label>
              </div>
              
              <div className="vcp_checkWrap"  data-id="Supplies" name='checkbox'>
                <input
                  type="checkbox"
                  value="Supplies"
                  name="check"
                  id="Supplies"
                  onChange={(e) => handleClick(e)}
                />
                <label for="vehicle3"> Supplies</label>
              </div>
              <div className="vcp_checkWrap"  data-id="Shipping" name='checkbox'>
                <input
                  type="checkbox"
                  value="Shipping"
                  name="check"
                  id="Shipping" 
                  onChange={(e) => handleClick(e)}
                />
                <label for="vehicle3">Shipping</label>
              </div>
              <div className="vcp_checkWrap"   data-id="Advertising" name='checkbox'>
                <input
                  type="checkbox"
                  value="Advertising"
                  name="check"
                  id="Advertising"
                  onChange={(e) => handleClick(e)}
                />
                <label for="vehicle3"> Advertising</label>
              </div>
              <div className="vcp_checkWrap"   data-id="Gas" name='checkbox'>
                <input
                  type="checkbox"
                  value="Gas"
                  name="check"
                  id="Gas"
                  onChange={(e) => handleClick(e)}
                />
                <label for="vehicle3">Gas</label>
              </div> 
              
            </div>
            <button className="Clear_Filters" onClick={() => clearAll()}>
              Clear Filters
            </button>
          </div>
        </div>

        <div class="col col-xs-12 col-md-9">
          {flag ? (
            <FullBleedContainerFluid key={viewActiveItem.id}>
              <div
                className="card-compare-header-row dls-gray-06 dls-gray-01-bg pad-3-t"
                style={`background-color: ${viewActiveItem.quickCompareColor} !important;`}
                id="pop-up"
                ref={popUp}
              >
                <button className="close-button" onClick={() => Close()}></button>
                <div className="container-fluid container-fluid-capped">
                  <div className="row">
                    <div className="col col-xs-12  col-md-4 order-2 pad-3-tb text-align-center ">
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
                          <a
                            class="btn btn-sm"
                            href={viewActiveItem.applyUrl || viewActiveItem.url}
                          >
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
                          <a
                            href={viewActiveItem.ratesAndFeesUrl}
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            <sup>¤</sup>Rates &amp; Fees
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="col col-xs-12 col-md-8 pad-3-tb card-compare-content-node-container">
                      <div
                        key={viewActiveItem.id}
                        data-content-id="welcome-offer"
                        data-card-id={viewActiveItem.id}
                        className={cx('pad-2-lr')}
                      >
                        {viewActiveItem.quickCompare.map((i: any, idx: any) => (
                          <CardCompareContentNode key={`${idx}`} node={i}  />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FullBleedContainerFluid>
          ) : null}
          <div className="row  vcp_item_wrap">
            {data.length ? (
              data.map((item: any, idx: any) => (
                <a
                  key={item.id}
                  data-content-id="card-selection"
                  data-card-id={item.id}
                  className={cx('col col-xs-6  col-md-4  pad-2  vcp_container')}
                  onClick={() => setindex(idx, item)}
                  aria-pressed={item.id === viewActiveItem.id}
                >
                  <img
                    className="card-compare-card-image"
                    src={item.image}
                    alt=""
                    aria-labelledby={viewTitleId}
                  />
                  <RawHtml
                    id={viewTitleId}
                    className="heading-3 font-weight-bold margin-2-t"
                    tagName="h3"
                    html={item.name}
                  />
                </a>
              ))
            ) : (
              <div className="flex container-fluid flex-justify-center margin-5-tb">
                <div className="heading-4 font-weight-bold">
                  No Cards Are Available For The Selected Filter
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </CappedContainerFluid>
  );
};
