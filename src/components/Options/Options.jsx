import styles from "./Options.module.css";
import usdIcon from "../../images/icon-dollar.svg";
import Input from "./Input";

function Options() {
  return (
    <div>
      <Input label="Bill" icon={usdIcon} />
    </div>
  );
}

export default Options;
