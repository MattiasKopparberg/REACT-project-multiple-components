import { useIsOpen } from '../Context/IsOpen';

const Sidebar = () => {
  const { isOpen } = useIsOpen();

  return (
    <aside className={isOpen ? 'active' : 'hidden'}>
      <div className={`sidebarNav ${isOpen ? 'active' : 'hidden'}`}>
        <a href="#">Dashboard</a>
        <a href="#">Settings</a>
        <a href="#">Logout</a>
      </div>
    </aside>
  );
};

export default Sidebar;