import Content1 from "../pages/Content1";
import Content2 from "../pages/Content2";
import  Content3 from "../pages/Content3";
import Content4 from "../pages/Content4";
import Content5 from "../pages/Content5";
import Content6 from "../pages/Content6";
import { BookDemoProvider } from "../Context/BookDemoContext";
import Footer from "../pages/Footer";
// import DryCry from "../pages/DryCry";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function DryCry(){
        return(
       
          <div className="overflow-hidden scroll-auto">
            <Content1/>
             <Content2/>
           <Content3/>
            <Content4/>
            <Content5/>
            <BookDemoProvider><Content6/></BookDemoProvider>
            <Footer/>
          </div>


          
        )
}
