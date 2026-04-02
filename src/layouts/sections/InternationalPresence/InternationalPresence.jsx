import React, { useState } from 'react';
import styles from './InternationalPresence.module.css';
import LocationPin from '@/components/svgIcons/location/LocationPin';

const DATA_SEDES = {
  argentina: {
    label: 'Argentina',
    sedes: [
      { ciudad: 'Buenos Aires', tel: '+54 11 1234-5678' },
	  { ciudad: 'Mar del Plata', tel: '+54 11 1234-5678' },
      { ciudad: 'Córdoba', tel: '+54 351 987-6543' },
      { ciudad: 'Rosario', tel: '+54 341 555-0192' },
      { ciudad: 'Santiago del Estero', tel: '+54 261 444-2211' },
	  { ciudad: 'Tucumán', tel: '+54 261 444-2211' },
    ]
  },
  espana: {
    label: 'España',
    sedes: [
      { ciudad: 'Madrid', tel: '+34 912 345 678' },
      { ciudad: 'Barcelona', tel: '+34 934 567 890' },
    ]
  }
};

const InternationalPresence = () => {
  const [activeCountry, setActiveCountry] = useState('argentina');

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.mapWrapper}>
			<div className={styles.header}>
				<h2 className={styles.title}>Presencia Internacional</h2>
				<p className={styles.subtitle}>Tenemos sedes en América y Europa para brindar soluciones globales.</p>
			</div>
            <img 
              src="/images/mundo_def.webp" 
              alt="Mapa de presencia internacional" 
              className={styles.mapImage}
            />
			<div className={styles.tabs}>
				{Object.keys(DATA_SEDES).map((key) => (
					<button
					key={key}
					className={`${styles.tabButton} ${activeCountry === key ? styles.active : ''}`}
					onClick={() => setActiveCountry(key)}
					>
					{DATA_SEDES[key].label}
					</button>
				))}
        	</div>
        </div>
        {/* Lista de Sedes */}
        <div className={styles.sedesGrid}>
          {DATA_SEDES[activeCountry].sedes.map((sede, index) => (
            <div key={index} className={styles.sedeCard}>
              <span className={styles.ciudad}>{sede.ciudad}</span>
              <LocationPin stroke={"var(--gepe_blue0)"} size={28}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternationalPresence;