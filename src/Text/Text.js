import React,{useState, useEffect} from 'react';

const Text = () => {

 const [values,setValues] = useState([]);
 const[limit,setLimit] = useState(3);
 useEffect(
  () => {

    const getUlr = "https://jsonplaceholder.typicode.com/users";
    fetch(getUlr)
    .then(res => res.json())
    .then(data => {
      setValues(data)
    })
  },[]
  
 )


 const deleteArray = (id) =>{
const filteredArray = values.filter((item)=>{
if (item.id === id){
  return false
}else{
  return true
}

})

setValues(filteredArray)

 }

const limited = values.slice(0,limit);

const addMore =()=>{
  setLimit(limit+3)
}


  return <div>
    {
  
  limited.map((value) => {
        const { username, id} = value;
        return<div key={id}> 
          {username} <button type="button" onClick={()=>deleteArray(id)}>Delete</button>
        </div>
      },)
    }
    <button onClick={addMore}>Add More</button>
     </div>;
};

export default Text;
