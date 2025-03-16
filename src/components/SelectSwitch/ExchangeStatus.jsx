import React from 'react';

const ExchangeStatus = () => (
    <svg
        fill="#000000"
        height="100px"
        width="100px"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        preserveAspectRatio="xMidYMid meet"  // centers the viewBox content within the SVG
    >
        <defs id="defs4">
            <linearGradient
                id="hottocold"
                x1="0.00036600605"
                y1="128"
                x2="512"
                y2="128"
                gradientUnits="userSpaceOnUse"
            >
                {/* Reusing the stops from linearGradient7 */}
                <stop
                    style={{ stopColor: "#1E90FF", stopOpacity: 0.49803922 }}
                    offset="0"
                />
                <stop
                    style={{ stopColor: "#1E90FF", stopOpacity: 0.74901962 }}
                    offset="0.2"
                />
                <stop
                    style={{ stopColor: "#ef000e", stopOpacity: 1 }}
                    offset="1"
                />
            </linearGradient>
            <linearGradient
                id="ColdToHot"
                x1="0"
                y1="384"
                x2="511.99867"
                y2="384"
                gradientUnits="userSpaceOnUse"
            >
                {/* Reusing the stops from linearGradient10 */}
                <stop
                    style={{ stopColor: "#1E90FF", stopOpacity: 0.49803922 }}
                    offset="0"
                />
                <stop
                    style={{ stopColor: "#1e90ff", stopOpacity: 0.74901962 }}
                    offset="0.2"
                />
                <stop
                    style={{ stopColor: "#ef000e", stopOpacity: 1 }}
                    offset="1"
                />
            </linearGradient>
        </defs>

        {/* The first graphic group */}

        <g id="g1" style={{ fill: "url(#hottocold)", fillOpacity: 1 }}>
            <path
                d="M486.4,102.4H204.8V51.2c0-10.351-6.238-19.686-15.804-23.654
         c-3.166-1.306-6.494-1.946-9.788-1.946c-6.665,0-13.21,2.603-18.108,7.501l-153.6,153.6
         c-7.322,7.322-9.515,18.33-5.547,27.895C5.914,224.162,15.249,230.4,25.6,230.4h460.8
         c14.14,0,25.6-11.46,25.6-25.6V128C512,113.86,500.54,102.4,486.4,102.4z M486.4,204.8H25.6L179.2,51.2
         V128h307.2V204.8z"
                id="path1"
                style={{ fill: "url(#hottocold)", fillOpacity: 1 }}
            />
        </g>


        {/* The second graphic group */}

        <g id="g3" style={{ fill: "url(#ColdToHot)" }}>
            <path
                d="M510.046,297.404c-3.959-9.566-13.295-15.804-23.646-15.804H25.6
         C11.46,281.6,0,293.06,0,307.2V384c0,14.14,11.46,25.6,25.6,25.6h281.6v51.2
         c0,10.351,6.238,19.686,15.804,23.654c3.166,1.306,6.494,1.946,9.788,1.946
         c6.664,0,13.21-2.603,18.108-7.501l153.6-153.6C511.821,317.978,514.014,306.97,510.046,297.404z
         M332.8,460.8V384H25.6v-76.8h460.8L332.8,460.8z"
                id="path2"
                style={{ fill: "url(#ColdToHot)" }}
            />
        </g>

    </svg>
);

export default ExchangeStatus;
