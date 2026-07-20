
import { useEffect, useState } from 'react';
import './App.css';
// import { type } from '@testing-library/user-event/dist/type';

function App() {
  // lift initials items to parent 
  // Create handleAddition 
//    const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
// ];
function handleDelete(id){
  //id-5 remobe the one with id=5 ,rest all should be filtered 
  console.log(id)
  setItems((items)=>items.filter((items)=>items.id!==id))
}
//if you want to initialixze state only on first rerender ,write it in a callback function 

let [items,setItems]=useState(()=>localStorage.getItem("items")?JSON.parse(localStorage.getItem("items")):[])
useEffect(()=>{//setting to localStroage
localStorage.setItem("items",JSON.stringify(items))  
},[items])
function handleAddition(desc,quantity){
  const newItems={
  id:Date.now(),desc,quantity,packed:false
};
console.log("add button clicked ")
setItems((items)=>[...items,newItems])
}

function handleToggle(id){
//agar id mere click hue id se match hhoga thenn reverse it otherwise dint do anything 
console.log(id)
setItems((items)=>items.map((item)=>item.id===id? {...item,packed:!item.packed}:item))
}
function handleclear(){
  setItems([]);
}
  return (
   <div className='app'>
<Logo/>
<Form onAdition={handleAddition}/>
<PackingList items={items} onDelete={handleDelete} onToggle={handleToggle} onclear={handleclear}/>
<Fotter items={items}/>
   </div>
  );
}
function Logo(){
  return <h1>🌴🏖️🌞🐳Far Away </h1>
}
function Form({onAdition}){
  //react takes handle of 
  let[desc,setdescription]=useState("test");
  let[quantity,setQuantity]=useState(1);
  let Arr =Array.from({length:20},(_,i)=>i+1);
  function handleSubmit(e){
    e.preventDefault();
    //prevent its default behaviour 
    //parent ka addition function is received via props 
    console.log(desc,quantity)
    onAdition(desc,quantity);//pass and accept in function this parameters 
  }
  return (<form className='add-form' onSubmit={handleSubmit}><h3>form comes here </h3>
  <select value={quantity} onChange={(e)=>setQuantity(e.target.value)}>
    {/* <option>1</option>
<option>2</option>
<option>3</option> */}
{Arr.map((elem)=><option value={elem}>{elem}</option>)}
    </select>
    <input type="text" value={desc} onChange={(e)=>setdescription(e.target.value)}></input>
    <button>add</button></form>
    );
}

function PackingList({items, onDelete,onToggle ,onclear}){

  let [sortBy,setSortBy]=useState();
  let sortedItems=items;

  if(sortBy==="desc"){
sortedItems=items.toSorted((a,b)=>a.description.localeCompare(b.description))
}
else if(sortBy==="packed"){
  sortedItems=items.toSorted((a,b)=>a.packed-b.packed)
}
else if(sortBy==="input"){
  sortedItems=items
}
console.log(sortedItems)
  
  function handleSortBy(e)
  {
    setSortBy(e.target.value);
  }

  return (
    <div className='list'>
      <ul >
      {
        items.map((elem)=>(
          <Item item={elem} key={elem.id} onDelete={onDelete} onToggle={onToggle}/>
        ))
      }
    </ul>
    <div className="actions">
          <select value={sortBy} onChange={handleSortBy}>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status</option>
          </select>
          <button onClick={onclear}>Clear list</button>
        </div>
    </div>
    
  );
}
function Item({item,onDelete,onToggle}){
  return(<li>
    <input type="checkbox" checked={item.packed} onChange={()=>onToggle(item.id)}></input>
    <span className={`${item.packed?"completed":""}`}>{item.quantity}-{item.desc}</span>

    <button className='button' onClick={()=>onDelete(item.id)}>✖️</button>
  </li>)
}
function Fotter({items}){
  //let new state we didnt do it like this bbecause we are using parent se le rhe basicallly 
  let noOfPacked=items.filter((elem)=>elem.packed).length
  let total=items.length
 let percentage=Math.ceil((noOfPacked/total)*100)
  return (<footer className='stats'>{ total>0?`you have ${noOfPacked} items,you are ${percentage}% ready`:`start packing`}</footer>);}


// contract or binding of vslue with onchange in controlled elements 
//state varicable wil coontrol this i willl fic it 
// when you out a vlaue u have to hanldke the on change 
//because when you do not do onlychNGE
export default App;
//twoway biinding 
//controlled elemet value change and value display controll is taken up by react by t
// he concept of state in form elements 
//onchange={setDescrption}if u pass the funstion dirextly it will take the event
//  ka obj and setdesc as event ka obj 
//onChange={(e)=>setdescription(e.target.value)}
//when we write like this youi add one more darwaza callback it still bring the event ka object to the darwaza and then go inside we filter out only value from the event 
//e.prevents removes 7the default behaviour of that event 
//onsubmit event occurs on form the whole page while the onliclk is on button 
//we are using onsunbmit because we want to submiit the form when we press enter 
//sibling canot share data wutheach other 
//so bcz of this we have an concept of lifting state 
//derived state
//no of packed items doenti need state because its dericed from existing state 
//useSrare rerurn arrat 
//arrray.from({length:20}) this will return you an arrat of 20melements with each element being undefined 
//the from finction has second parameter that is mapping function which will be called for every elemet of the array 
//the mapping function receives two parameters 1:elemnt,2:index
//since we dont care about the elemnt here we write underscore 
//Array.from({length:20},(_,)=>i+1)//component composition 
/*/**1. Lift initialItems to parent(App)
 * 2. Create handleAddition and pass it in form because form needs it to add it in the list
 * 3.Call parent ka addition function recevied via props
 * 4. pass and accept description, quantity in function parameters
 * 5. make items as a state variable because addition needs
 * 6. create newitem object with all keys
 * 7. add this newitem in items state
 * 8. create handleDelete in App component
 * 9. pass this in props to list component
 * 10. accept in props in list component
 * 11. pass onDelete from List to Item
 * 12. accept onDelete in Item
 * 13. pass id in onDelete function
 * 14. accept id in handleDelete
 * 15. filter out those that dont match with this id
 * 16. ontoggle call handleToggle which is passed from App to List to Item again
 * 17. write logic using map function - (// agar id mere click hue id se match hoga then reverse its packed
    // else dont do anything)
  18. make sortBy a state variable because its change needs a rerender.
  19. sortBy logic would be written directly inside component because it is a derived state, dont write it in handler function
  20. logic for clear list is to remove everything from the state variable
 * simple words - jisko modify kr rhe ho vo jis component me hai, put your function there
 */