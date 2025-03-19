import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "https://67d0f74e825945773eb276c8.mockapi.io/TodoList";

const Home = () => {
  const [number, setNumber] = useState(10);
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error("Lỗi khi tải dữ liệu:", error));
  }, []);

  const evenSum = useMemo(() => {
    let sum = 0;
    for (let i = 2; i <= number; i += 2) {
      sum += i;
    }
    return sum;
  }, [number]);

  const addTodo = () => {
    if (todoInput.trim() !== "") {
      const newTodo = { text: todoInput };
      fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTodo),
      })
        .then((res) => res.json())
        .then((data) => setTodos([...todos, data]))
        .catch((error) => console.error("Lỗi khi thêm công việc:", error));
      setTodoInput("");
    }
  };

  const removeTodo = async (id) => {
    console.log("Đang xóa công việc với ID:", id);
    await fetch(`${API_URL}/${id}`, { method: "DELETE" })
      .then(() => setTodos(todos.filter((todo) => todo.id !== id)))
      .catch((error) => console.error("Lỗi khi xóa công việc:", error));
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setEditingText(todos[index].text);
  };

  const saveEdit = (id, index) => {
    fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: editingText }),
    })
      .then((res) => res.json())
      .then((updatedTodo) => {
        const updatedTodos = [...todos];
        updatedTodos[index] = updatedTodo;
        setTodos(updatedTodos);
        setEditingIndex(null);
        setEditingText("");
      })
      .catch((error) => console.error("Lỗi khi chỉnh sửa công việc:", error));
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold">Trang Home</h2>
      <div>
        <button
          onClick={() => navigate("/Home")}
          className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 active:scale-95 transition"
        >
          Counter
        </button></div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
        className="border p-2 rounded mt-2 w-full"
      />

      <p className="mt-4 text-lg font-semibold">
        Tổng số chẵn từ 1 đến {number}:
        <span className="text-blue-600"> {evenSum}</span>
      </p>

      <div className="mt-6">
        <h3 className="text-lg font-semibold">Todo List</h3>
        <div className="flex mt-2">
          <input
            type="text"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
            placeholder="Thêm công việc..."
            className="border p-2 rounded flex-grow"
          />
          <button
            onClick={addTodo}
            className="ml-2 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 active:scale-95 transition"
          >
            Thêm
          </button>
        </div>
        <ul className="mt-4">
          {todos.map((todo, index) => (
            <li key={todo.id} className="flex justify-between bg-white p-2 rounded shadow mt-2">
              {editingIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                    className="border p-1 rounded flex-grow"
                  />
                  <button
                    onClick={() => saveEdit(todo.id, index)}
                    className="ml-2 px-2 py-1 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
                  >
                    Lưu
                  </button>
                </>
              ) : (
                <>
                  <span>{todo.name}</span>
                  <div>
                    <button
                      onClick={() => startEditing(index)}
                      className="mr-2 text-yellow-500 font-bold hover:text-yellow-700"
                    >
                      Sửa
                    </button>
                    <button
                      onClick={() => removeTodo(todo.id)}
                      className="text-red-500 font-bold hover:text-red-700"
                    >
                      Xóa
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
