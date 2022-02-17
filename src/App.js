import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/feed/Feed";
import "./App.css";
import FakebookContextProvider, {
  FakebookContext,
} from "./contexts/FakebookContext";
import PostContextProvider from "./contexts/PostContext";

function App() {
  return (
    <div className="app">
      <>
        <Header />
        <div className="app__body">
          <FakebookContextProvider>
            <Sidebar />
            <PostContextProvider>
              <Feed />
            </PostContextProvider>
          </FakebookContextProvider>
        </div>
      </>
    </div>
  );
}

export default App;
