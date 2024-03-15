import styles from '../../styles/User.module.css';

const UserPage = ( props) => {
    // console.log("props", props);
    return (
        <div className={styles.pageContainer}>
            <h1> Users (SSR - Server Side Rendering)</h1>
            <div className={styles.parentDiv}>
            {props.data.users.map((user) => (
                <div key = {user.id} className={styles.userDiv}>
                 {user.firstName}
                </div>
            ))}
            </div>
        </div>
    );
};

export const getServerSideProps = async () => {
    const data = await (await fetch("https://dummyjson.com/users")).json();
    return {
        props: {
            data
        }
    };
};

export default UserPage;