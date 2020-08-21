import React, {useState} from 'react';
import user from './Users.module.css';

let Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    
    let portionCount = Math.ceil(pagesCount / props.portionSize); //количество секций
    let [portionNumber, setPortionNumber] = useState(1);//локальный state через hook
    let leftPortionPageNumber = (portionNumber -1) * props.portionSize + 1;//левая граница секции
    let rightPortionPageNumber = portionNumber * props.portionSize;//правая граница секции

    return (
        <div className={user.page}>
            { portionNumber > 1 &&
                <button onClick={() => {setPortionNumber(portionNumber - 1) }}>Prev</button> }

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                return <span className={props.currentPage === p ? user.selectedPage : null}
                   onClick={() => { props.onPageChanged(p) }} key={p + Math.random()}>{p}</span>
            })}

            { portionCount > portionNumber && 
                <button onClick={() => {setPortionNumber(portionNumber + 1)}}>Next</button> }
        </div>
    )
}

export default Paginator;