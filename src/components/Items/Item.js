import { useEffect, useState } from "react";
import svgs from "../../assets/svgs";
import abbreviateNumber from "../../helper";
const {
  ItemStyled,
  ItemImage,
  ItemDescription,
  Badge,
} = require("../../styles/ItemsStyled");
const Item = ({ item, cookies, setItems, items, setCookiesPS, setCookies }) => {
  const [hovered, setHovered] = useState(false);


  const incrementCookiesPS = () => {
    if (itemAvailable) {
      let newItem = { ...item, quantity: item.quantity + 1 };
      let newItems = items.map((f) => {
        return f.name === item.name ? newItem : f;
      });
      setItems(newItems);
      setCookiesPS((cps) => cps + item.quantity + 1 * item.cps);
    }
  };

  const itemPrice = () => {
    const price =
      item.initial_price *
      (item.quantity > 0 ? item.quantity * item.multiplier : 1);
    return price;
  };

  const itemAvailable = cookies > itemPrice();


  return (
    <ItemStyled
      enabled={itemAvailable}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={incrementCookiesPS}
    >
      <ItemImage src={item.img} />
      <ItemDescription hovered={hovered}>
        <h3>{item.enabled()}</h3>
        <p>{item.description}</p>
        <p>{`Produces ${Math.floor(item.cps)} cps`}</p>
        <p>{`Currently producing ${Math.floor(
          item.cps * item.quantity
        )} cps`}</p>
        <p style={{ position: "relative" }}>
          {`Price: ${abbreviateNumber(Math.floor(itemPrice()))}`}
          <img
            src={svgs.cookie}
            style={{ height: 17, margin: 3, position: "absolute", top: -2 }}
            alt="cookie"
          />
        </p>
      </ItemDescription>
      {item.quantity > 0 && <Badge>{item.quantity}</Badge>}
    </ItemStyled>
  );
};

export default Item;
