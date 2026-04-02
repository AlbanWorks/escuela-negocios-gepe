import { useState } from 'react';
import styles from './WPForm.module.css';

const WPForm = ({ whatsappNumber, subject }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    empresa: '',
    cargo: '',
    consentimiento: true
  });

  const cargos = [
    { label: 'Director / CEO', value: 'director' },
    { label: 'Gerente', value: 'gerente' },
    { label: 'Operativo', value: 'operativo' },
    { label: 'Consultor', value: 'consultor' },
    { label: 'Otro', value: 'otro' }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Formateamos el mensaje para WhatsApp
    const mensaje = `Hola! Me gustaría inscribirme a ${subject}.%0A%0A` +
      `*Nombre:* ${formData.nombre} ${formData.apellido}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Empresa:* ${formData.empresa}%0A` +
      `*Cargo:* ${formData.cargo}`;

    // Limpiar el número (quitar símbolos si los hay) y abrir link
    const cleanNumber = whatsappNumber.replace(/\D/g, '');
    window.open(`https://wa.me/${cleanNumber}?text=${mensaje}`, '_blank');
  };

  return (
    <div className={styles.formCard}>
      <h2 className={styles.header}>¡Inscríbete ahora!</h2>
      
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <div className={styles.group}>
            <label>Nombre:</label>
            <input 
              type="text" name="nombre" placeholder="Nombre" 
              required onChange={handleChange} 
            />
          </div>
          <div className={styles.group}>
            <label>Apellido:</label>
            <input 
              type="text" name="apellido" placeholder="Apellido" 
              required onChange={handleChange} 
            />
          </div>
        </div>

        <div className={styles.group}>
          <label>E-mail:</label>
          <input 
            type="email" name="email" placeholder="email@site.com" 
            required onChange={handleChange} 
          />
        </div>

        <div className={styles.row}>
          <div className={styles.group}>
            <label>Empresa:</label>
            <input 
              type="text" name="empresa" placeholder="Empresa" 
              required onChange={handleChange} 
            />
          </div>
          <div className={styles.group}>
            <label>Cargo:</label>
            <select name="cargo" required onChange={handleChange} defaultValue="">
              <option value="" disabled>Seleccionar Cargo</option>
              {cargos.map(c => (
                <option key={c.value} value={c.label}>{c.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.checkboxGroup}>
          <input 
            type="checkbox" name="consentimiento" id="consent"
            checked={formData.consentimiento} onChange={handleChange} 
          />
          <label htmlFor="consent">
            Consiento el uso de mis datos para los fines indicados en la <span>política de privacidad</span>.
          </label>
        </div>

        <button type="submit" className={styles.submitBtn}>
          INSCRIBIRME AHORA
        </button>
      </form>
    </div>
  );
};

export default WPForm;