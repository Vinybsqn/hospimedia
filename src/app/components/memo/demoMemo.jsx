"use client";
import {useState} from "react";
import FilterList from "@/app/components/memo/filterList";
import {createTodos} from "@/app/components/memo/utils";

const todos = createTodos();

const DemoMemo = () => {

    const [filtre, setFiltre] = useState('all');

    return (
        <div>
            <div suppressHydrationWarning={true}>
            <h2> Use Memo </h2>
            <div>
                <button onClick={() => setFiltre('all')}>All</button>
                <button onClick={() => setFiltre('terminé')}>terminé</button>
                <button onClick={() => setFiltre('en cours')}>en cours</button>
                <FilterList
                    todos={todos}
                    filtre={filtre}
                />

            </div>
            </div>
        </div>
    )
}

export default DemoMemo;