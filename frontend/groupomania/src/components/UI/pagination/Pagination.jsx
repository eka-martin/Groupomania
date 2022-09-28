import React from "react";
import { Button } from "@mui/material";
import { getPagesArray } from "../../../pages/pages";

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages);
    return (
<div className="page__wrapper">
       {pagesArray.map(p => 
       <Button variant="contained"
       key={p}
       onClick={() => changePage(p)}
       >{p}</Button>
       )}
       </div>
    );
};

export default Pagination;