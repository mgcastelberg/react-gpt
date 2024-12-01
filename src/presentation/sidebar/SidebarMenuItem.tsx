import { NavLink } from "react-router-dom"

interface Props{
    to: string;
    icon: string;
    title: string;
    description: string;
}

// desestructuramos de la props
export const SidebarMenuItem = ({
    to, icon, title, description
}:Props) => {
    return (
        <NavLink
            key={to}
            to={to}
            className={({ isActive }) => isActive
            ? 'flex justify-center items-center bg-gray-800 rounded-md p-2 transition-colors'
            : 'flex justify-center items-center hover:bg-gray-800 rounded-md p-2 transition-colors'
            }
        >
            <i className={`${icon} text-2xl mr-4 text-indigo-400`}></i>
            <div className="flex flex-col flex-grow">
                <span className="text-lg font-semibold text-white">{ title }</span>
                <span className="text-sm text-gray-400">{ description }</span>
            </div>
        </NavLink>
    )
}
