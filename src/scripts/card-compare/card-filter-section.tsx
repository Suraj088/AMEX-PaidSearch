import { h, FunctionComponent } from 'preact';
import { useState,useMemo,useEffect } from 'preact/hooks';
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
  columnClass?: any;
  viewTitleId?: any;
  setNum?: any;
  num?: any;
  activeItemIndex:number;
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
  setNum,
  children,
  num,
}) => {
  const allCards=itemState.state.allItems    //all cards
  const [data, setData] = useState([...allCards]);
  // const [flag, setFlag] = useState([...itemState.state.allItems]);
  const [count, setCount] = useState(-1); //to keep count of click and unclkick
  const [store,setStore]=useState([0])    //to keep all data
  const[toggle,setToggle]=useState('')    // to keep 



 var viewActiveItem = useMemo(
    (): CardDynamicData  => data[activeItemIndex] || null,
    [ activeItemIndex]
  );
 
  
  const viewTitleId=`card-title=${data[activeItemIndex] ?.id}`
  console.log(viewActiveItem,'active')
  

useEffect(()=>{
  document.getElementById('pop-up')?.classList.add('visibility')
  
},[])



console.log(data[activeItemIndex],activeItemIndex,'1')


  if ( !viewActiveItem || allCards === 0 ) {
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


  // var viewActiveItem:any = useMemo(
  //   (): CardDynamicData | null => itemState.state.allItems[activeItemIndex] || null,
  //   [itemState.state.allItems, activeItemIndex]
  // );

  

  // const filterResult=(e:any)=>{
  //   console.log(e.target.value)
  //     if(e.target.value=='membershipReward' && e.target.checked==true){

  //     var result=itemState.state.allItems.filter((data:any)=>{
  //         return data.membershipReward
  //     })
  //   }else if(e.target.value=='membershipReward' && e.target.checked==false){
  //     result=itemState.state.allItems
  //   }else if(e.target.value=='CashBack' && e.target.checked==true){

  //      result=itemState.state.allItems.filter((data:any)=>{
  //         return data.cashBack
  //     })
  //   }else if(e.target.value=='CashBack' && e.target.checked==false){
  //     result=itemState.state.allItems
  //   }
  //   setItem(result)
  // }

  const handleClick = (e: any) => {
    filterData(e.target.value, e.target.checked);
    document.getElementById('pop-up')?.classList.add('visibility')
    
  };

  // const filterData = (value: string, checked: boolean) => {
  //   let filteredData: any;
  //   let dupeArr;
  //   if (checked) {
  //     setCount(() => count + 1);
  //     filteredData = itemState.state.allItems.filter((i: any) => {
  //       if (i[value]) return i;
  //     });
  //   } else {
  //     setCount(() => count - 1);
  //     console.log(flag, '7');
  //     dupeArr = flag.filter(function (element, index) {
  //       return flag.indexOf(element) !== index;
  //     });
  //     console.log(data, '8');
  //     filteredData = data.filter((i: any) => {
  //       if (!i[value]) {
  //         return i;
  //       }
  //     });
  //   }

  //   console.log(filteredData, '9', dupeArr);

  //   displayData(filteredData, checked, dupeArr);
  // };

  const filterData = (value: string, checked: boolean) => {
    let filteredData: any;
    var cardId:any=[]
    if (checked) {
      setCount(() => count + 1);
      filteredData = allCards.filter((i: any) => {
        if (i[value]) return i;
      });
      if(store[0]==0)
         store.pop()

      setStore(()=>[...store,...filteredData])
    } else {
      setCount(() => count - 1);
      let arr:any=[]
      
      let set=new Set()
      filteredData = store.filter((i: any) => {
        if (!i[value]) {
          return i;
        }else if(set.has(i)){
               arr.push(i)
        }else{
          set.add(i)
        }
      });
      console.log(filteredData,arr,1)
     
      filteredData=filteredData.concat(arr);

      const counts:{[key:string]:number} = {}; //creating empty obj
      setStore(()=>[...filteredData])

      filteredData.forEach(function (i:any) { counts[i['id']] = (counts[i['id']] || 0) + 1; });
     //storing cards's id and it's count as object in counts
      for(const key in counts){
        
          if(counts[key]==count){
               cardId.push(key)
          }
      }
      console.log(filteredData)
    
      
    }

    console.log(store,'store',filteredData,'2',cardId)
  
    displayData(filteredData, checked,cardId);
  };

  // function displayData(filteredData: any, checked: boolean, dupeArr: any) {
  //   if (data.length == 14) setData(() => filteredData);
  //   else if (checked) {
  //     console.log(data, filteredData);
  //     setFlag(() => [...data, ...filteredData]);
  //     console.log(flag, 'flag');
  //     setData(() => {
  //       let set = new Set([...data, ...filteredData]);
  //       return [...set];
  //     });
  //   } else if (count == 1) setData(() => itemState.state.allItems);
  //   else {
  //     setData(() => {
  //       let set = new Set([...dupeArr, ...filteredData]);
  //       return [...set];
  //     });
  //   }
  // }

  function displayData(filteredData: any, checked: boolean,cardId:any) {
    let common:any
    if (data.length == allCards.length) setData(() => filteredData);
    else if (checked) {
      let arr=[...data,...filteredData]
      
      common = arr.filter(function (element, index) {
        return arr.indexOf(element) !== index;
      });
      setData(() => common);
    } else if (count == 0) {
      setStore(()=>[])
      setData(() => allCards);
    }
    else if (count == 1) setData(() => {
      let set=new Set(filteredData)
      return [...set]
    });
    else {
    const uniqueElements = new Set(cardId)
    const filteredElements = filteredData.filter((item:any) => {
        if (uniqueElements.has(item['id'])) {
            return item
        }
    });
      setData(() => {
        let set=new Set(filteredElements)
        return [...set]})   
    }
  }

  function setindex(idx: number,item:any) {
    setActiveItemIndex(idx)
    console.log(activeItemIndex,data[idx].id,'index',idx)
    setToggle(()=>data[idx].id)
    addClass(idx)
    removeClass()
        
  }

  function addClass(idx:number){
    document.querySelector(`[data-card-id=${data[idx].id}][data-content-id="card-selection"]`)?.classList.add('visibility')
    document.getElementById('pop-up')?.classList.remove('visibility')
    
  }

  function removeClass(){
    document.querySelector(`[data-card-id=${toggle}][data-content-id="card-selection"]`)?.classList.remove('visibility')
  }

  function clearAll() {
    let checkbox = document.getElementsByName('checkbox')! as NodeListOf<HTMLElement>;
    for (var i = 0; i < checkbox.length; i++) {
      let input = checkbox[i]! as HTMLInputElement;
      input.checked = false;
    }
    setData(allCards);
  }

  // setNum(() => data);

  return (
    <CappedContainerFluid className={cx(className)} style={style} hidden={hidden}>
      <div className="row vcp_wrapper" >
        <div
          class={cx(
            'max-vw-width col col-xs-12 col-md-3 ',
            sectionTitleExtraClasses
          )}
        >
          {sectionTitle}
        
          <div className="vcp_filter">
            <div>
          <h3 className='heading-4 font-weight-bold margin-2-t margin-2-b'>Card Features</h3>
         <div className="vcp_checkWrap">
          <input  type="checkbox" id="vehicle1" name="checkbox" value="membershipRewards" onChange={(e)=>handleClick(e)}/>
          <label  for="vehicle1"> Membership Reward</label>
          </div>
          <div className="vcp_checkWrap">
          <input type="checkbox" id="vehicle2" name="checkbox" value="NoAnnualFee" onChange={(e)=>handleClick(e)}/>
          <label for="vehicle2"> No Fee</label>
          </div>
          <div className="vcp_checkWrap"> 
          <input type="checkbox" id="vehicle3" name="checkbox" value="CashBack" onChange={(e)=>handleClick(e)}/>
          <label for="vehicle3"> CashBack</label>
          </div>
          <div className="vcp_checkWrap">
          <input type="checkbox" id="vehicle3" name="checkbox" value="Hotel" onChange={(e)=>handleClick(e)}/>
          <label for="vehicle3"> Hotel</label>
          </div>
          <div className="vcp_checkWrap">
          <input type="checkbox" id="vehicle3" name="checkbox" value="Airline" onChange={(e)=>handleClick(e)}/>
          <label for="vehicle3"> Airline</label>
          </div>
        
          </div>
          <div> 
          <h3 className='heading-4 font-weight-bold margin-2-t margin-2-b'>Great For</h3>
          <div className="vcp_checkWrap">
          <input type="checkbox" id="vehicle1" name="vehicle1" value="membershipReward" />
          <label for="vehicle1"> Dining</label>
          </div>
          <div className="vcp_checkWrap">
          <input type="checkbox" id="vehicle2" name="vehicle2" value="no fee" />
          <label for="vehicle2"> Digital Entairtainment</label>
          </div>
          <div className="vcp_checkWrap">
          <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
          <label for="vehicle3">Gas</label>
          </div>
          <div className="vcp_checkWrap">
          <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
          <label for="vehicle3"> Business Services</label>
          </div>
          <div className="vcp_checkWrap">
          <input type="checkbox" id="vehicle3" name="vehicle3" value="dining" />
          <label for="vehicle3"> Retail</label>
          </div>
          </div>
          <button className='Clear_Filters' onClick={()=>clearAll()}>Clear Filters</button>
        </div>

        </div>
        
        <div class="col col-xs-12 col-md-9">
      
        <FullBleedContainerFluid
        key={viewActiveItem.id}>
        <div
          className="card-compare-header-row dls-gray-06 dls-gray-01-bg pad-3-t"  
          style={`background-color: ${viewActiveItem.quickCompareColor} !important;`}
          id="pop-up"
        >
          <button className='close-button'>X</button>
          <div className="container-fluid container-fluid-capped">
            <div className="row">
            <div className="col col-xs-4 hidden-sm-down pad-3-tb text-align-center ">
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
               <div className="col col-xs-12 col-md-8 pad-3-tb card-compare-content-node-container">
                <div
                  key={viewActiveItem.id}
                  data-content-id="welcome-offer"
                  data-card-id={viewActiveItem.id}
                  className={cx('pad-2-lr')}
                >
                  {viewActiveItem.quickCompare.map((i:any, idx: any) => (
                    <CardCompareContentNode key={`${idx}`} node={i} />
                  ))}
                </div>
              </div>
               
            </div>
          </div>
        </div>
        </FullBleedContainerFluid>
            <div className="row flex-justify-center vcp_item_wrap">
              { data ?
              data.map((item:any, idx:any) => (
                <a
                  key={item.id}
                  data-content-id="card-selection"
                  data-card-id={item.id}
                  className={cx('col col-xs-6  col-md-4  pad-2 ')}
                  onClick={() =>setindex(idx,item) }
                  // aria-pressed={item.id === viewActiveItem.id}
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
              )):null}
            </div>
        </div>
      </div>
    </CappedContainerFluid>
    
    // <CappedContainerFluid className={cx(className)} style={style} hidden={hidden}>
    //   <div className="row">
        
    //     <div
    //       class={cx(
    //         'max-vw-width col col-xs-12 col-md-3 pad-2-lr pad-4-tb',
    //         sectionTitleExtraClasses
    //       )}
    //     >
    //       {sectionTitle}

    //       <div className="filter">
    //         <h3>Card Features</h3>
    //         <br></br>
    //         <input
    //           type="checkbox"
    //           id="vehicle1"
    //           name="checkbox"
    //           value="membershipRewards"
    //           onChange={(e) => handleClick(e)}
    //         />
    //         <label for="vehicle1"> Membership Reward</label>
    //         <input
    //           type="checkbox"
    //           id="vehicle2"
    //           name="checkbox"
    //           value="NoAnnualFee"
    //           onChange={(e) => handleClick(e)}
    //         />
    //         <label for="vehicle2"> No Fee</label>
    //         <input
    //           type="checkbox"
    //           id="vehicle3"
    //           name="checkbox"
    //           value="CashBack"
    //           onChange={(e) => handleClick(e)}
    //         />
    //         <label for="vehicle3"> CashBack</label>
    //         <input
    //           type="checkbox"
    //           id="vehicle3"
    //           name="checkbox"
    //           value="Airline"
    //           onChange={(e) => handleClick(e)}
    //         />
    //         <label for="vehicle3"> Airline</label>
    //         <input
    //           type="checkbox"
    //           id="vehicle3"
    //           name="checkbox"
    //           value="Hotel"
    //           onChange={(e) => handleClick(e)}
    //         />
    //         <label for="vehicle3"> Hotel</label>
    //         <button onClick={() => clearAll()}>clear</button>
    //         <br></br>
    //         <h3>Great For</h3>
    //         <br></br>
    //         <input type="checkbox" id="vehicle1" name="vehicle1" value="Dining" />
    //         <label for="vehicle1"> Dining</label>
    //         <input type="checkbox" id="vehicle2" name="vehicle2" value="Digital Entairtainment" />
    //         <label for="vehicle2"> Digital Entairtainment</label>
    //         <input type="checkbox" id="vehicle3" name="vehicle3" value="Gas" />
    //         <label for="vehicle3">Gas</label>
    //         <input type="checkbox" id="vehicle3" name="vehicle3" value="Business Services" />
    //         <label for="vehicle3"> Business Services</label>
    //         <input type="checkbox" id="vehicle3" name="vehicle3" value="Retail" />
    //         <label for="vehicle3"> Retail</label>
    //         <input type="checkbox" id="vehicle3" name="vehicle3" value="Travel" />
    //         <label for="vehicle3"> Travel</label>
    //       </div>
    //     </div>

    //     <div class="col col-xs-12 col-md-9">
    //     <FullBleedContainerFluid
    //     key={viewActiveItem.id}>
    //     <div
    //       className="card-compare-header-row dls-gray-06 dls-gray-01-bg"
    //       id="pop-up"
    //       style={`background-color: ${viewActiveItem.quickCompareColor} !important;`}
    //     >
    //       <button className='close-button'>X</button>
    //       <div className="container-fluid container-fluid-capped">
    //         <div className="row">
    //         <div className="col col-xs-3 hidden-sm-down pad-3-tb text-align-center flex-align-self-center">
    //             <a
    //               href={viewActiveItem.pdpUrl}
    //               key={viewActiveItem.id}
    //               data-content-id="card-header"
    //               data-card-id={viewActiveItem.id}
    //               className={cx('text-align-center display-block dls-gray-06')}
    //               target="_blank"
    //             >
    //               <img
    //                 className="card-compare-card-image"
    //                 src={viewActiveItem.image}
    //                 alt=""
    //                 aria-labelledby={viewTitleId}
    //               />
    //               <RawHtml
    //                 id={viewTitleId}
    //                 className="heading-4 font-weight-bold margin-2-t"
    //                 tagName="h3"
    //                 html={viewActiveItem.name}
    //               />
    //             </a>
    //             <div
    //               key={viewActiveItem.id}
    //               data-content-id="card-header-extra"
    //               data-card-id={viewActiveItem.id}
    //               className={cx('text-align-center legal-1')}
    //             >
    //               <p class="body-3 margin-1-tb">
    //                 <strong>${viewActiveItem.annualFee}</strong> Annual Fee
    //                 {typeof viewActiveItem.annualFeeSymbols === 'string' &&
    //                 viewActiveItem.annualFeeSymbols.length > 0 ? (
    //                   <sup>{viewActiveItem.annualFeeSymbols}</sup>
    //                 ) : null}
    //               </p>
    //               {viewActiveItem.annualFeeSubtext && (
    //                 <RawHtml tagName="p" html={viewActiveItem.annualFeeSubtext} />
    //               )}
    //               <p class="margin-1-t">
    //                 <a class="btn btn-sm" href={viewActiveItem.applyUrl || viewActiveItem.url}>
    //                   Apply Now
    //                 </a>
    //               </p>
    //               <p class="legal-1 margin-1-t">
    //                 <a
    //                   href={viewActiveItem.offerAndBenefitTermsUrl}
    //                   target="_blank"
    //                   rel="noreferrer noopener"
    //                 >
    //                   <sup>♦︎</sup>
    //                   <sup>‡</sup>
    //                   <sup>†</sup>Offer &amp; Benefit Terms
    //                 </a>
    //                 &ensp;|&ensp;
    //                 <a href={viewActiveItem.ratesAndFeesUrl} target="_blank" rel="noreferrer noopener">
    //                   <sup>¤</sup>Rates &amp; Fees
    //                 </a>
    //               </p>
    //             </div>
    //           </div>
    //            <div className="col col-xs-12 col-md-6 pad-3-tb card-compare-content-node-container">
    //             <div
    //               key={viewActiveItem.id}
    //               data-content-id="welcome-offer"
    //               data-card-id={viewActiveItem.id}
    //               className={cx('pad-2-lr')}
    //             >
    //               {viewActiveItem.quickCompare.map((i:any, idx:any) => (
    //                 <CardCompareContentNode key={`${idx}`} node={i} />
    //               ))}
    //             </div>
    //           </div>
               
    //         </div>
    //       </div>
    //     </div>
    //     </FullBleedContainerFluid> 
    //       <div className="row flex-justify-center card-compare-content-node-container">
    //         {data
    //           ? data.map((item: any, idx: any) => (
    //               <button
    //                 key={item.id}
    //                 data-content-id="card-selection"
    //                 data-card-id={item.id}
    //                 className={cx(columnClass, 'pad-2 card-compare-card-selection-button')}
    //                  aria-pressed={item.id === viewActiveItem.id}
    //                 onClick={() => setindex(idx,item)}
                   
    //               >
    //                 <img
    //                   className="card-compare-card-image"
    //                   src={item.image}
    //                   alt=""
    //                   aria-labelledby={viewTitleId}
    //                 />
    //                 <RawHtml
    //                   id={viewTitleId}
    //                   className="heading-4 font-weight-bold margin-2-t"
    //                   tagName="h3"
    //                   html={item.name}
    //                 />
    //               </button>
    //             ))
    //           : null}
    //       </div>
    //     </div>
    //   </div>
    // </CappedContainerFluid>
  );
};
