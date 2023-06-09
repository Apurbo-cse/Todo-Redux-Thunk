import { useState } from "react";
import tickImage from "../assets/images/double-tick.png";
import noteImage from "../assets/images/notes.png";
import plusImage from "../assets/images/plus.png";
import { useDispatch } from "react-redux";
import { clear, completed } from "../redux/todos/actions";
import addTodo from "../redux/todos/thunk/addTodo";

export default function Header() {
    const dispatch = useDispatch();
    const [ input, setInput] = useState('');

    const handelInput = (e) => {
        setInput(e.target.value);
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput("");
    }

    const completeAll = () =>{
        dispatch(completed());
    }

    const clearComplete = () =>{
        dispatch(clear());
    }


    return (
        <>
            <form onSubmit={handelSubmit} className="flex items-center bg-gray-100 px-4 py-4 rounded-md">
                <img src={noteImage} className="w-6 h-6" alt="Add todo" />
                <input
                    type="text"
                    value={input}
                    onChange={handelInput}
                    placeholder="Type your todo"
                    className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                />
                <button
                    type="submit"
                    className={`appearance-none w-8 h-8 bg-[url('${plusImage}')] bg-no-repeat bg-contain`}
                ></button>
            </form>

            <ul className="flex justify-between my-4 text-xs text-gray-500">
                <li onClick={completeAll} className="flex space-x-1 cursor-pointer">
                    <img className="w-4 h-4" src={tickImage} alt="Complete" />
                    <span>Complete All Tasks</span>
                </li>
                <li onClick={clearComplete} className="cursor-pointer">Clear completed</li>
            </ul>
        </>
    );
}
