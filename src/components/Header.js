function Header() {
    return (
        <ul className="flex ml-auto w-full font-bold">
            <li className="text-xs text-gray-800 ml-auto mr-6 border-b-2 border-green-400">Weather</li>
            <li className="text-xs text-gray-800 mr-6 alert-notice">Alerts</li>
            <li className="text-xs text-gray-800 mr-6">Map</li>
            <li className="text-xs text-gray-800 mr-6">Satellite</li>
            <li className="text-xs text-gray-800">News</li>
        </ul>
    )
}

export default Header
