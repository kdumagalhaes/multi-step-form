import { PlansNames } from '../constants/plans';
import IconAdvanced from '../assets/icons/icon-advanced.svg';
import IconArcade from '../assets/icons/icon-arcade.svg';
import IconPro from '../assets/icons/icon-pro.svg';
const getIcon = (iconName: PlansNames) => {
  const iconsMap = {
    Advanced: IconAdvanced,
    Arcade: IconArcade,
    Pro: IconPro,
  };

  return iconsMap[iconName];
};

export default getIcon;
