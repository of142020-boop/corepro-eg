import React from 'react';
import ServiceAreaPage from '../ServiceAreaPage';
import areas from '../../data/service-areas.json';

export default function Page() {
  return <ServiceAreaPage area={areas.october} />;
}
