function InputForm() {
  return (
    <form className="text-lg *:placeholder:font-outfit m-2 flex flex-col gap-3 p-3 rounded-xl bg-slate-900 font-sans">
      <div className="">
        <label htmlFor="nameInput">Name: </label>
        <input
          type="text"
          id="nameInput"
          placeholder="Enter the name here..."
          className="p-2 m-2 text-center sm:text-left"
        />
      </div>
      <div>
        <label htmlFor="domainInput">Domain: </label>
        <input
          type="text"
          id="domainInput"
          placeholder="Example: google.com"
          className="p-2 m-2 text-center sm:text-left"
        />
      </div>
      <div>
        <label htmlFor="passInput">Password: </label>
        <input
          type="text"
          id="passInput"
          className="p-2 m-2 text-center sm:text-left"
        />
      </div>
    </form>
  );
}

export default InputForm;
