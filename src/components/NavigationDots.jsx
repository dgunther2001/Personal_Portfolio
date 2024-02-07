import React from 'react';

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {['home', 'about', 'skills', 'edu/exp', 'prj/pub'].map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        style= {active === item ? { backgroundColor: '#344E41' } : {}}
      />
    ))}
  </div>
);

export default NavigationDots;