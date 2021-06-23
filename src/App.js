import React from "react"
import {Layout} from "antd"
import {BrowserRouter as Router, Switch , Route} from "react-router-dom"
import MenuTop from "./components/MenuTop";


//pages
import Home from "./pages/Home"
import Error404 from "./pages/Error404"
import Movie from "./pages/Movie"
import New_movies from "./pages/New_movies"
import Search from "./pages/Search"
import Popular from "./pages/Popular"

function App() {
const {Header, Content} = Layout;

  return (
    <Layout>
      <Router>
        <Header  style={{zIndex:1}}> <MenuTop/></Header> 
       
       
       <Content>  
         <Switch>
          
          <Route path="/" exact={true}>
          <Home/>          
          </Route>
          <Route path="/New_movies" exact={true}>
          <New_movies/>          
          </Route>
          <Route path="/Popular" exact={true}>
          <Popular/>          
          </Route>
          <Route path="/Search" exact={true}>
          <Search/>               
          </Route>


          <Route path="/Movie/:id" exact={true}>
          <Movie/>               
          </Route>
        
          <Route path="*" >
          <Error404/>               
          </Route>
        
        

        </Switch>
       </Content>

     </Router>
   </Layout>
  );
}

export default App;
