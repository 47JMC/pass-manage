"use client";

function InputForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // These get() calls now map directly to the 'name' attributes below
    const name = formData.get("nameInput") as string;
    const domain = formData.get("domainInput") as string;
    const password = formData.get("passInput") as string;

    console.log({ name, domain, password });
    // Here you can add logic to save the data to a database or state management
  };

  return (
    <form
      className="text-lg *:placeholder:font-outfit m-2 flex flex-col gap-3 p-3 rounded-xl bg-slate-900 font-sans"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="nameInput">Name: </label>
        <input
          type="text"
          id="nameInput"
          name="nameInput"
          placeholder="Enter the name here..."
          className="p-2 m-2 text-center sm:text-left"
        />
      </div>
      <div>
        <label htmlFor="domainInput">Domain: </label>
        <input
          type="url"
          id="domainInput"
          name="domainInput"
          placeholder="Example: google.com"
          className="p-2 m-2 text-center sm:text-left"
        />
      </div>
      <div>
        <label htmlFor="passInput">Password: </label>
        <input
          type="password"
          id="passInput"
          name="passInput"
          placeholder="Enter your password here..."
          className="p-2 m-2 text-center sm:text-left"
        />
      </div>
      <button
        type="submit"
        className="p-2 hover:bg-green-600 bg-emerald-700 rounded-xl transition-all text-lg"
      >
        Add
      </button>
    </form>
  );
}

export default InputForm;
