import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  CheckSquare,
  Users,
  BarChart2,
  Upload,
  Calendar,
  Settings,
  Bell,
  User,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Menu,
} from "lucide-react";


const SidebarItem = ({ 
  icon: Icon, 
  label, 
  href, 
  isActive, 
  isSidebarExpanded,
  onClick
}) => {
  return (
    <Link
      to={href}
      className={`flex items-center rounded-lg px-3 py-2 text-gray-700 transition-all duration-200 ${
        isActive 
          ? "bg-blue-100 text-blue-600 font-medium" 
          : "hover:bg-gray-100"
      }`}
      onClick={onClick}
    >
      <Icon className={`flex-shrink-0 ${isActive ? "text-blue-600" : "text-gray-500"}`} size={20} />
      {isSidebarExpanded && (
        <span className="ml-3 transition-opacity duration-200 whitespace-nowrap">{label}</span>
      )}
    </Link>
  );
};

const Sidebar = ({ userRole }) => {
  const [expanded, setExpanded] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  
  const toggleSidebar = () => setExpanded(!expanded);
  const toggleMobileSidebar = () => setMobileOpen(!mobileOpen);
  
 
  const getMenuItems = () => {
    const commonItems = [
      { icon: Bell, label: "Notifications", href: `/${userRole}/notifications` },
      { icon: Settings, label: "Settings", href: `/${userRole}/settings` },
    ];

    const roleSpecificItems = {
    
      worker: [
        { icon: Home, label: "Dashboard", href: "/worker" },
        { icon: CheckSquare, label: "Tasks", href: "/worker/tasks" },
        { icon: Calendar, label: "Schedule", href: "/worker/schedule" },
        { icon: Upload, label: "Documentation", href: "/worker/documentation" },
        { icon: User, label: "Profile", href: "/worker/profile" },
      ],
      admin: [
        { icon: Home, label: "Dashboard", href: "/admin" },
        { icon: Users, label: "User Management", href: "/admin/users" },
        { icon: CheckSquare, label: "Task Management", href: "/admin/tasks" },
        { icon: BarChart2, label: "Reports", href: "/admin/reports" },
      ]
    };

    return [...(roleSpecificItems[userRole] || []), ...commonItems];
  };
  
  const menuItems = getMenuItems();
  
  return (
    <>
     
      <div className="lg:hidden fixed top-4 left-4 z-30">
        <button
          onClick={toggleMobileSidebar}
          className="rounded-full bg-white shadow-md p-2 border border-gray-200 hover:bg-gray-100 transition-colors"
        >
          <Menu size={20} className="text-gray-600" />
        </button>
      </div>
      
    
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-30 lg:hidden"
          onClick={toggleMobileSidebar}
        />
      )}
      
    
      <aside
        className={`fixed inset-y-0 left-0 z-40 bg-white border-r border-gray-200 transition-all duration-300 flex flex-col ${
          expanded ? "w-64" : "w-[72px]"
        } ${
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
     
        <div className={`flex items-center p-4 border-b border-gray-200 ${
          expanded ? "justify-between" : "justify-center"
        }`}>
          {expanded && (
            <Link to="/" className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="text-white h-5 w-5"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
              </div>
              <span className="ml-2 font-bold text-lg text-gray-800">Health Staff</span>
            </Link>
          )}
          
          <button 
            onClick={toggleSidebar}
            className="hidden lg:flex p-1 rounded-md hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
          >
            {expanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
          
          <button 
            onClick={toggleMobileSidebar}
            className="lg:hidden p-1 rounded-md hover:bg-gray-100 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
        </div>
        
     
        <nav className="flex-1 overflow-y-auto p-3 space-y-1">
          {menuItems.map((item) => (
            <SidebarItem
              key={item.href}
              icon={item.icon}
              label={item.label}
              href={item.href}
              isActive={location.pathname.startsWith(item.href)}
              isSidebarExpanded={expanded}
              onClick={() => setMobileOpen(false)}
            />
          ))}
        </nav>
        
      
        <div className="p-3 border-t border-gray-200">
          <Link 
            to="/logout" 
            className="flex items-center rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            <LogOut size={20} className="text-gray-500" />
            {expanded && <span className="ml-3">Logout</span>}
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;