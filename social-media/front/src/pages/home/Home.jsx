import TopBar from "../../components/topbar/TopBar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightbar/RightBar";
import './home.css';

export default function Home() {
    return (
        <>
            <TopBar />
            <div className="home-container">
                <Sidebar />
                <Feed />
                <RightBar  />
            </div>
        </>
    )
}
