import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Dashboard() {

  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const res = await fetch("http://localhost:5000/api/testusers");

    return res.json().then((val) => {
      setUsers(val);
    });
  };

  const onCreateUser = async () => {
    const data = {
      email
    };

    const res = await fetch("http://localhost:5000/api/testusers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });

    return res.json().then(() => {
      alert("Создан");
      setEmail("");
      getUsers();
    });
  };

  const onDelete = async (id: any) => {
    const data = {
      id
    };

    const res = await fetch("http://localhost:5000/api/testusers", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });

    return res.json().then(() => {
      alert("Удален");
      setEmail("");
      getUsers();
    });
  };

  return (
    <div>
      <div>Hello 2</div>
      <Link to="/auth">
        1234
      </Link>
      <input
        type="text"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <div onClick={() => onCreateUser()}>
        Create
      </div>
      <div style={{ paddingTop: "20px" }}>
        {users.map((item: any, index) => (
          <div key={item.id}>
            {index + 1} {item.email} --------------- <span onClick={() => onDelete(item.id)}>Удалить</span>
          </div>
        ))}
      </div>
    </div>
  );
}
