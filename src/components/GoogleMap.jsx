import React from 'react';

const GoogleMap = () => {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.210421251613!2d12.489990515442173!3d41.89021017922119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61b6532013ad%3A0x28f1c82e9085030c!2sColosseum!5e0!3m2!1sen!2sit!4v1668520336183!5m2!1sen!2sit"
        width="100%"
        height="450"
        style={{ border: 0, borderRadius: '12px' }} // Додаємо заокруглені кути
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Air Tour Location Map"
      />
    </div>
  );
};

export default GoogleMap;
