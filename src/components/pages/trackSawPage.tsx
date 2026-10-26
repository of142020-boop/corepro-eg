import React from 'react';
import ApplicationServicePage from '../ApplicationServicePage';
import applications from '../../data/service-applications.json';

export default function Page() {
  return <ApplicationServicePage service={applications.trackSaw} />;
}
