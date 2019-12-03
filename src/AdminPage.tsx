import * as React from "react";
import { NavLink, Route, RouteComponentProps } from "react-router-dom";

const AdminPage: React.SFC = () => {
  return (
    <div className="page-container">
      <h1>Admin Panel</h1>
      <ul className="admin-sections">
        <li key="users">
          <NavLink to={`/admin/users`} activeClassName="admin-link-active">
            Users
          </NavLink>
        </li>
        <li key="products">
          <NavLink to={`/admin/products`} activeClassName="admin-link-active">
            Products
          </NavLink>
        </li>
      </ul>
      <p>You should only be here if you have logged in</p>
      <ul>
        <Route path="/admin/users" component={AdminUsers} />
        <Route path="/admin/products" component={AdminProducts} />
      </ul>
    </div>
  );
};

interface IUser {
  id: number;
  name: string;
  isAdmin: boolean;
}

const adminUsersData: IUser[] = [
  { id: 1, name: "Fred", isAdmin: true },
  { id: 2, name: "Mike", isAdmin: false },
  { id: 3, name: "Alex", isAdmin: true }
];

const AdminUsers: React.SFC = () => {
  return (
    <div>
      <ul className="admin-sections">
        {adminUsersData.map(user => (
          <li>
            <NavLink
              to={`/admin/users/${user.id}`}
              activeClassName="admin-link-active"
            >
              {user.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <Route path="/admin/users/:id" component={AdminUser} />
    </div>
  );
};

const AdminUser: React.SFC<RouteComponentProps<{ id: string }>> = props => {
  let user: IUser;
  if (props.match.params.id) {
    const id: number = parseInt(props.match.params.id, 10);
    user = adminUsersData.filter(u => u.id === id)[0];
  } else {
    return null;
  }
  return (
    <div>
      <div>
        <b>Id: </b>
        <span>
          <i>{user.id.toString()}</i>
        </span>
      </div>
      <div>
        <b>is Admin: </b>
        <span>
          <i>{user.isAdmin.toString()}</i>
        </span>
      </div>
    </div>
  );
  return null;
};

const AdminProducts: React.SFC = () => {
  return <div>Some options to administer products</div>;
};

export default AdminPage;
