import {
  DynamicEmbeddedWidget,
  DynamicContextProvider,
} from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import "./App.css";

function App() {
  return (
    <div className="App">
      <DynamicContextProvider
        settings={{
          environmentId: "4e598b41-f388-489b-a0b3-d24064b1d1ed",
          walletConnectors: [EthereumWalletConnectors],
        }}
      >
        <div className="widget-container">
          {/* background can be none, default or with-border */}
          <DynamicEmbeddedWidget background="default" />
        </div>
      </DynamicContextProvider>
    </div>
  );
}

export default App;
