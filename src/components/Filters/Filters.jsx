import Select from "react-select";
import firstSelectStyles from "./Filters.style"
import { marks } from "../../data/marks";
import makeAnimated from "react-select/animated";

const Filters = ({setFilter}) => {

    const handleChange = (e) => {
      if(e === null) {
        setFilter('');
       return;
      } else {
        setFilter(e.value);
      }
    };
  
    return (
      <div>
        <div>
          <label htmlFor="marks">Car brand</label>
          <Select
            onChange={handleChange}
            options={marks}
            makeAnimated={makeAnimated}
            placeholder={"Enter the text"}
            maxMenuHeight={272}
            isClearable={true}
            styles={firstSelectStyles}
          />
        </div>
        <button type="button"> Search </button>
      </div>
    );
  };

  export default Filters;

