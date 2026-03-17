import InputForm from "./components/InputForm";
import Title from "./components/Title";

function page() {
  return (
    <div className="text-center p-3 gap-4 m-2">
      <Title />
      <InputForm />
    </div>
  );
}

export default page;
