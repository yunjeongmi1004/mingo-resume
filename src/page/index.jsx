import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import intro from "../widget/Table/data/intro.jsx"
import intropbls from "../widget/Table/data/intropb.jsx"

const Page = () => {
    return (
      <Routes>
        <Route path="/" element={<Home intro={intro} />} />
        <Route path="/frontwant" element={<Home intro={intro} />} />
        <Route path="/pbls" element={<Home intro={intropbls} />} />
      </Routes>
    )
}

export default Page;