
import './CustomBalloonLayout.scss';
import { ReactComponent as MapCity } from '../../../assets/icons/cityIcon.svg';
const CustomBalloonLayout = () => {
    return (
        <div className='balloon-layout'>
            <MapCity className='balloon-icon'/>
        </div>
    );
};

export default CustomBalloonLayout;