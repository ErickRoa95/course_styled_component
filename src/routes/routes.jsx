import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Root from "../pages/root";
import BasicExample from "../pages/BasicExample";
import ThemeExample from "../pages/ThemeExample";
import LoadingExample from "../pages/LoadingExample";
import ListExample from "../pages/ListExample";
import FormExample from "../pages/FormExample";
import ProductExample from "../pages/ProductExample";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Root />}/>
        <Route path="/BasicExamples" element={ <BasicExample />} />
        <Route path="/ExampleLoading" element={ <LoadingExample />} />
        <Route path="/ExampleThemes" element={ <ThemeExample />} />
        <Route path="/ExampleList" element={ <ListExample />} />
        <Route path="/ExampleForm" element={ <FormExample />} />
        <Route path="/ExampleProduct" element={ <ProductExample />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;