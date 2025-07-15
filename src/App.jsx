import WaitingListForm from "./WaitingListForm";
import "./index.css"; // must stay

export default function App() {
  return (
    <section className="card">
      <h1>Join the Oink Waiting List</h1>
      <h2>Be the first to invest your spare change into crypto 🐷</h2>
      <WaitingListForm />
    </section>
  );
}