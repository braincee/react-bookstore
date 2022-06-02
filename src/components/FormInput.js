import React from 'react';

function FormInput() {
  return (
    <form>
      <input type="text" name="title" />
      <input type="text" name="author" />
      <button type="submit">SUBMIT</button>
    </form>
  );
}

export default FormInput;
