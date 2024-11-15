import { useUser } from '../lib/context/user';
import Gantt from '../components/Gantt';

function Home() {
    const user = useUser();

    return (
        <div className="home-page">
            {user?.current
                ? (
                    <Gantt />
                )
                :
                user?.isLoading ?
                    (
                        <div className="loader-container">
                            <div className="loader"></div>
                        </div>
                    ) :
                    (
                        <p>
                            Please <a href="/login">login or register</a> to view the Bryntum Gantt chart
                        </p>
                    )
            }
        </div>
    );
}

export default Home;