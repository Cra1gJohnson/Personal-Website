import React from 'react';

const ResumeRender = () => {
  return (
    <div>
      <iframe 
          src="/Christian_Resume.pdf"
          style={{ width: '1900px', height: '900px' }}
          frameBorder="0"
          title="Resume"
          allowFullScreen
      ></iframe>
    </div>
  );
};

export default ResumeRender;