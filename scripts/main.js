import {OfficerList} from './officers/OfficerList.js'
import {CriminalList} from "./criminals/CriminalList.js"
import { ConvictionSelect } from './convictions/ConvictionSelect.js'
import { OfficerSelect } from './officers/OfficerSelect.js';
import { NoteForm } from './notes/NoteForm.js';
import { NoteList } from './notes/NoteList.js';
import { witnessList } from './witness/WitnessList.js';


CriminalList();
ConvictionSelect();
OfficerSelect()
OfficerList();
NoteForm();
NoteList();
witnessList();