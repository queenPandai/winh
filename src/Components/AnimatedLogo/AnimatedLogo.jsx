import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import Whlogo from '../../assets/images/Wh.png'
import './AnimatedLogo.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 0,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 25,
        opacity: 0.3,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 0.8,
        delay: 9,
        duration: 3,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={Whlogo}
      />

      <svg
        width="780px"
        height="780px"
        version="1.0"
        viewBox="0 0 780 780"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          fill="none"
        >
          <path
            ref={outlineLogoRef}
            d="M 161 349.14 L 134.78 349.14 L 50.14 92.92 A 167.402 167.402 0 0 0 43.8 76.2 A 142.423 142.423 0 0 0 40.48 69.23 A 332.663 332.663 0 0 0 36.469 61.608 Q 34.448 57.89 32.567 54.7 A 164.483 164.483 0 0 0 30.36 51.06 A 351.66 351.66 0 0 0 28.48 48.082 Q 25.906 44.056 24.477 42.127 A 24.977 24.977 0 0 0 23.92 41.4 L 47.38 57.04 L 0 46.46 L 2.3 22.54 Q 11.04 23 21.85 23.46 Q 32.66 23.92 41.86 24.38 Q 51.06 24.84 55.66 24.84 Q 66.7 24.84 77.97 24.38 Q 89.24 23.92 100.05 23.46 Q 109.34 23.065 116.761 22.669 A 1044.278 1044.278 0 0 0 119.14 22.54 L 120.98 48.76 L 69 56.12 L 83.26 43.24 Q 84.18 50.14 85.79 58.42 A 269.766 269.766 0 0 0 87.419 66.149 Q 88.608 71.429 90.16 77.51 A 822.416 822.416 0 0 0 92.424 86.167 Q 94.473 93.84 97.06 103.04 L 155.94 298.08 L 147.2 298.08 L 224.94 33.58 L 247.48 33.58 L 331.2 298.08 L 322 298.08 L 384.1 81.88 A 164.374 164.374 0 0 0 386.526 71.314 A 134.358 134.358 0 0 0 387.55 65.32 A 255.473 255.473 0 0 0 388.424 58.83 Q 388.901 54.884 389.16 51.52 A 243.226 243.226 0 0 0 389.361 48.703 Q 389.559 45.665 389.606 43.537 A 55.999 55.999 0 0 0 389.62 42.32 L 404.8 56.58 L 353.74 46.46 L 356.04 22.54 Q 368.92 23.46 379.5 24.15 Q 388.964 24.767 395.116 24.832 A 132.832 132.832 0 0 0 396.52 24.84 Q 408.48 24.84 420.67 24.38 Q 432.86 23.92 443.9 23.46 Q 454.94 23 463.22 22.54 L 465.06 48.76 L 416.76 53.82 L 440.22 38.64 Q 436.54 45.08 431.02 54.51 A 265.836 265.836 0 0 0 423.539 68.237 A 315.039 315.039 0 0 0 420.21 74.98 Q 414.92 86.02 411.24 97.06 L 335.8 349.14 L 309.58 349.14 L 226.78 98.44 L 235.52 98.44 L 161 349.14 Z M 499.1 351.44 L 496.8 329.36 L 548.32 318.78 L 529.92 335.8 Q 530.767 332.411 532.2 324.341 A 597.485 597.485 0 0 0 532.45 322.92 Q 534.06 313.72 535.67 303.37 Q 536.997 294.839 537.23 289.59 A 47.258 47.258 0 0 0 537.28 287.5 L 537.28 64.86 A 82.544 82.544 0 0 0 537.144 60.341 Q 536.885 55.638 536.13 49.45 A 527.547 527.547 0 0 0 534.146 34.917 A 590.607 590.607 0 0 0 533.37 29.9 A 627.454 627.454 0 0 0 532.195 22.763 Q 531.719 19.978 531.265 17.507 A 299.475 299.475 0 0 0 530.38 12.88 L 548.32 34.04 L 497.72 23 L 500.02 0 L 540.96 1.38 L 566.26 1.38 L 575 9.66 Q 574.54 16.56 573.85 28.75 Q 573.16 40.94 572.7 54.28 Q 572.24 67.62 572.24 78.66 L 572.24 168.36 L 568.1 160.08 Q 575.454 145.372 591.555 132.697 A 122.988 122.988 0 0 1 593.63 131.1 Q 611.34 117.76 638.02 117.76 Q 670.22 117.76 686.78 131.1 Q 703.34 144.44 709.32 168.36 Q 715.3 192.28 715.3 224.48 L 715.3 273.7 Q 715.3 290.72 716.91 307.28 Q 718.143 319.959 719.24 328.323 A 260.434 260.434 0 0 0 719.9 333.04 L 703.34 320.62 L 755.32 325.22 L 752.1 349.14 L 693.22 349.14 A 74.91 74.91 0 0 0 691.317 349.169 Q 687.995 349.255 681.95 349.6 Q 673.9 350.06 664.47 350.52 Q 655.04 350.98 647.22 351.44 L 644.92 329.36 L 690.92 318.32 L 673.9 328.9 A 154.989 154.989 0 0 0 674.967 325.159 Q 675.884 321.799 676.89 317.63 A 150.223 150.223 0 0 0 678.702 308.959 A 185.577 185.577 0 0 0 679.65 303.14 Q 680.8 295.32 680.8 287.5 L 680.8 223.56 Q 680.8 203.32 677.12 185.15 A 71.228 71.228 0 0 0 672.368 170.053 A 54.056 54.056 0 0 0 662.86 155.48 Q 652.28 143.98 632.04 143.98 Q 604.57 143.98 589.003 165.362 A 63.796 63.796 0 0 0 588.34 166.29 A 85.322 85.322 0 0 0 575.33 196.006 Q 572.615 207.512 572.275 220.853 A 149.122 149.122 0 0 0 572.24 222.64 L 572.24 273.7 Q 572.24 291.64 573.62 310.5 Q 574.891 327.868 576.162 336.264 A 93.53 93.53 0 0 0 576.38 337.64 L 559.36 320.62 L 611.34 325.22 L 608.12 349.14 L 549.7 349.14 A 126.378 126.378 0 0 0 547.141 349.169 Q 542.915 349.255 536.36 349.6 Q 527.62 350.06 517.73 350.52 Q 507.84 350.98 499.1 351.44 Z" />
        </g>
      </svg>

      
    </div>
  )
}

export default Logo
