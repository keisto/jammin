import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBoombox,
  faHomeBlank,
  faSearch,
  faHeart,
  faPlus,
  faAlbumCollection,
  faListMusic,
} from '@fortawesome/pro-regular-svg-icons'

const navMenu = [
  {
    name: 'Home',
    icon: faHomeBlank,
    route: '/',
  },
  {
    name: 'Search',
    icon: faSearch,
    route: '/search',
  },
  {
    name: 'Collection',
    icon: faAlbumCollection,
    route: '/collection',
  },
]

const musicMenu = [
  {
    name: 'Create Playlist',
    icon: faPlus,
    route: '/',
  },
  {
    name: 'Favorites',
    icon: faHeart,
    route: '/favorites',
  },
]

const playlists = [
  {
    name: 'Playist 1',
    icon: faListMusic,
    route: '/',
  },
  {
    name: 'Playist 2',
    icon: faListMusic,
    route: '/',
  },
  {
    name: 'Playist 3',
    icon: faListMusic,
    route: '/',
  },
]

const Sidebar = () => {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <div className="pb-6 h-full">
        <div className="flex items-center space-x-6 px-3">
          <FontAwesomeIcon
            className="text-red-500 dark:text-red-500 text-lg"
            icon={faBoombox}
            fixedWidth
          />
          <h1 className="font-bold">Zunify</h1>
        </div>
        <div className="mt-12 space-y-12 h-full overflow-y-auto">
          <ul className="space-y-4  pt-1">
            {navMenu.map((item) => (
              <li key={item.name}>
                <Link href={item.route} passHref>
                  <a className="flex items-center space-x-6 border border-transparent hover:border-gray-300/25 px-3 py-2.5 rounded-md hover:bg-gradient-to-b hover:from-white/10 hover:via-gray-400/20 hover:to-white/10 duration-500 transition-all ease-out filter hover:backdrop-blur-md hover:shadow-lg transition hover:-translate-y-1 group text-white/80 hover:text-white">
                    <FontAwesomeIcon
                      className="text-white/20 group-hover:text-white duration-300 transition-colors"
                      icon={item.icon}
                      fixedWidth
                    />
                    <span>{item.name}</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <ul className="space-y-4 pt-1">
            {musicMenu.map((item) => (
              <li key={item.name}>
                <Link href={item.route} passHref>
                  <a className="flex items-center space-x-6 border border-transparent hover:border-gray-300/25 px-3 py-2.5 rounded-md hover:bg-gradient-to-b hover:from-white/10 hover:via-gray-400/20 hover:to-white/10 duration-500 transition-all ease-out filter hover:backdrop-blur-md hover:shadow-lg transition hover:-translate-y-1 group text-white/80 hover:text-white">
                    <FontAwesomeIcon
                      className="text-white/20 group-hover:text-white duration-300 transition-colors"
                      icon={item.icon}
                      fixedWidth
                    />
                    <span>{item.name}</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <ul className="space-y-4 h-[55%] overflow-y-auto  pt-1">
            {playlists.map((item) => (
              <li key={item.name}>
                <Link href={item.route} passHref>
                  <a className="flex items-center space-x-6 border border-transparent hover:border-gray-300/25 px-3 py-2.5 rounded-md hover:bg-gradient-to-b hover:from-white/10 hover:via-gray-400/20 hover:to-white/10 duration-500 transition-all ease-out filter hover:backdrop-blur-md hover:shadow-lg transition hover:-translate-y-1 group text-white/80 hover:text-white">
                    <FontAwesomeIcon
                      className="text-white/20 group-hover:text-white duration-300 transition-colors"
                      icon={item.icon}
                      fixedWidth
                    />
                    <span>{item.name}</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
