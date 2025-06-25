import React from 'react';

const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 230 98"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        {/* Gear */}
        <path
          d="M49 0C46.2386 0 44 2.23858 44 5V14.3397C41.9371 14.8018 40.0163 15.5407 38.2981 16.5176L30.1651 13.1756C27.608 11.9723 24.5919 12.9154 23.3887 15.4725L16.059 29.8122C14.8557 32.3693 15.7988 35.3854 18.3559 36.5886L26.4889 40.1306C26.0268 42.1936 25.7879 44.3397 25.7879 46.5C25.7879 48.6603 26.0268 50.8064 26.4889 52.8694L18.3559 56.4114C15.7988 57.6146 14.8557 60.6307 16.059 63.1878L23.3887 77.5275C24.5919 80.0846 27.608 81.0277 30.1651 79.8244L38.2981 76.4824C40.0163 77.4593 41.9371 78.1982 44 78.6603V88C44 90.7614 46.2386 93 49 93H51C53.7614 93 56 90.7614 56 88V78.6603C58.0629 78.1982 59.9837 77.4593 61.7019 76.4824L69.8349 79.8244C72.392 81.0277 75.4081 80.0846 76.6113 77.5275L83.941 63.1878C85.1443 60.6307 84.2012 57.6146 81.6441 56.4114L73.5111 52.8694C73.9732 50.8064 74.2121 48.6603 74.2121 46.5C74.2121 44.3397 73.9732 42.1936 73.5111 40.1306L81.6441 36.5886C84.2012 35.3854 85.1443 32.3693 83.941 29.8122L76.6113 15.4725C75.4081 12.9154 72.392 11.9723 69.8349 13.1756L61.7019 16.5176C59.9837 15.5407 58.0629 14.8018 56 14.3397V5C56 2.23858 53.7614 0 51 0H49Z"
          className="fill-primary"
        />
        {/* Y */}
        <path
          d="M42.4286 28H57.5714L50 48.2143L42.4286 28ZM40 55.7143H60L50 71L40 55.7143Z"
          className="fill-primary-foreground"
        />
      </g>
      <g>
        {/* F */}
        <path d="M110 21H180V36H110V21Z" className="fill-accent" />
        <path d="M110 46H160V61H110V46Z" className="fill-accent" />
        <path d="M110 21V81H125V21H110Z" className="fill-accent" />
        {/* Gauge */}
        <path
          d="M174 81C174 72.7157 167.284 66 159 66C150.716 66 144 72.7157 144 81C144 89.2843 150.716 96 159 96C167.284 96 174 89.2843 174 81Z"
          className="stroke-primary"
          strokeWidth="4"
        />
        <path d="M159 70L168 81" className="stroke-primary" strokeWidth="4" />
        <path d="M125 81H144" className="stroke-primary" strokeWidth="4" />
        <path d="M174 81H195" className="stroke-primary" strokeWidth="4" />
        <circle
          cx="202"
          cy="81"
          r="5"
          className="fill-accent stroke-primary"
          strokeWidth="2"
        />
        <circle
          cx="218"
          cy="81"
          r="5"
          className="fill-accent stroke-primary"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
};

export default Logo;
