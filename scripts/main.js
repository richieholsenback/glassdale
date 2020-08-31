import {OfficerList} from './officers/OfficerList.js'

OfficerList();

import {CriminalList} from "./criminals/CriminalList.js"

CriminalList();

import { ConvictionSelect } from './convictions/ConvictionSelect.js'
import { getConvictions } from './convictions/ConvictionProvider.js'

getConvictions() 
.then(() => ConvictionSelect());