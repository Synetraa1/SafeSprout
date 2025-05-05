import React, { useState } from 'react';

const WateringLegend = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLegend = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="watering-legend">
      <button 
        className="legend-toggle" 
        onClick={toggleLegend}
      >
        {isOpen ? 'Hide Watering Guide' : 'Show Watering Guide'}
      </button>
      
      {isOpen && (
        <div className="legend-content">
          <h3>Plant Watering Guide</h3>
          <div className="legend-item">
            <h4>Frequent</h4>
            <p>Water when the top 2 cm (1 inch) of soil feels dry.</p>
            <p>Typically every 1-3 days, depending on humidity and temperature.</p>
            <p>Examples: Ferns, peace lilies, calatheas</p>
          </div>
          
          <div className="legend-item">
            <h4>Average</h4>
            <p>Water when the top 5-7 (2-3 inches) cm of soil are dry.</p>
            <p>Typically every 7-10 days for most indoor conditions.</p>
            <p>Examples: Philodendrons, pothos, monstera</p>
          </div>
          
          <div className="legend-item">
            <h4>Minimum</h4>
            <p>Allow soil to dry completely between waterings.</p>
            <p>Typically every 2-4 weeks, sometimes longer in winter.</p>
            <p>Examples: Succulents, cacti, snake plants</p>
          </div>
          
          <div className="legend-item">
            <h4>None</h4>
            <p>Very drought tolerant, requiring little to no supplemental watering.</p>
            <p>Typically only water when plant shows signs of thirst (wrinkling, softening).</p>
            <p>Examples: Some mature cacti, certain desert plants</p>
          </div>
          
          <div className="watering-tips">
            <h4>Tips for Proper Watering</h4>
            <ul>
              <li>Always check soil moisture before watering</li>
              <li>Water less frequently in winter when plant growth slows</li>
              <li>Increase frequency during hot, dry periods</li>
              <li>Water thoroughly until it drains from the bottom</li>
              <li>Empty drainage saucers to prevent root rot</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default WateringLegend;