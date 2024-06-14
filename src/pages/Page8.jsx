import React from 'react';
import '../App.css'; // Ensure the CSS file is imported

export default function Page8() {
  return (
    <div className="page page8">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3677.5825020519337!2d70.86208507465184!3d22.81792892393539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDQ5JzA0LjUiTiA3MMKwNTEnNTIuOCJF!5e0!3m2!1sen!2sin!4v1718347395892!5m2!1sen!2sin"
        className="map"
        width={'100%'}
        height={'100%'}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
