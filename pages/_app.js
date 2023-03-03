import NavBarContextProvider from "../components/NavBar";
import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { goerli } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import AppContextProvider from "../contexts/appContext";
import { ThirdwebProvider,ChainId } from '@thirdweb-dev/react'

const { chains, provider } = configureChains([goerli], [publicProvider()]);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const activeChainId = ChainId.Goerli;

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains}>
          <ThirdwebProvider activeChain={activeChainId} autoConnect>
          <NavBarContextProvider>
            <Component {...pageProps} />
          </NavBarContextProvider>
          </ThirdwebProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </AppContextProvider>
  );
}

export default MyApp;
