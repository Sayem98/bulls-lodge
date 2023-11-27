import { Route, Routes, Router } from "react-router-dom"
import Home from "./pages/Home/Home"
import Mint from "./pages/Mint/Mint"
import Terms from "./pages/Terms/Terms"
import Privacy from "./pages/Privacy/Privacy"

const App = () => {
  return (
    <>
      {/* <Home /> */}
      {/* <Mint /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mint" element={<Mint />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />

        {/* <Route path="*" element={<Navigate to="/404" replace />} /> */}
        {/* <Route path="/404" element={<PageNotFound />} /> */}
      </Routes>
    </>
  )
}
export default App

// import { createBrowserRouter, RouterProvider } from "react-router-dom"
// const pages = import.meta.glob("./pages/**/*.jsx", { eager: true })

// const routes = []
// for (const path of Object.keys(pages)) {
//   const fileName = path.match(/\.\/pages\/(.*)\.jsx$/)?.[1]
//   if (!fileName) {
//     continue
//   }

//   const normalizedPathName = fileName.includes("$")
//     ? fileName.replace("$", ":")
//     : fileName.replace(/\/index/, "")

//   routes.push({
//     path: fileName === "index" ? "/" : `/${normalizedPathName.toLowerCase()}`,
//     Element: pages[path].default,
//     loader: pages[path]?.loader,
//     action: pages[path]?.action,
//     ErrorBoundary: pages[path]?.ErrorBoundary,
//   })
// }

// const router = createBrowserRouter(
//   routes.map(({ Element, ErrorBoundary, ...rest }) => ({
//     ...rest,
//     element: <Element />,
//     ...(ErrorBoundary && { errorElement: <ErrorBoundary /> }),
//   }))
// )

// const App = () => {
//   return <RouterProvider router={router} />
// }
// export default App
//
