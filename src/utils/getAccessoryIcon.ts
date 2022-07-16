import accelerationSvg from '../assets/acceleration.svg';
import speedSvg from '../assets/speed.svg';
import forceSvg from '../assets/force.svg';
import gasolineSvg from '../assets/gasoline.svg';
import hybridSvg from '../assets/hybrid.svg';
import energySvg from '../assets/energy.svg';
import exchangeSvg from '../assets/exchange.svg';
import peopleSvg from '../assets/people.svg';
import carSvg from '../assets/car.svg';


export function getAccessoryIcon(type: string){
    switch (type) {
        case 'speed':
            return speedSvg;
        case 'accelerationSvg':
            return accelerationSvg;
        case 'turning_diameter':
                return forceSvg;
        case 'gasoline_motor':
            return gasolineSvg;
        case 'hybrid_motor':
            return hybridSvg;
        case 'electric_motor':
            return energySvg;
        case 'exchange':
            return exchangeSvg;
            
        case 'seats':
            return peopleSvg;

        default:
            return carSvg;
    }
}




