//fi application kbira w s7i7a , kol 7aja bch na3touha reducer wa7adha,,, na3mal dossier nsamih reducers
// w na3mal fih des fichers mathalan reducer lel user , reducer lel les erreurs, reducer lel les produits,, w ba3d ncombinihom 
//w na3mal fichier a5er m3ahom w howa lfichier principale nsamih mathalan rootReducer n7ot fih lmethode combineReducers , n7el lmethode hethika w n7ot fehea les reducers lkol
/// w lcomponent hetha exemple
/// n'exporti heki rootReducer wmen ba3d fi store n3ayatelha hia
import reducer from "./reducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({ reducer });

export default rootReducer;