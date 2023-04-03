import { createStore } from 'redux';
import reducer from './reducer';

// ReduxToolkit으로
// ==============================|| REDUX - MAIN STORE ||============================== //

const store = createStore(reducer);
const persister = 'Free';

export { store, persister };
