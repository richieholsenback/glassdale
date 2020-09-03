import {OfficerList} from './officers/OfficerList.js'

OfficerList();

import {CriminalList} from "./criminals/CriminalList.js"

CriminalList();

import { ConvictionSelect } from './convictions/ConvictionSelect.js'
import { getConvictions } from './convictions/ConvictionProvider.js'
import { NoteForm } from './notes/NoteForm.js';

getConvictions() 
.then(() => ConvictionSelect());

NoteForm();