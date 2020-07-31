import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCog,
  faPlay,
  faCode,
  faChevronUp,
  faChevronDown,
  faCopy
} from '@fortawesome/free-solid-svg-icons';

export function initializeIcons() {
  library.add(faCog, faPlay, faCode, faChevronUp, faChevronDown, faCopy);
}
