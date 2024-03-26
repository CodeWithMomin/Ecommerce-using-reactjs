import React,{useReducer,useEffect} from 'react'
import './Products.css'
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
 
    <div>
        {state.loading? 'Loading':state.allProducts.map((item)=>{
            return <div  id="box" key={item.id} >{item.title}</div>
        })}
        {state.error?error:null}
    </div>
  )
}

export default Products