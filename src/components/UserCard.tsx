import "./UserCard.css";

interface UserCardProps {
  name: string;
}

export default function UserCard({ name }: UserCardProps) {
  return (
    <section className="user-card-profile">
      <h1>User name: {name}</h1>
    </section>
  );
}
