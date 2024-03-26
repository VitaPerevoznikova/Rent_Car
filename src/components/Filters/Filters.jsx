import Select from "react-select";
import { ContainerSearch, LabelSearch, SearchButton } from "./Filters.style"
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
      <ContainerSearch>
        <form>
          <LabelSearch htmlFor="marks">Car brand</LabelSearch>
          <Select
            onChange={handleChange}
            options={marks}
            makeAnimated={makeAnimated}
            placeholder={"Enter the text"}
            maxMenuHeight={272}
            isClearable={true}
            styles={{
              control: styles => ({
                ...styles,
                width: '224px',
                height: '48px',
                borderColor: 'rgba(18, 20, 23, 0.2)',
                border: 'none',
                borderRadius: '14px',
                padding: '8px',
                fontSize: '16px',
                fontFamily: 'ManropeMedium',
                backgroundColor: 'rgba(247, 247, 251, 1)',
                appearance: 'none',
                marginTop: '8px',
              }),
              option: (styles, { isFocused }) => {
                return {
                  ...styles,
                  color: isFocused ? 'black' : 'rgba(18, 20, 23, 0.2)',
                  fontFamily: 'ManropeMedium',
                };
              },
              menuList: base => ({
                ...base,
                '::-webkit-scrollbar': {
                  width: '9px',
                },
                '::-webkit-scrollbar-track': {
                  background: 'rgba(18, 20, 23, 0.05)',
                },
                '::-webkit-scrollbar-thumb': {
                  background: 'rgba(18, 20, 23, 0.05)',
                },
                '::-webkit-scrollbar-thumb:hover': {
                  background: 'rgba(18, 20, 23, 0.05)',
                },
              }),
              placeholder: styles => ({
                ...styles,
                color: 'rgba(18, 20, 23, 1)',
              }),
            }}
            components={{
              IndicatorSeparator: () => null,
            }}
          />
        </form>
         <SearchButton type="button"> Search </SearchButton> 
      </ContainerSearch>
    );
  };

  export default Filters;

