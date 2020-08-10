import React from 'react';
import user from './Users.module.css';

let Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className={user.page}>
            {pages.map(p => {
                return <span className={props.currentPage === p ? user.selectedPage : null}
                    onClick={() => { props.onPageChanged(p) }} key={p + Math.random()}>{p}</span>
            })}
        </div>
    )
}

export default Paginator;