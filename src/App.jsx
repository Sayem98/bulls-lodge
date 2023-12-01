import { Route, Routes, Router } from "react-router-dom";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { WagmiConfig } from "wagmi";
import { arbitrum, mainnet, sepolia } from "viem/chains";

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "338f7fb164fb123b53b98172fe2ccad9";
import Home from "./pages/Home/Home";
import Mint from "./pages/Mint/Mint";
import Terms from "./pages/Terms/Terms";
import Privacy from "./pages/Privacy/Privacy";

const project_id = import.meta.env.WALLET_CONNECT_PROJECT_ID;

// 2. Create wagmiConfig
const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [sepolia];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains });

const App = () => {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mint" element={<Mint />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />

          {/* <Route path="*" element={<Navigate to="/404" replace />} /> */}
          {/* <Route path="/404" element={<PageNotFound />} /> */}
        </Routes>
      </WagmiConfig>
      <ToastContainer />
    </>
  );
};
export default App;

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
