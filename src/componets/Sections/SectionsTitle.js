import { ReactComponent as SmsIcon } from "./Icons/sms.svg";
import { ReactComponent as BasketIcon } from "./Icons/basket.svg";
import { ReactComponent as ChickenIcon } from "./Icons/chicken.svg";
import { ReactComponent as BoxIcon } from "./Icons/box.svg";
import { ReactComponent as ComboBurgerIcon } from "./Icons/comboburger.svg";
import { ReactComponent as ComboBasketIcon } from "./Icons/combobasket.svg";
import { ReactComponent as BurgerIcon } from "./Icons/burger.svg";
import { ReactComponent as TwisterIcon } from "./Icons/twister.svg";
import { ReactComponent as SnekIcon } from "./Icons/snek.svg";
import { ReactComponent as SausIcon } from "./Icons/saus.svg";
import { ReactComponent as DrinkIcon } from "./Icons/drink.svg";

const sectionsData = [
  { id: "Recomendation", label: "РЕКОМЕНДУЕМ", icon: <SmsIcon /> },
  { id: "Baskets", label: "Баскеты", icon: <BasketIcon /> },
  { id: "Chicken", label: "Сочная курочка", icon: <ChickenIcon /> },
  { id: "Boxs", label: "Боксы", icon: <BoxIcon /> },
  { id: "KomboBurgers", label: "Комбо Бургеры", icon: <ComboBurgerIcon /> },
  { id: "KomboBaskets", label: "Комбо Баскеты", icon: <ComboBasketIcon /> },
  { id: "Burgers", label: "Бургеры", icon: <BurgerIcon /> },
  { id: "Twisters", label: "Твистеры", icon: <TwisterIcon /> },
  { id: "Sneks", label: "Снэки", icon: <SnekIcon /> },
  { id: "Sauses", label: "Соусы и допы", icon: <SausIcon /> },
  { id: "Drink", label: "Напитки", icon: <DrinkIcon /> },
];
export default sectionsData;
