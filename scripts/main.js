import {OfficerList} from './officers/OfficerList.js'
import {CriminalList} from "./criminals/CriminalList.js"
import { ConvictionSelect } from './convictions/ConvictionSelect.js'
import { getConvictions } from './convictions/ConvictionProvider.js'
import { NoteForm } from './notes/NoteForm.js';
import { NoteList } from './notes/NoteList.js';
// import { saveNote } from './notes/NoteProvider.js';
import { OfficerSelect } from './officers/OfficerSelect.js';
import { getWitness } from './witness/WitnessProvider.js';
import { witnessList } from './witness/WitnessList.js';

OfficerList();
CriminalList();
getConvictions() 
.then(() => ConvictionSelect());
NoteForm();
NoteList();
OfficerSelect()
// saveNote();
getWitness()
witnessList();