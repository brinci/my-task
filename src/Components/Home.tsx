import { useState } from "react";

export function Home() {
  const [user, setUser] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    course: "",
  });

  const handleOnclick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUser("");
  };

  return (
    <>
      <div>
        <h1 className="formss">hiiiiiiiiiiiii</h1>
        <form onSubmit={handleOnclick}>
          <input
            type="name"
            placeholder="Enter your name"
            // value={form}
            onChange={(e) => setUser(e.target.value)}
          />
           <input
            type="email"
            placeholder="Enter your email"
            // value={form}
            onChange={(e) => setUser(e.target.value)}
          />

            <input
            type="course"
            placeholder="Enter your course"
            // value={form}
            onChange={(e) => setUser(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
} 