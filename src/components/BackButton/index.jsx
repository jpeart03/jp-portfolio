import "./styles.scss";
import chevron from "./chev.png";

const BackButton = () => {
    return (
        <div className="back">
            <a href="/">
                <img src={chevron} />
                <span>Back to projects</span>
            </a>
        </div>
    );
};

export default BackButton;
