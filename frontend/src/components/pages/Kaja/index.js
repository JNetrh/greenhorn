import React from 'react';

import { Kaja } from './Kaja';

import { compose } from 'recompose';

const KajaPage = props => <Kaja {...props} />;

//export default KajaPage;
export default compose(KajaPage);
