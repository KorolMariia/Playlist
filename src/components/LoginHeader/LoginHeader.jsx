import { useContext } from 'react';
import { SongContextComponent } from "../../context/Context";
import ButtonLogOut from '../../components/ButtonLogOut/ButtonLogOut';
import './LoginHeader.scss';


function LoginHeader() {
    const [{ name },] = useContext(SongContextComponent);

    return (
        <div className="login-header">
            <div className="name-wrapper">
                <h3>Hello, {name} </h3>
            </div>
            <ButtonLogOut />
        </div>
    );
}

export default LoginHeader;
