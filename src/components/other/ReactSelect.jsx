import Select from "react-select"







function ReactSelect({type , options , id , changeFunc}) {
    if(type == "multi"){
      return (
        <Select onChange={changeFunc} id={id} options={options} isMulti={true}  theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
              ...theme.colors,
              // primary25: 'hotpink',
              primary: '#FA8E1F',
          },
      })}
      />
      )
    }

    return (
      <Select onChange={changeFunc}  id={id} options={options}   theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
            ...theme.colors,
            // primary25: 'hotpink',
            primary: '#FA8E1F',
        },
    })}
    />
    )
}

export default ReactSelect
