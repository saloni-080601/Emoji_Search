// import React, { Component } from 'react'
// import EmojiSearch from './EmojiSearch';
// import Emoji from './Emoji_list.json';

// class Search extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              search:'',
             
//         }
//         this.OnChangeHandler=this.OnChangeHandler.bind(this)
//     }
//     OnChangeHandler=(event)=>{
//         this.setState=({
//             search:event.target.value
//         })
//     }
//     render() {
//         const items=Emoji.filter((data)=>{
//             if(this.state.search==null){
//                 return data
//             }else if(data.title.toLowerCase().includes(this.state.search.toLowerCase())||data.symbol.toLowerCase().includes(this.state.search.toLowerCase())){
//                 return data
//             }
//         })
//         return (
//             <div>
//               <input type='text'  className='Zero'  placeholder='Search....' onChange={this.OnChangeHandler} value={this.state.value}/> 
//               <EmojiSearch /> 
//             </div>
//         )
//     }
// }
// export default Search
