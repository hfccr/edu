import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  BrowserRouter,
} from "react-router-dom";
import {NextUIProvider} from '@nextui-org/react'
import { Route } from "react-router-dom";
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Landing from './components/Landing.jsx';
import Organisation from './components/Organisation.jsx';
import OrganisationListing from './components/OrganisationListing.jsx';
import StudentListing from './components/StudentListing.jsx';

import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'e7fa7d19fd057ecd9403a0e89bd62b8b',
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: false
});

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path='/landing' element={<Landing/>}/>
      <Route path='/organisations' element={<Organisation/>}/>
      <Route path='/organisation-listing' element={<OrganisationListing/>}/>
      <Route path='/student-listing' element={<StudentListing/>}/>
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <WagmiProvider config={config}>
  <QueryClientProvider client={queryClient}>
  <RainbowKitProvider>
  <NextUIProvider>
   <Navbar/>
   <RouterProvider router={router} />
   </NextUIProvider>
   </RainbowKitProvider>
   </QueryClientProvider>
   </WagmiProvider>
  </StrictMode>,
)
