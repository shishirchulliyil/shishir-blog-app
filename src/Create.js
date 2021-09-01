import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("shishir");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);

    // post the blog to the json server
    fetch("http://localhost:3000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    })
      .then(() => {
        console.log("new blog added");
        setIsPending(false);
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleFormSubmit}>
        <label>Blog Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="shishir">shishir</option>
          <option value="aparna">aparna</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button>Posting ...</button>}
      </form>
    </div>
  );
};

export default Create;
