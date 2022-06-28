import { h, FunctionComponent } from 'preact';
import {  useState } from 'preact/hooks';
import cx from 'classnames';
import { CappedContainerFluid } from './containers';

export interface CardSectionProps {
  style?: string | undefined;
  className?: string | undefined;
  hidden?: boolean;
  sectionTitle: ReturnType<FunctionComponent>;
  sectionTitleExtraClasses?: string;
  viewActiveItem?:any;
  itemState?:any;
  setActiveItemIndex?:any;
  columnClass?:any;
  viewTitleId?:any;
 setNum?:any;
 num?:any;
}

export const CardFilterSection: FunctionComponent<CardSectionProps> = ({
  style,
  className,
  hidden,
  sectionTitle,
  sectionTitleExtraClasses,
  viewActiveItem,
  itemState,
  setActiveItemIndex,
  columnClass,
  viewTitleId,
  setNum,
  children,
  num,
}) => {
  const[data,setData]=useState([...itemState.state.allItems])
     
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
  
    const handleClick=(e:any)=>{
         
      filterData(e.target.value,e.target.checked)
    }
     
       const filterData=(value:string,checked:boolean)=>{
        let filteredData:any
        
       if(checked){
        console.log(data,'yes')
         filteredData=itemState.state.allItems.filter((i:any)=>{
         
         if(i[value])
           return i
       })
      }else{
        console.log(data,'no')
        filteredData=data.filter((i:any)=>{
          if(!i[value])
          return i
      })
      }
      
      
     
      displayData(filteredData,checked)
      
     
      
      
    }

    
      
    function displayData(filteredData:any,checked:boolean){
      if(data.length==13)
     setData(()=>filteredData)
      else if(checked){
      setData(()=>[...data,...filteredData])
      console.log('b')
      removeDuplicate()
      }
      else if(filteredData.length==0)
      setData(()=>itemState.state.allItems)
      else{
      setData(()=>filteredData)
      removeDuplicate()
      }
      
    
    }

    function removeDuplicate(){
      console.log('b',data)
      setData(()=>{
        let set=new Set(data)
        return [...set]
      })
    }
    
  
  function setindex(idx:number){
   
    setActiveItemIndex(idx)
  }

  function clearAll(){
 let checkbox=document.getElementsByName('checkbox')! as NodeListOf<HTMLElement>
  for(var i=0;i<checkbox.length;i++){
        let input=checkbox[i]! as HTMLInputElement
        console.log('hi')
        input.checked=false

  }
  setData(itemState.state.allItems)
    
  }
 

     
   setNum(()=>data)
    
  return (
    <CappedContainerFluid className={cx(className)} style={style} hidden={hidden}>
      <div className="row" >
        <div
          class={cx(
            'max-vw-width col col-xs-12 col-md-3 pad-2-lr pad-4-tb',
            sectionTitleExtraClasses
          )}
        >
          {sectionTitle}
        
          <div className="filter">
          <h3>Card Features</h3>
          <br></br>
          <input  type="checkbox" id="vehicle1" name="checkbox" value="membershipRewards" onChange={(e)=>handleClick(e)}/>
          <label  for="vehicle1"> Membership Reward</label>
          <input type="checkbox" id="vehicle2" name="checkbox" value="NoAnnualFee" onChange={(e)=>handleClick(e)}/>
          <label for="vehicle2"> No Fee</label>
          <input type="checkbox" id="vehicle3" name="checkbox" value="Boat"/>
          <label for="vehicle3"> Airline</label>
          <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
          <label for="vehicle3"> Hotel</label>
          <input type="checkbox" id="vehicle3" name="vehicle3" value="dining" />
          <label for="vehicle3"> Dining</label>
          <button onClick={()=>clearAll()}>clear</button>
          <br></br>
          <h3>Great For</h3>
          <br></br>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="membershipReward" />
          <label for="vehicle1"> Dining</label>
          <input type="checkbox" id="vehicle2" name="vehicle2" value="no fee" />
          <label for="vehicle2"> Digital Entairtainment</label>
          <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
          <label for="vehicle3">Gas</label>
          <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
          <label for="vehicle3"> Business Services</label>
          <input type="checkbox" id="vehicle3" name="vehicle3" value="dining" />
          <label for="vehicle3"> Retail</label>
          
        </div>

        </div>
        
        <div class="col col-xs-12 col-md-9">
            <div className="row flex-justify-center card-compare-content-node-container">
              { data ?
              data.map((item:any, idx:any) => (
                <button
                  key={item.id}
                  data-content-id="card-selection"
                  data-card-id={item.id}
                  className={cx(columnClass, 'pad-2 card-compare-card-selection-button')}
                  onClick={() =>setindex(idx) }
                  aria-pressed={item.id === viewActiveItem.id}
                >
                  <img
                    className="card-compare-card-image"
                    src={item.image}
                    alt=""
                    aria-labelledby={viewTitleId}
                  />
                </button>
              )):null}
            </div>
        </div>
      </div>
    </CappedContainerFluid>
  );
};