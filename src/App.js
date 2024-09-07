import React from 'react'
import Paginations from './Pagination'

function App() {
  return (
    <div>
        <Paginations />
    </div>
  )
}

export default App



// import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';

// const dataArry = [
//   {
//     id: 1, name: "dsd", isopen: false,image:"https://media-cdn.tripadvisor.com/media/photo-s/0c/bb/a3/97/predator-ride-in-the.jpg"
//   },
//   {
//     id: 2, name: "asdsd", isopen: false,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTofZXK-_G7CFJF8T32HbnSjj-Vtl9w9BLXUg&s"
//   },
//   {
//     id: 3, name: "dsd", isopen: false,image:"https://media1.thrillophilia.com/filestore/l9fcy3sj95mwp23zvk13hdefpx0o_49090236931_e27408bbcc_o.jpg"
//   },
//   {
//     id: 4, name: "dsd", isopen: false,image:"https://cms.imgworlds.com/assets/e3873302-212a-4c3a-aab3-c3bee866903c.jpg?key=home-gallery"
//   },
//   {
//     id: 5, name: "dsd", isopen: false,image:"https://media1.thrillophilia.com/filestore/l9fcy3sj95mwp23zvk13hdefpx0o_49090236931_e27408bbcc_o.jpg"
//   },
//   {
//     id: 6, name: "dsd", isopen: false,image:"https://cms.imgworlds.com/assets/9558de9d-1e49-437e-aa7b-b8bd4d999b00.jpg?key=home-gallery"
//   },
//   {
//     id: 7, name: "dsd", isopen: false,image:"https://media-cdn.tripadvisor.com/media/photo-s/0c/bb/a3/97/predator-ride-in-the.jpg"
//   },
//   {
//     id: 8, name: "dsd", isopen: false,image:"https://cms.imgworlds.com/assets/e3873302-212a-4c3a-aab3-c3bee866903c.jpg?key=home-gallery"
//   },
//   {
//     id: 9, name: "dsd", isopen: false,image:"https://cms.imgworlds.com/assets/9558de9d-1e49-437e-aa7b-b8bd4d999b00.jpg?key=home-gallery"
//   }
// ]
// const dummyimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcGt3t_ZkYA3MLelnrlxTyP6NhYuFcPkYZnOVy1-abzDnDGDLxEMPqoh5oIp_DA7TJZUU&usqp=CAU"
// function App() {
//   const [dataArray, setDataArray] = useState(dataArry);

//   const toggleImageOpen = (id,image) => {
//     setDataArray(prevDataArray => {
//       const isCurrentlyOpen = prevDataArray.find(item => item.id === id)?.isopen;
//       return prevDataArray.map(item =>
//         item.id === id
//           ? { ...item, isopen: !isCurrentlyOpen } 
//           : { ...item, isopen: item.image === image ? true : false } 
//       );
//     });
//   };
//   return (
//     <div
//     className="App"
//     style={{
//       display: 'flex',
//       flexWrap: 'wrap',
//       justifyContent: 'center', 
//       width: '100%',
//       maxWidth:'250px',
//       margin:'0 auto',
//       alignItems:'center',
//       boxSizing: 'border-box'
//     }}
//   >
//     {dataArray.map((item, index) => (
//       <div
//         key={index}
//       >
//         <img
//           style={{ height: '80px', width: '80px', display: 'block', margin: 'auto' }}
//           src={item.isopen ? item.image : dummyimg}
//           onClick={()=>toggleImageOpen(item.id,item.image)}
//         />
//       </div>
//     ))}
//   </div>
  
  
//   );
// }

// export default App;
