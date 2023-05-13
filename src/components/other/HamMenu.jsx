import { Link, useLocation } from "react-router-dom"
import { useState,useEffect } from "react"
function HamMenu({ham}) {
    const location = useLocation()
    const [url, setUrl] = useState("")
    const nav_routes_array = [["Ana səhifə", "/"],
    ["Avtomobillər", "avtomobiller"],
    ["Lorem1", "lorem1"],
    ["Lorem2", "lorem2"],
    ["Lorem3", "lorem3"],
    ["Lorem4", "lorem4"]
    ]

    useEffect(() => {
        setUrl(location.pathname)
    })

    const nav_routes_ui = nav_routes_array.map((ui, id) => {
        let path;
        if (ui[1] !== "/") {
            path = "/" + ui[1]
        } else {
            path = "/"
        }

        return (
            <Link style={url === path ? { fontWeight: '700' } : {}} className='text-[14px] text-center text-black' key={id} to={ui[1]}>{ui[0]}</Link>
        )
    })

    return (
        <div style={ham ? {display:'flex'} : {display:'none'}} className="hidden flex-col gap-y-4  z-50 duration-300 py-2 min768:!hidden">
            {nav_routes_ui}
        </div>
    )
}

export default HamMenu
