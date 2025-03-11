import UserCard from "./UserCard";

interface UserListProps {
  users: { name: string }[];
}

export default function UserList({ users }: UserListProps) {
  return (
    <ul>
      {users.map(({ name }) => {
        return (
          <li key={name}>
            <UserCard name={name} />
          </li>
        );
      })}
    </ul>
  );
}
