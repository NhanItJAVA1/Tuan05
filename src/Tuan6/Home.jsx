import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [number, setNumber] = useState(10);
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState("");
  const navigate = useNavigate();

  // Tính tổng số chẵn tối ưu bằng useMemo
  const evenSum = useMemo(() => {
    console.log("🔄 Tính toán lại...");
    let sum = 0;
    for (let i = 2; i <= number; i += 2) {
      sum += i;
    }
    return sum;
  }, [number]);

  const addTodo = () => {
    if (todoInput.trim() !== "") {
      setTodos([...todos, todoInput]);
      setTodoInput("");
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setEditingText(todos[index]);
  };

  const saveEdit = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = editingText;
    setTodos(updatedTodos);
    setEditingIndex(null);
    setEditingText("");
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold">Trang Home</h2>

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

      <div className="mt-3">
        <h3 className="text-lg font-semibold">Todo List</h3>
        <div className="flex mt-2">
          <input
            type="text"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
            placeholder="Thêm công việc..."
            className="border p-2 rounded "
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
            <li key={index} className="flex justify-between bg-white p-2 rounded shadow mt-2">
              {editingIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                    className="border p-1 rounded flex-grow"
                  />
                  <button
                    onClick={() => saveEdit(index)}
                    className="ml-2 px-2 py-1 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
                  >
                    Lưu
                  </button>
                </>
              ) : (
                <>
                  <span>{todo}</span>
                  <div>
                    <button
                      onClick={() => startEditing(index)}
                      className="mr-2 text-yellow-500 font-bold hover:text-yellow-700"
                    >
                      Sửa
                    </button>
                    <button
                      onClick={() => removeTodo(index)}
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

      <button
        onClick={() => navigate("/Counter")}
        className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 active:scale-95 transition"
      >
        Counter
      </button>
    </div>
  );
};

export default Home;
