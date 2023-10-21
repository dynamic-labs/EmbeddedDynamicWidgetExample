import {
  DynamicEmbeddedWidget,
  DynamicContextProvider,
} from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import "./App.css";

// The `DynamicEmbeddedWidget` component is a React component provided by the `@dynamic-labs/sdk-react-core` package which is the default for V19.
// Please also be aware that V19 comes with Viem instead of Ethers, if you need Ethers please refer to this: https://docs.dynamic.xyz/react-sdk/upgrade#ethers-viem
// It is used to embed a Dynamic Widget into a web page rather than with the Connect button.
// The `DynamicEmbeddedWidget` component requires a `DynamicContextProvider` component to be present in the component tree above it.
// The `DynamicEmbeddedWidget` component also accepts a `background` prop that specifies the background style of the widget.
// The `background` prop can be set to "none", "default", or "with-border".

// The widget itself is just syntactic sugar to wrap two other components:
// `DynamicEmbeddedAuthFlow` and `DynamicEmbeddedUserProfile`.
// The profile is the equivalent to the `DynamicUserProfile`
// The auth flow is used to trigger and handle the actual signup/login, similar to how you might use `setShowAuthFlow` as a hook to pop up the signup flow.

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
