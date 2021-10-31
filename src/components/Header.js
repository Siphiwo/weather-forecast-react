function Header() {
    return (
        <ul className="flex ml-auto w-full font-bold">
            <li className="text-xs text-gray-800 ml-auto mr-6 border-b-2 border-green-400 cursor-pointer">Weather</li>
            <li className="text-xs text-gray-800 mr-6 alert-notice cursor-pointer border-b-2 hover:border-green-400">Alerts</li>
            <li className="text-xs text-gray-800 mr-6 cursor-pointer border-b-2 hover:border-green-400">Map</li>
            <li className="text-xs text-gray-800 mr-6 cursor-pointer border-b-2 hover:border-green-400">Satellite</li>
            <li className="text-xs text-gray-800 cursor-pointer border-b-2 hover:border-green-400">News</li>
        </ul>
    )
}

export default Header
