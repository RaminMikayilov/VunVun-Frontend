import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function ReactDate({placeholder,changeFunc,selected}) {
  return (
    <DatePicker selected={selected} className="w-[90%] h-[30px] focus:outline-btn-orange" onChange={changeFunc} placeholderText={placeholder}/>
  )
}

export default ReactDate
