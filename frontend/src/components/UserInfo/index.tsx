import { InfoApi } from '../../types/infoapi';
import './styles.css';

type Props = {
    info: InfoApi;
}

const UserInfo = ({ info }: Props) => {
    return (
        <div className="userinfo-container">
            <div className="userinfo-img-container">
                <img src={info?.avatar_url} alt="avatar url" />
            </div>
            <div className="userinfo-info-container">
                <label>Informações</label>
                <h3><span style={{fontWeight:'bold'}}>Nome:</span> {info?.name} </h3>
                <h5><span style={{fontWeight:'bold'}}>URL:</span> {info?.url}</h5>
            </div>
        </div>
    );
};

export default UserInfo;
