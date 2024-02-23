import usdIcon from "../../images/icon-dollar.svg";
import Input from "./Input/Input";
import InputList from "./InputList/InputList";

function Options({handleSelectedTip, tipValue, setTipValue}) {
  return (
    <div>
      <Input label="Bill" icon={usdIcon} />
      <InputList
        handleSelectedTip={handleSelectedTip}
        setTipValue={setTipValue}
        tipValue={tipValue}
        label="Select Tip %"
      />
    </div>
  );
}

export default Options;
