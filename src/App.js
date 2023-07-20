import { useState } from "react";
import "./styles.css";
import Tab from "./Tab";

export default function App() {
  const [currentIndex, setIndex] = useState(1);
  const handleChange = (index) => {
    setIndex(index);
  };

  return (
    <div className="App">
      <Tab currentTab={currentIndex} onChange={handleChange}>
        <Tab.HeadsContainer>
          <Tab.Item label="Tab1" index={1} />
          <Tab.Item label="Tab2" index={2} />
          <Tab.Item label="Tab3" index={3} />
        </Tab.HeadsContainer>
        <Tab.ContentContainer>
          <Tab.ContentItem index={1}>
            <h1>I am child 1</h1>
          </Tab.ContentItem>
          <Tab.ContentItem index={2}>
            <h1>I am child 2</h1>
          </Tab.ContentItem>
          <Tab.ContentItem index={3}>
            <h1>I am child 3</h1>
          </Tab.ContentItem>
        </Tab.ContentContainer>
      </Tab>
    </div>
  );
}
