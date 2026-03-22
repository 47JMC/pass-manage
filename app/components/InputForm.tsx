"use client";

type Props = {
  action: (formData: FormData) => Promise<void>;
};

function InputForm({ action }: Props) {
  return (
    <form
      className="text-lg *:placeholder:font-outfit m-2 flex flex-col gap-3 p-3 rounded-xl bg-slate-900 font-sans"
      // 4. We use the 'action' attribute instead of 'onSubmit'
      action={action}
    >
      <div>
        <label htmlFor="usernameInput">Username: </label>
        <input
          type="text"
          id="usernameInput"
          name="usernameInput"
          placeholder="Enter your username here..."
          className="p-2 m-2 text-center lg:text-left"
        />
      </div>
      <div>
        <label htmlFor="domainInput">Domain: </label>
        <input
          type="url"
          id="domainInput"
          name="domainInput"
          placeholder="Example: google.com"
          className="p-2 m-2 text-center lg:text-left"
        />
      </div>
      <div>
        <label htmlFor="passInput">Password: </label>
        <input
          type="password"
          id="passInput"
          name="passInput"
          placeholder="Enter your password here..."
          className="p-2 m-2 text-center lg:text-left"
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
