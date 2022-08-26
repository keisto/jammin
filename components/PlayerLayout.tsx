import Sidebar from './Sidebar'

const PlayerLayout = ({ children }) => {
  return (
    <div
      className="w-screen h-screen min-h-full text-white"
      style={{
        backgroundImage: `url("https://media0.giphy.com/media/xUOwGcu6wd0cXBj5n2/giphy.gif?cid=ecf05e47rsmqu70zb1kcvquvvqruyjhpm05ey1unypcn3fhp&rid=giphy.gif&ct=g")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className="bg-black/40 absolute w-[320px] p-6 filter backdrop-blur"
        style={{ height: 'calc(100vh - 5rem)' }}
      >
        <Sidebar />
      </div>
      <div
        className="ml-[320px] p-6 bg-black/20"
        style={{ minHeight: 'calc(100vh - 5rem)' }}
      >
        {children}
      </div>
      <div className="absolute bottom-0 w-screen bg-black/40 h-20 filter backdrop-blur">
        Player
      </div>
    </div>
  )
}

export default PlayerLayout
