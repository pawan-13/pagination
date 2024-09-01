import Page from "./components/page"
import { useState } from "react";
import { createContext } from "react";

const PageContext = createContext();

const App = () => {
  const [pageNo, setPageNo] = useState(1);
  return (
    <>
      <PageContext.Provider value={{pageNo,setPageNo}}>
        <Page />
      </PageContext.Provider>
    </>
  )
}

export default App;
export {PageContext};
