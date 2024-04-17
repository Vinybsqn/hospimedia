"use client";
import {useMemo} from "react";
import {filterTodos} from "@/app/components/memo/utils";
import Listing from "@/app/components/memo/listing";

const FilterList = ({todos, filtre}) => {
    const visibleTodos = useMemo(() =>
        filterTodos(todos, filtre), [todos, filtre]
    );

    return (
        <div>
            <h3>Affichage de la liste</h3>
            <p>filtre : {filtre}</p>
            <Listing items={visibleTodos}/>
        </div>
    )
}

export default FilterList;