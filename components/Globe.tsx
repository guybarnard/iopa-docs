import createGlobe from "cobe";
import { useEffect, useRef, useState } from "react";
import { useTheme } from 'next-themes'

// Cloudflare POPS (64 random, maximum number of shaders)
const POPS = [[-38.4138,-68.7373],
[-34.8222,-58.5358],
[-29.94593,-51.14441],
[-26.92386,-49.06626],
[-25.23972,-57.51917],
[-22.81,-43.25056],
[-20.4302,57.6836],
[-16.70496,-49.24089],
[-6.87811,39.2026],
[-2.15742,-79.8836],
[1.35019,103.994],
[4.9442,114.928],
[7.18076,79.8841],
[11.54626,43.15921],
[13.07674,77.59765],
[14.5833,-90.5275],
[18.18111,121.745],
[19.9349,110.459],
[21.26667,110.46667],
[22.6547,88.4467],
[23.84335,90.39778],
[25.2528,55.3644],
[26.17583,-98.23861],
[27.6966,85.3591],
[28.865,115.9],
[29.34472,120.03222],
[30.5785,103.947],
[31.5216,74.4036],
[32.0114,34.8867],
[33.2625,44.2346],
[33.8209,35.4884],
[34.5197,113.841],
[35.79972,107.60278],
[36.5275,102.043],
[37.3626,-121.929],
[38.6954,-121.591],
[39.2976,-94.7139],
[39.8719,-75.2411],
[40.47193,-3.56264],
[40.8514,111.824],
[41.6692,44.9547],
[42.69669,23.41144],
[44.57111,26.085],
[45.5887,-122.598],
[47.42976,19.26109],
[48.3538,11.7861],
[50.03333,8.57056],
[51.2895,6.76678],
[52.38,13.5225],
[54.6341,25.2858],
[56.7431,60.8027],
[59.8003,30.2625],
[-37.6733,144.843],
[-33.9648,18.6017],
[-29.61444,31.11972],
[-26.7884,-50.9398],
[-23.53613,-47.46454],
[-22.01639,166.21611],
[-19.62444,-43.97194],
[-15.86917,-47.92083],
[-6.12557,106.656],
[51.8747,-0.36833],
[21.32062,-157.92423],
[36.1245,-86.6782],
]

// https://github.com/shuding/cobe

export default function Globe() {
  const canvasRef = useRef();
  const { theme, systemTheme } = useTheme()
  const [renderedTheme, setRenderedTheme] = useState(theme)
  useEffect(() => {
      /** Do inside useEffect to make sure it runs on client */
     setRenderedTheme( theme === 'system' ? systemTheme : theme)
  }, [theme, systemTheme])

  useEffect(() => {
    let phi = 0;
    let r = renderedTheme === 'dark'
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 400 ,
      height: 400,
      phi: 0,
      theta: 0,
      dark: r ? 1 : .1,
      diffuse: 1.2,
      offset: [160, 100],
      mapSamples: 16000,
      mapBrightness: r ? 20 : 4,
      baseColor: r ? [.1, .1, .1] : [1, 1, 1],
      scale: 2.5,
      markerColor: [94 / 255, 169 / 255, 221 / 255],
      glowColor: r ? [.3, .3, .3] : [1, 1, 1],
      markers: POPS.map(([lng,lat]) => (
        // longitude latitude
        { location: [lng, lat], size: 0.05 }
      )),
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.002;
      }
    });

    return () => {
      globe.destroy();
    };
  }, [renderedTheme]);

  return (
    <div >
    <div className='has-tooltip' style={{ marginLeft: 'auto', marginRight: 'auto', width: 400, height: 250, maxWidth: "100%", aspectRatio: '1' }}>
    <span className='tooltip rounded shadow-lg px-4 py-1 bg-gray-100 dark:bg-gray-800 text-blue-400 -mt-8'>Edge locations of IOPA in use</span>
        <canvas
        data-tooltip-target="tooltip-default"
            ref={canvasRef}
            style={{ marginLeft: 'auto', marginRight: 'auto', width: 400, height: 250, maxWidth: "100%", aspectRatio: '1' }}
        />
    </div>
    </div>
  );
}
