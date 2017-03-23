import React from 'react';
import ReactDI from 'react-di';
import LookupService from 'udev-react/services/LookupService';
import RecordService from 'udev-react/services/RecordService';

let dependencies = {
  lookupService: new LookupService(),
  recordService: new RecordService()
}

let resolver = new ReactDI(dependencies);

export default resolver;
