function MiFieldset(props) {
    const { titulo, text1, text2 } = props;
    return (
      <>
        <fieldset>
          <legend>{titulo}</legend>
          <label htmlFor="text1">{text1}</label>
          <input type="text" id={text1} />
          <label htmlFor="text1">{text2}</label>
          <input type="text" id={text2} />
        </fieldset>
      </>
    );
  }
  
  export default MiFieldset;