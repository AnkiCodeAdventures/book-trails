import classes from "./styles.module.css";

function NavBar() {
  return (
    <div className={classes.navbar}>
      <h2 className={classes.title}>BOOK TRAIL</h2>
      <svg
        color="#fc8200"
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-route"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
        <path d="M19 7a2 2 0 1 0 0 -4a2 2 0 0 0 0 4z" />
        <path d="M11 19h5.5a3.5 3.5 0 0 0 0 -7h-8a3.5 3.5 0 0 1 0 -7h4.5" />
      </svg>
    </div>
  );
}

export default NavBar;
