import usdIcon from "../../images/icon-dollar.svg";
import peopleIcon from "../../images/icon-person.svg";
import Input from "./Input/Input";
import InputList from "./InputList/InputList";

function Options({handleSelectedTip, tipValue, setTipValue, setBill, bill, people, setPeople}) {
  return (
    <div>
      <Input label="Bill" icon={usdIcon} bill={bill} setBill={setBill} />
      <InputList
        handleSelectedTip={handleSelectedTip}
        setTipValue={setTipValue}
        tipValue={tipValue}
        label="Select Tip %"
      />
      <Input label="Number of People" icon={peopleIcon} bill={people} setBill={setPeople} />
    </div>
  );
}

export default Options;
