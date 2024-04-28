import { useState, useEffect } from 'react';
import axios from 'axios';

function UserListPage() {
  const [userList, setUserList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const token = localStorage.getItem('access_token');

        setLoading(true); // set loading before sending API request
        const response = await axios.get('https://dev-tuts-backend.vercel.app/users', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });


        setUserList(response.data);
        setLoading(false); // stop
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };
    fetchUserList();
  }, []);

  const handleRefresh = () => {
    window.location.reload(); // Refresh the page
  };
  console.log('loading', loading);
  return (
    <div>
      <div>
        {/* Button to refresh the page */}
        <button
          type="button"
          onClick={handleRefresh}
          className="px-4 py-2 text-gray-700 bg-gray-300 rounded-md"
        >
          Refresh
        </button>
      </div>
      {error && <p>{error}</p>}
      <h1>User List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(userList) && userList.length > 0 ? (
            userList.map(user => (
              <tr key={user.id}>
                <td>{user.first_name}</td>
                <td>{user.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UserListPage;
