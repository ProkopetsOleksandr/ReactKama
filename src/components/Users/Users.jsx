import React from "react";
import defaultLogo from '../../assets/images/logo.svg';
import classes from './Users.module.css';
import { NavLink } from "react-router-dom";

const Users = ({ users, currentPage, pageSize, totalUsersCount, follow, unfollow, setUsersPage }) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize);

    function buildPaginator() {
        const pages = [];

        if (currentPage > 1) {
            for (let i = 4; i > 0; i--) {
                const page = currentPage - i;
                if (page <= 0) {
                    continue;
                }

                pages.push(getPaginatorPage(page));
            }
        }

        pages.push(getPaginatorPage(currentPage));

        for (let i = 1; i <= 5 || pages.length <= 9; i++) {
            const page = currentPage + i;
            if (page > pagesCount) {
                break;
            }

            pages.push(getPaginatorPage(page));
        }

        return (
            <div className={classes.paginator}>
                {pages}
            </div>
        )
    }

    function getPaginatorPage(page) {
        return (
            <div key={page} className={page === currentPage ? classes.selectedPage : ""} onClick={() => setUsersPage(page)}>
                {page}
            </div>
        );
    }

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {buildPaginator()}
            </div>
            {users.map(user => {
                return <div key={user.id} style={{ display: 'flex', gap: '50px', marginBottom: '25px' }}>
                    <div>
                        <div>
                            <NavLink to={ '/profile/' + user.id }>
                                <img src={user.photos.small ?? defaultLogo} alt="account" className={classes.userPhoto} />
                            </NavLink>
                        </div>
                        <div>
                            {!user.followed && <button onClick={() => follow(user.id)}>Follow</button>}
                            {user.followed && <button onClick={() => unfollow(user.id)}>Unfollow</button>}
                        </div>
                    </div>

                    <div>
                        <div>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </div>
                        {/* <div>
                            <div>Ukraine</div>
                            <div>Nova Kakhovka</div>
                        </div> */}
                    </div>
                </div>
            })}
        </div>
    );
}

export default Users;