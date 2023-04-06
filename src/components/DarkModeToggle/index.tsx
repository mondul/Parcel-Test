import { useStore } from '@nanostores/preact'

import { darkmode, setDarkMode } from '../../store/darkmode'

import './dark_mode_toggle.scss'

// https://openmoji.org/data/color/svg/1F319.svg
const Moon = () => <svg viewBox="0 0 72 72">
  <g>
    <path fill="#FCEA2B" stroke="none" d="M7.3634,42.4095c4.5525,6.1703,11.874,10.1726,20.1303,10.1726c13.8071,0,25-11.1929,25-25 c0-8.5226-4.2646-16.0492-10.7763-20.5621c13.0383,2.8385,22.7812,14.4426,22.7812,28.3317c0,16.0163-12.9837,29-29,29 C21.9109,64.3517,10.5097,55.0229,7.3634,42.4095z"/>
    <path fill="#F1B31C" stroke="none" d="M45.8373,9.2108c8.25,4.25,16.1946,11.8724,16.1946,24.6742c0,15.4494-12.5242,27.9735-27.9735,27.9735 c-9.2431,0-19.7524-4.8353-24.294-15.5436c0,0,4.3805,18.6568,25.7189,18.665c19.327,0.0074,28.0419-20.6218,28.0419-20.6218 C70.033,12.3815,45.8373,9.2108,45.8373,9.2108z"/>
  </g>
  <g>
    <path fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M7.3634,42.4095c4.5525,6.1703,11.874,10.1726,20.1303,10.1726c13.8071,0,25-11.1929,25-25 c0-8.5226-4.2646-16.0492-10.7763-20.5621c13.0383,2.8385,22.7812,14.4426,22.7812,28.3317c0,16.0163-12.9837,29-29,29 C21.9109,64.3517,10.5097,55.0229,7.3634,42.4095z"/>
  </g>
</svg>

// https://openmoji.org/data/color/svg/2600.svg
const Sun = () => <svg viewBox="0 0 72 72">
  <g>
    <polygon fill="#FCEA2B" stroke="none" points="66,36 55.3235,41.1816 61.9819,51.0063 50.1418,50.1424 51.0056,61.9823 41.1813,55.3236 36,66 30.8184,55.3235 20.9937,61.9819 21.8576,50.1418 10.0177,51.0056 16.6764,41.1813 6,36 16.6765,30.8184 10.0181,20.9937 21.8582,21.8576 20.9944,10.0177 30.8187,16.6764 36,6 41.1816,16.6765 51.0063,10.0181 50.1424,21.8582 61.9823,20.9944 55.3236,30.8187"/>
  </g>
  <g>
    <circle cx="36" cy="35.95" r="19.8276" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2"/>
    <polygon fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" points="66,36 55.3235,41.1816 61.9819,51.0063 50.1418,50.1424 51.0056,61.9823 41.1813,55.3236 36,66 30.8184,55.3235 20.9937,61.9819 21.8576,50.1418 10.0177,51.0056 16.6764,41.1813 6,36 16.6765,30.8184 10.0181,20.9937 21.8582,21.8576 20.9944,10.0177 30.8187,16.6764 36,6 41.1816,16.6765 51.0063,10.0181 50.1424,21.8582 61.9823,20.9944 55.3236,30.8187"/>
  </g>
</svg>

// -
export default function DarkModeToggle() {
  const is_dark = useStore(darkmode)

  function changeDarkMode() {
    document.body.className = is_dark ? '' : 'darkmode'
    setDarkMode(!is_dark)
  }

  return <label id="dark-toggle">
    <input type="checkbox" checked={is_dark} onClick={changeDarkMode} />
    <span>{is_dark ? <Moon /> : <Sun />}</span>
  </label>
}
