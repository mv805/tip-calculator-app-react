import { useRef, useState } from 'react';

const LightSwitch = () => {

    let checkbox = <input type="checkbox" id="checkbox" />;

    const [lightSwitchOn, setLightSwitchOn] = useState(false);

    return (
        <div className="theme-switch-wrapper">
            <label className="theme-switch" htmlFor="checkbox">
                { checkbox }
                <div className="slider round" onClick={ () => {
                    
                    if (lightSwitchOn) {
                        document.documentElement.setAttribute('data-theme', 'dark'); 
                        setLightSwitchOn(false);
                    } else {
                        document.documentElement.setAttribute('data-theme', 'light');
                        setLightSwitchOn(true);
                    }
                } }></div>
            </label>
        </div>
    );
};

export default LightSwitch;
