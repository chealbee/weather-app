import { FC } from "react";
import Button from "./components/UI/butoon/Button";
import Input from "./components/UI/input/Input";

const App: FC = () => {
   return (
      <>
         <Button text="serch" type="search" />
         <Input placeholder="input" />
      </>
   );
};

export default App;
