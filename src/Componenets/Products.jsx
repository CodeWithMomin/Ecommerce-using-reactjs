import React,{useReducer,useEffect} from 'react'
import './Products.css'
import AddToCart from './AddToCart'
const Products = () => {
    const initailState={
        loading:true,
        error:'',
        allProducts:{}

    }
    const reducer=(prevState,action)=>{
        switch(action.type)
        {
            case 'FETCH_SUCCESS':
                return {
                    loading:false,
                    allProducts:action.payload,
                    error:''
                }
                case 'FETCH_ERROR':
                    return{
                        lading:false,
                        allProducts:{},
                        error:"something went Wrong"
                    }
                    default:
                        return prevState;
                
        }
    }

    const [state,dispatch]=useReducer(reducer,initailState)
    useEffect(()=>{
        // axios.get(`https://dummyjson.com/products`).
        // then(respnose=>{
        //     dispatch({type:"FETCH_SUCCESS",payload:respnose.data})
            
        // })
        // .catch(error=>{
        //     dispatch({type:"FETCH-ERROR"})
        // })
        async function dataFetch(){
        //
           try{
            let res=await fetch(`https://dummyjson.com/products`)
            let data=await res.json();
            dispatch({type:"FETCH_SUCCESS",payload:data.products})
           }catch(e){
            dispatch({type:"FETCH_ERROR"})

           }

        }
        dataFetch();
    },[])
  return (
 
    <div id='container'>
        {state.loading? 'Loading':state.allProducts.map((item)=>{
            return <div  id="box" key={item.id} >
                <div className="box1"><img id='img' src={item.thumbnail} alt="" width="260px" height="200px"  margin="10px"/></div>
                <div className="box2">
                    <p className='title'>{item.title}</p>
                    <p className='des'>{item.description}</p>
                    <span>${item.price} </span>  &nbsp; &nbsp; <span style={{color:"red"}}>rating:{item.rating}</span>

                </div>
               <AddToCart/>
                

            </div>
        })}
        {state.error?error:null}
    </div>
  )
}

export default Products