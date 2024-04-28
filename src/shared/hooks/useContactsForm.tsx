import { ChangeEvent, useState } from "react";

const useContactsForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    callback: (arg0: string) => void,
  ) => {
    callback(e.target.value);
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  return {
    setEmail,
    setMessage,
    setName,
    name,
    email,
    message,
    onChange,
    resetForm,
  };
};

export { useContactsForm };
