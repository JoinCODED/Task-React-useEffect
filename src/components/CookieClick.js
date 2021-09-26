import { Button } from "../styles/cookieClicks";
import svgs from "../assets/svgs";
import abbreviateNumber from "../helper";
const CookieClick = ({ cookie, cps }) => {
  return (
    <div>
      <Button>
        <img src={svgs.cookie} alt="" />
        <label> {abbreviateNumber(Math.floor(cookie))}</label>
      </Button>
      <label> Generating {Math.floor(cps)} cookies per second</label>
    </div>
  );
};

export default CookieClick;
