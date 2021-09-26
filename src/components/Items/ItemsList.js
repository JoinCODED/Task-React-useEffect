const { ItemsListStyled } = require("../../styles/ItemsStyled");
const { default: Item } = require("./Item");



const ItemsList = ({ items, cookies, setItems, setCookiesPS, setCookies }) => (
  <ItemsListStyled>
    {items.map((item) => (
      <Item
        item={item}
        cookies={cookies}
        items={items}
        setItems={setItems}
        setCookiesPS={setCookiesPS}
        setCookies={setCookies}
      />
    ))}
  </ItemsListStyled>
);

export default ItemsList;
