const GrowthChart = ({ data }) => {
  // Different curve paths for each crypto
  const curves = {
    btc: `M 0,100 
         Q 50,98 100,90 
         Q 150,80 200,40 
         Q 250,10 300,0`, // Steepest growth, early adoption
    eth: `M 0,100 
         Q 75,100 150,70 
         Q 225,40 300,20`, // Steady growth after initial period
    sol: `M 0,100 
         Q 100,100 200,50 
         Q 250,25 300,10`  // Rapid recent growth
  };

  const gradientId = `gradient-${data.type}`;
  const curve = curves[data.type] || curves.btc;

  return (
    <div className={`chart-container ${data.type}`}>
      <svg viewBox="0 0 300 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'var(--pink-500)', stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: 'var(--pink-500)', stopOpacity: 0.1 }} />
          </linearGradient>
        </defs>
        {/* Growth curve */}
        <path
          d={curve}
          fill="none"
          stroke="var(--pink-500)"
          strokeWidth="2"
        />
        {/* Fill area under the curve */}
        <path
          d={`${curve} L 300,100 L 0,100`}
          fill={`url(#${gradientId})`}
        />
      </svg>
    </div>
  );
};

export default GrowthChart;
