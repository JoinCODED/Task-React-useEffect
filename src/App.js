import "./App.css";

import { useCallback, useEffect, useRef, useState } from "react";
import { Body, Img } from "./styles/themes";

import CookieClick from "./components/CookieClick";
import itemsData from "./data/Items.json";
import ItemsList from "./components/Items/ItemsList";
import svgs from "./assets/svgs";
import initItems from "./controllers/ItemsController";


const App = () => {
  const [cookie, setCookie] = useState(0);
  const [items, setItems] = useState(initItems(itemsData));
  const [cookiesPS, setCookiesPS] = useState(0);


  return (
    <Body>
      <CookieClick cps={cookiesPS} cookie={cookie} />
      <Img
        onClick={() => setCookie(cookie + 1)}
        src={svgs.cookie}
        alt="a cookie chip"
        className="cookieHover"
        draggable={false}
      />

      <ItemsList
        items={items}
        cookies={cookie}
        setItems={setItems}
        setCookiesPS={setCookiesPS}
      />
    </Body>
  );
};

export default App;
