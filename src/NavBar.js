import valtLogo from './assets/valt_logo_prototype.png';

export default function NavBar() {
    return <nav className="nav" style={{
        width: '100%', 
        backgroundColor: '#000000', 
        padding: '10px 20px',
        height: '60px',
        borderBottom: '1px solid #ccc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start', // Changed from space-between to flex-start
    }}>
        <a href="http://localhost:3001">
            <img 
            src={valtLogo} 
            alt="VALT Logo" 
            style={{ height: '50px', marginLeft: '-10px', marginRight: '10px' }}
            onError={(e) => {
                e.target.style.display = 'none';
            }}
        />
        </a>
        <ul style={{
            display: 'flex',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            gap: '20px', 
            marginLeft: '700px', 
        }}>
            <li>
                <a href="/overview" className="nav-button" style={{
                    display: 'inline-block',
                    marginRight: '20px',
                    padding: '10px 20px',
                    backgroundColor: '#617764ff',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                    border: 'none',
                    cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#4a5a4d';
                    e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#617764ff';
                    e.target.style.transform = 'translateY(0)';
                }}
                > Home</a>
            </li>
            <li>
                <a href="/statsPage" className="nav-button" style={{
                    display: 'inline-block',
                    padding: '10px 20px',
                    backgroundColor: '#617764ff',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontSize: '16px',
                    paddingRight: '20px',
                    paddingLeft: '20px',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                    border: 'none',
                    cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#4a5a4d';
                    e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#617764ff';
                    e.target.style.transform = 'translateY(0)';
                }}
                > Analytics</a>
            </li>
            <li>
                <a href="/devices" className="nav-button" style={{
                    display: 'inline-block',
                    padding: '10px 20px',
                    backgroundColor: '#617764ff',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontSize: '16px',
                    paddingRight: '20px',
                    paddingLeft: '20px',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                    border: 'none',
                    cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#4a5a4d';
                    e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#617764ff';
                    e.target.style.transform = 'translateY(0)';
                }}
                > Devices</a>
            </li>
            <li>
                <a href="/settings" className="nav-button" style={{
                    display: 'inline-block',
                    padding: '10px 20px',
                    backgroundColor: '#617764ff',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    paddingRight: '20px',
                    paddingLeft: '20px',
                    fontSize: '16px',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                    border: 'none',
                    cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#4a5a4d';
                    e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#617764ff';
                    e.target.style.transform = 'translateY(0)';
                }}
                > Settings</a>
            </li>
        </ul>
    </nav>
}