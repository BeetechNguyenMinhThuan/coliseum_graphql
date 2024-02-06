import LabelCommon from "@/components/label/LabelCommon.tsx";
import InputCommon from "@/components/input/inputCommon.tsx";
import { useForm } from "react-hook-form";
import ButtonCommon from "@/components/button/ButtonCommon.tsx";
import CheckboxCommon from "@/components/checkbox/CheckboxCommon.tsx";
import { useState } from "react";

function Test4() {
  const { control } = useForm();
  const [acceptTerm, setAcceptTerm] = useState(false);
  return (
    <div>
      {/*<LabelCommon htmlFor="first_name">FirstName</LabelCommon>*/}
      {/*<InputCommon control={control} name="first_name" type="text" />*/}
      {/*<ButtonCommon type="button">Submit</ButtonCommon>*/}
      {/*<CheckboxCommon*/}
      {/*  name="accept_term"*/}
      {/*  checked={acceptTerm}*/}
      {/*  onClick={() => setAcceptTerm(!acceptTerm)}*/}
      {/*>*/}
      {/*  Hello Sir*/}
      {/*</CheckboxCommon>*/}
      Hello Sir
    </div>
  );
}

export default Test4;
