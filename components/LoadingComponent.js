const LoadingScreen = () => {
  return (
    <div className="screen fadeOut">
      <div className="balls">
        <div className="ball one">
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 352 630.4"
          >
            <path d="M117.29,41.91V268.7a198,198,0,0,1,29.91-9V41.91Z" />
            <path d="M30.13,441A155.39,155.39,0,0,0,300.4,545.36a114.69,114.69,0,1,1,0-208.63A155.38,155.38,0,0,0,29.73,441Z" />
          </svg>
        </div>
        <div className="ball two">
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 249.6 316.5"
          >
            <path d="M94.92,70.7v54.46a92.82,92.82,0,0,1,15.15-1.6,88,88,0,0,1,14.76,1.6V70.7Z" />
            <path d="M110.09,153.47a74.21,74.21,0,1,0,52.34,21.81,74.22,74.22,0,0,0-52.34-21.81Z" />
          </svg>
        </div>
        <div className="ball three">
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 245.95 516.99"
          >
            <path d="M105.53,0V257.9L132.45,236l3-1.6L135.46,0Z" />
            <path d="M152.8,517l21.94-82.38L246,387.54l-71.81-46.27-22.75-82.19L85.18,312.94,0,309.15l30.92,79.59L1,468.73l85.18-4.8Z" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen
