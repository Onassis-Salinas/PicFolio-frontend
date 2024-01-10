import { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ search, searchSection, setSearchSection }) => {
    const [searchValue, setSearchValue] = useState("");

    const changeSection = async (section) => {
        await search(searchValue, section);
        setSearchSection(section);
    };

    return (
        <div className={styles.searchInput}>
            <form onSubmit={(e) => search(searchValue, searchSection, e)} className={styles.form}>
                <input onChange={(e) => setSearchValue(e.target.value)} value={searchValue} className={styles.input} placeholder="Search something incredible!"/>
                <button>
                    <img
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z' fill='currentColor'%3E%3C/path%3E%3C/svg%3E"
                        alt=""
                    />
                </button>
            </form>

            <div className={styles.searchSelector}>
                <input type="radio" name="selection" value="projects" id="projects" checked={searchSection === "projects"} onClick={() => changeSection("projects")} />
                <label htmlFor="projects">PROJECTS</label>
                <input type="radio" name="selection" value="users" id="users" checked={searchSection === "users"} onClick={() => changeSection("users")} />
                <label htmlFor="users">USERS</label>
            </div>
        </div>
    );
};

export default SearchBar;
